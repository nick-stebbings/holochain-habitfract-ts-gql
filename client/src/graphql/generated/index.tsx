import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateDomainInput = {
  description: Scalars['String'];
  hashtag: Scalars['String'];
};

export type CrudDomainPayload = {
  __typename?: 'CrudDomainPayload';
  agent_address: Scalars['String'];
  domain: DomainEdge;
};

export type Domain = Node & {
  __typename?: 'Domain';
  description: Scalars['String'];
  hashtag: Scalars['String'];
  id: Scalars['ID'];
};

export type DomainConnection = {
  __typename?: 'DomainConnection';
  edges: Array<DomainEdge>;
  pageInfo: PageInfo;
};

export type DomainEdge = {
  __typename?: 'DomainEdge';
  cursor: Scalars['String'];
  node: Domain;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDomain: CrudDomainPayload;
};


export type MutationCreateDomainArgs = {
  input: CreateDomainInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  apiVersion: Scalars['String'];
  domain: Domain;
  domains: DomainConnection;
};


export type QueryDomainArgs = {
  id: Scalars['ID'];
};

export type AddDomainMutationVariables = Exact<{
  input: CreateDomainInput;
}>;


export type AddDomainMutation = { __typename?: 'Mutation', createDomain: { __typename?: 'CrudDomainPayload', agent_address: string, domain: { __typename?: 'DomainEdge', node: { __typename?: 'Domain', id: string, description: string, hashtag: string } } } };

export type GetDomainsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDomainsQuery = { __typename?: 'Query', domains: { __typename?: 'DomainConnection', edges: Array<{ __typename?: 'DomainEdge', node: { __typename?: 'Domain', id: string, description: string, hashtag: string } }> } };


export const AddDomainDocument = gql`
    mutation addDomain($input: CreateDomainInput!) {
  createDomain(input: $input) {
    agent_address
    domain {
      node {
        id
        description
        hashtag
      }
    }
  }
}
    `;
export type AddDomainMutationFn = Apollo.MutationFunction<AddDomainMutation, AddDomainMutationVariables>;

/**
 * __useAddDomainMutation__
 *
 * To run a mutation, you first call `useAddDomainMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDomainMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDomainMutation, { data, loading, error }] = useAddDomainMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddDomainMutation(baseOptions?: Apollo.MutationHookOptions<AddDomainMutation, AddDomainMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddDomainMutation, AddDomainMutationVariables>(AddDomainDocument, options);
      }
export type AddDomainMutationHookResult = ReturnType<typeof useAddDomainMutation>;
export type AddDomainMutationResult = Apollo.MutationResult<AddDomainMutation>;
export type AddDomainMutationOptions = Apollo.BaseMutationOptions<AddDomainMutation, AddDomainMutationVariables>;
export const GetDomainsDocument = gql`
    query getDomains {
  domains {
    edges {
      node {
        id
        description
        hashtag
      }
    }
  }
}
    `;

/**
 * __useGetDomainsQuery__
 *
 * To run a query within a React component, call `useGetDomainsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDomainsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDomainsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDomainsQuery(baseOptions?: Apollo.QueryHookOptions<GetDomainsQuery, GetDomainsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDomainsQuery, GetDomainsQueryVariables>(GetDomainsDocument, options);
      }
export function useGetDomainsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDomainsQuery, GetDomainsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDomainsQuery, GetDomainsQueryVariables>(GetDomainsDocument, options);
        }
export type GetDomainsQueryHookResult = ReturnType<typeof useGetDomainsQuery>;
export type GetDomainsLazyQueryHookResult = ReturnType<typeof useGetDomainsLazyQuery>;
export type GetDomainsQueryResult = Apollo.QueryResult<GetDomainsQuery, GetDomainsQueryVariables>;