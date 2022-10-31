import React from 'react';
import'./css/contact.css';
<head>
    <link rel="StyleSheet" href="css/main.css"></link>

</head>

const Contact =()=>{
    return(
        <div className='contact' id="contact">
            <h1 className="heading">Contact Page</h1>
            <p className="sub-heading">The Information below is my Contact Info:-</p>
            <div className="contact-card">
                <div className="card">            
                    <h1>My Contact info is as follow</h1>
                    <ol>
                        <li>
                            Email:thalukanyo27@gmail.com
                        </li>
                        <li>
                            Contact-Number: 076 8072 357
                        </li>
                    </ol>

                </div>
                <div className="card">            
                    <h1>Thank you for taking time <br/> 
                    to read my Portfolio</h1>
                    <p></p>

                </div>
                
            </div>
        </div>

    )
}

export default Contact