import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
    uri:
        typeof window === "undefined"
            ? "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/graphql"
            : "/graphql",
})

const hostLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            Host: "microservicesnext.dev",
        },
    }
})

const client = new ApolloClient({
    link: hostLink.concat(httpLink),
    cache: new InMemoryCache(),
})

export default client
