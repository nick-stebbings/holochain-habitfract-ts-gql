import { AppWebsocket } from '@holochain/client'
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  Observable,
} from '@apollo/client'
import { print, stripIgnoredCharacters } from 'graphql'
import { APP_WS_PORT, HAPP_ID, HAPP_ZOME_NAME } from '../app/constants'

const serializeQuery = (query) => {
  query = print(query)
  query = stripIgnoredCharacters(query)
  query = query.replace(/"/g, '\\"')
  return query
}

const connect = async () => {
  const appWebsocket = await AppWebsocket.connect(
    'ws://localhost:' + APP_WS_PORT,
  )
  const appInfo = await appWebsocket.appInfo({ installed_app_id: HAPP_ID })
  return { appWebsocket, appInfo }
}

const holochainLink = new ApolloLink((operation) => {
  const query = serializeQuery(operation.query)
  const variables = JSON.stringify(operation.variables)

  return new Observable((observer) => {
    connect().then(({ appWebsocket, appInfo }) => {
      const cellId = appInfo.cell_data[0][0]
      const payload = {
        data: `{
              "query": "${query}",
              "variables": ${variables}
            }`,
      }
      appWebsocket
        .callZome({
          cap: null,
          cell_id: cellId,
          zome_name: HAPP_ZOME_NAME,
          fn_name: 'graphql',
          payload: payload,
          provenance: cellId[1],
        })
        .then((result) => {
          observer.next(JSON.parse(result.data))
          observer.complete()
        })
        .catch((e) => {
          observer.error(e)
        })
    })
  })
})

export default new ApolloClient({
  link: holochainLink,
  cache: new InMemoryCache(),
})
