import React from 'react'
const axios = require("axios")


const Signin = (location) => {
    //redirects user to sign into samsung knox

    const getUser = () => {
       axios({
           method: 'get',
           url: "https://account.samsung.com/accounts/v1/dfltThirdParty/signInGate",
           response_type: "code%",
           redirect_uri: "https://localhost:3000"
           
       })
  
}
return(
    <div>
        <button getUser >Sign In</button>
    </div>
)
}



export default Signin