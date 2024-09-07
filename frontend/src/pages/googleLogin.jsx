import React, { useEffect, useContext } from 'react';
import AuthContext from './AuthContext.jsx';

const GoogleLoginButton = () => {
  const { googleLogin } = useContext(AuthContext);
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  useEffect(() => {
    if (window.google?.accounts) {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: googleLogin,
      });
      window.google.accounts.id.renderButton(
        document.getElementById('googleSignInDiv'),
        { theme: 'outline', size: 'large' }
      );
    }
  }, [googleLogin, clientId]);

  return <div id="googleSignInDiv"></div>;
};

export default GoogleLoginButton;
