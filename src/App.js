
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Main from './components/pages/Main'


function App() {
  return (
    <>
    <div style={{height: 50, padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <h1 style={{margin: 10, paddingLeft: 10}}>invCapi</h1>
      <AmplifySignOut />
    </div>
    <Main />

    </>
  );
}

export default withAuthenticator(App);
