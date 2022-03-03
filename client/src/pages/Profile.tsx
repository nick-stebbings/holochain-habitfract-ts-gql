import React from 'react'
import { Container } from '../styled'
import { AddDomainMutation, useAddDomainMutation } from '../graphql/generated'

interface ProfileProps {
  username: string
}

export const Profile: React.FC<ProfileProps> = ({ username }) => {
  const [addDomain, { data, error }] = useAddDomainMutation({
    variables: { input: { description: 'Hi', hashtag: '#sports' } },
  })

  return (
    <Container>
      <div className="text-xl">{username}</div>
    </Container>
  )
}
