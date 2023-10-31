import { ApolloClient, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { createUploadLink } from 'apollo-upload-client'
import { API_URL } from '@constants'
import { isLogin } from '@utils'

const httpLink = createUploadLink({ uri: API_URL })

const authLink = setContext((_, { headers }) => {
    const token = isLogin()
    return {
        headers: {
            ...headers,
            'Apollo-Require-Preflight': true,
            Authorization: token ? `JWT ${token}` : '',
        },
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})

export default client
