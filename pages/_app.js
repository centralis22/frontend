import { UserContextProvider } from '../context/user'
import { SurveyProgressContextProvider } from '../context/survey-progress'

export default function App({Component, pageProps}) {

  return (
    <UserContextProvider>
      <SurveyProgressContextProvider>
        <Component {...pageProps} />
      </SurveyProgressContextProvider>
    </UserContextProvider>
  )
}
