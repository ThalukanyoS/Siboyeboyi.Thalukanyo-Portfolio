import React from 'react';
import'./css/Education.css';
<head>
    <link rel="StyleSheet" href="css/main.css"></link>

</head>

const Education =()=>{
    return(
        <div className='education' id="education">
            <h1 className="heading">Education History</h1>
            <p className="sub-heading">The Information below is my Education History:-</p>
            <div className="education-card">
                <div className="card">            
                    <h1>Tshivhase Secondary School(From 2013 to 2017)</h1>
                    <h1>Subjects</h1>
                    <ol>
                        <li>Mathematics</li>
                        <li>Physical Sciences</li>
                        <li>Life Science</li>
                        <li>Life Orientation</li>
                        <li>Home-Language</li>
                        <li>English First Additional Language</li>
                        <li>Geography</li>
                    </ol>

                </div>
                <div className="card">            
                    <h1>University of The Free State</h1>                   
                    <p>Degree Name: Bachelors of Science in Information Technology<br/>
                    Majoring in Computer Science and Business Management</p>
                    <p>From: 2018 to 2021</p>
                    <h1>Major Modules</h1>
                    <ol>
                        <li>Hardware A+</li>
                        <li>Programming and problem solving</li>
                        <li>Data Structure</li>
                        <li>Web Development</li>
                        <li>Software Design</li>
                        <li>Internet Programming</li>
                    </ol>

                </div>
            </div>
        </div>

    )
}

export default Education