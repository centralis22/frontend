import {UserContextProvider} from '../context/user'

export default function App({Component, pageProps}) {

  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  )
}
