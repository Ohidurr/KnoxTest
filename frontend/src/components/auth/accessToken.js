import React from 'react'
const knoxTokenLibraryJs = require('knox-token-library-js');
const { accessToken } = proccess.env
const clientId = toString(accessToken);

const signedClientId = knoxTokenLibraryJs.generateSignedClientIdentifierJWT("keys.json", clientId );

const fetchToken = () => {
    url = "https://us-kcs-api.samsungknox.com/ams/v1/users/accesstoken"
    
}