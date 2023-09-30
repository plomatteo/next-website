import '../styles/globals.scss'
import Header from '../components/header'
import { ApolloProvider } from '@apollo/client/react'
import { client } from '../lib/apollo'

function MyApp({ Component, pageProps }) {
  return <>
    <Header />
  <ApolloProvider client={client}>
  <Component {...pageProps} />
  </ApolloProvider>
  </>
}

export default MyApp