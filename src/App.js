
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Main from './pages/Main'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'

import initStore from './redux/store'
const store = initStore()
function App() {
  return (
    <>
    <Provider store={store}>
    <Router />
    <div style={{height: 50, padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <h1 style={{margin: 10, paddingLeft: 10}}>invCapi</h1>
      <AmplifySignOut />
    </div>
    <Main />
    </Provider>
    </>
  );
}

export default withAuthenticator(App);
