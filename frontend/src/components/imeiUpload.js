import React from 'react'
import Axios from 'axios';
import attestation from './auth/attestation'
import '../css/imeiUpload.css'

const { license_trial } = process.env;

console.log("test");

const ImeiUpload = (res) => {
    
    const  handleSubmit = (e) => {
        e.preventDefault()
       let res = `https://us-kcs-api.samsungknox.com/kcs/v1/rp/devices/upload`
        

        
    }

    const handleSelect = () => {

    }

    
    return(
        <div>
            <form>
                <select name="option">
                    <option value="Upload">Upload</option>
                    <option value="Remove">Remove</option>
                </select>
                <input placeholder="IMEI" ></input>
                <button class="submit" handleSubmit>Submit</button>
            </form>
        </div>
    )
    }
    
     


export default ImeiUpload;