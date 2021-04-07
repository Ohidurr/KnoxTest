import React from 'react'
const axios = require("axios")


const Signin = (location) => {
    //redirects user to sign into samsung knox

    const getUser = () => {
        try{
            axios.get("?client_Id=$`Id`& response_type=code&redirect_uri=$`http://localhost:3000`")
        }catch(error){
            console.log("error");
        }
    }
    return(

        <div>
            
    <a href="https://account.samsung.com/accounts/v1/dfltThirdParty/signInGate">

   <button>Sign In</button>
</a>
        </div>
    )
}


export default Signin