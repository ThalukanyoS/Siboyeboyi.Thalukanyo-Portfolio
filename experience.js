import React from 'react';
import'./css/Experience.css';
<head>
    <link rel="StyleSheet" href="css/main.css"></link>

</head>

const Experience =()=>{
    return(
        <div className='experience' id="experience">
            <h1 className="heading">Experience & skills</h1>
            <p className="sub-heading">I have so many skills and some of my skills and experience are here:-</p>
            <div className="experience-card">
                <div className="card">
                    
                    <h1 className="list">List Of Technical Skills</h1>
                       <ol className="olist">
                        <li>Webpage Development</li>
                        <li>Data Structure and algrorithm</li>
                        <li>Scripting & markup languages</li>
                        <li>Using VS CODE</li>
                        <li>Internet Programming(MVC, .NetFrameWork)</li>
                       </ol>
                </div>
                <div className="card">
                    
                    <h1 className="list">List Of Soft Skills</h1>
                       <ol className="olist">
                        <li>Adaptability</li>
                        <li>TeamWork</li>
                        <li>Empathy</li>
                        <li>Perseverance</li>
                        <li>Approachability</li>
                       </ol>
                </div>
            </div>
        </div>

    )
}

export default Experience