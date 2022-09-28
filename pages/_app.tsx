import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { initI18n } from '../src/assets/lang';
import '../src/globals.css';
import { store } from '../src/redux';

function App({ Component, pageProps }: AppProps) {
  initI18n();
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default App;
