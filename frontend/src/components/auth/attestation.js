import React from 'react'
import axios from 'axios'

const { URL_MDM_SERVER_MEASUREMENTS, ATTESTATION_KEY, REQUEST_ID } = process.env;

const attestation = (res) => {
    // identify the URL of your web server
    
    // through HTTP, send a nonce request to your web server
 res = HttpClient.getInstance().getNonce(URL_MDM_SERVER_MEASUREMENTS, ATTESTATION_KEY, REQUEST_ID);
    
}



export default attestation