import { gql } from '@apollo/client'

export const LOGIN = gql`
    mutation loginUser($email: Email!, $password: String!){
        loginUser (email: $email, password: $password){
            jwtToken
            userInfo {
                firstName
            }
        }
    }
`
