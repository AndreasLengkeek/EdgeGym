import react from 'react';
import auth from '../modules/Auth';

const AuthButton = () => (
    auth.isUserAuthenticated() ? (
        <div>Hey! <button onClick={() => { auth.deauthenticateUser(); history.push('/') }}>Logout</button></div>
    ) : (
        <div>Login</div>
    )
)

export default AuthButton;
