import React from 'react'
import Axios from 'axios';


const { license_trial } = process.env;

console.log("test");

const ImeiUpload = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    <button>test4</button>
    return(
        <div>
            <form>
                <select name="option">
                    <option value="Upload">Upload</option>
                    <option value="Upload">Remove</option>
                </select>
                <input placeholder="IMEI" ></input>
                <button>Submit</button>
            </form>
        </div>
    )
    }
    
     


export default ImeiUpload;