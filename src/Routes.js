import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main'
import UserDetails from './pages/UserDetails'

const Routes = () => {
    return (
        <Switch>
            <Route path ="/" exact>
                <Main />
            </Route>
            <Route path="/UserDetails">
                <UserDetails />
            </Route>
        </Switch>
    )
}





// const Routes = () => {
// 	return (
// 		<Switch>
// 			<Route path="/" exact>
// 				<HomePage />
// 			</Route>
// 			<Route path="/secret">
// 				<SecretPage />
// 			</Route>

// 		    <Route path="/faq">
// 		      <FaqPage />
// 		    </Route>
// 		    <Route path="/login">
// 		      <LoginPage />
// 		    </Route>
// 				<Route path="/register">
// 		      <RegisterPage />
// 		    </Route>
// 		    <Route path="/profile">
// 					<ProfilePage />
// 			</Route>
// 			<Route path="/services/me">
// 				<UserServicesPage />
// 			</Route>
// 			<Route path="/services/new">
// 				<ServiceCreatePage />
// 			</Route>
// 		    <Route path="/services/:serviceId">
// 		      <ServiceDetailPage />
// 		    </Route>  
// 			<Route path="/services">
// 				<ServicesPage />
// 			</Route>      		
// 		</Switch>
// 	)
// }







export default Routes