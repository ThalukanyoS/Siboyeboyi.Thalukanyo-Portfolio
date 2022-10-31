import React from 'react';
import'./css/Navbar.css';
<head>
    <link rel="StyleSheet" href="css/main.css"></link>

</head>
const Navbar = ()=>{
        return(
            <div className="navbar">
                <a href="/" className="logo"> Thalukanyo Siboyeboyi SovTechPortfolio</a>
                <ul>
                    <li className='active' ><a href='#home'>Home</a></li>
                    <li><a href='#experience'>Experience</a></li>
                    <li><a href='#education'>Education</a></li>
                    <li><a href='#contact'> Contact</a></li>
                
                    
                </ul>
            </div>
        );
}

export default Navbar;