import React from 'react';
import "../App.css";
import Button from "./Button.jsx";
import "./HeroSection.css";
import videoPath from "../assets/videos/video-2.mp4";

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <video src={videoPath} autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH TRAILER
                <svg className='play-btn' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/></svg>
            </Button>
        </div>
    </div>
  )
}

export default HeroSection