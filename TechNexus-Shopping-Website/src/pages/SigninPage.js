import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import ScrollToTop from '../components/ScrollToTop';
import SignIn from '../components/Signin';

const SigninPage = () => {
    const history = useHistory();

    useEffect(() => {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: 'YOUR_FACEBOOK_APP_ID', // Replace with your Facebook app ID
                cookie: true,
                xfbml: true,
                version: 'v12.0',
            });
        };
    }, []);

    const handleFacebookLogin = () => {
        window.FB.login((response) => {
            if (response.authResponse) {
                const { accessToken } = response.authResponse;
                Cookies.set('fbToken', accessToken, { expires: 1 });
                history.push('/order-confirmation');
            } else {
                console.error('User cancelled login or did not fully authorize.');
            }
        }, { scope: 'public_profile,email' });
    };

    return (
        <>
            <ScrollToTop />
            <SignIn />
            <div>
                <h1>Sign In</h1>
                <button onClick={handleFacebookLogin}>Continue with Facebook</button>
            </div>
        </>
    );
};

export default SigninPage;
