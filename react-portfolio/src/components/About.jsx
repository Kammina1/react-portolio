import React from 'react';
import profilePic from './profile_pic.jpg';

const About = () => {
  return (
    <div>
        <h2>About Me</h2>
        <img className='pic' src={profilePic} alt="Profile Pic" />
        <p>I grew up in Farmington, UT. I have a mixed educational background. I
          graduated from Brigham Young University - Idaho in 2021 with a
          Bachelors degree in Exercise Physiology. Upon graduating I developed
          an interest in web development and have since been studying through an
          online bootcamp ran through the University of Utah. I hope to finish
          October of 2022.</p>
    </div>
  )
}

export default About