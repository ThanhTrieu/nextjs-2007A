import 'antd/dist/antd.css'
import '../styles/globals.css'

import { Provider } from 'react-redux'
import { wrapper, configStore } from '../redux/configStore'


function MyApp({ Component, pageProps }) {
  const store = configStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)
