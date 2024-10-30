import React from 'react';
import {Link} from 'react-router-dom';
import {arrow} from '../assets/icons';
const InfoBox = ({text, link, btnText}) =>(
    <div className="info-box">
       <p className="font-medium sm:text-xl text-center" >{text}</p> 
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src = {arrow}/>
        </Link>
    </div>
)



const renderContent = {
    1:(
        <h1 className="sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8
        text-white mx-5">
            Hi, I'm <span className="font-semibold">Afzaal</span>
            <br/>
            A Software Engineer from Pakistan.
        </h1>
    ),
    2:(
        <InfoBox
            text = "Worked on many diverse projects and picked up many skills
            along the journey"
            link = "/about"
            btnText = "Learn more"
        />
    ),
    3:(
        <h1>3</h1>
    ),
    4:(
        <h1>4</h1>
    ),
}




const HomeInfo = ({currentStage})=>{
    return renderContent[currentStage] || null;
}

export default HomeInfo