import React from 'react'
import axios from 'axios'

const { ATTESTATION_KEY, REQUEST_ID } = process.env;

const attestation = (url) => {
    // identify the URL of your web server
    url = "http://attestation.example.com/nonces"
    // through HTTP, send a nonce request to your web server
 response = HttpClient.getInstance().getNonce(url, $`ATTESTATION_KEY`, $`REQUEST_ID`);
    
}

const 

export default attestation