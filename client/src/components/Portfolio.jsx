import React from 'react'
import dnd from './dnd.jpg';
import noteTaker from './noteTaker.png'
import eComm from './ecommerce.png'
import pw from './password.jpg'
import quiz from './quiz.jpg'
import weather from './weather.jpg'
import proveIt from './proveIt.jpg'

const portfolio = () => {
  return (
    <div className='portfolioContainer'>
      <div>
        <h1 className='porfolioh1'>Past Projects:</h1>
      </div>
      <div className="pc1">
        <a href='https://github.com/Sercanbrack/dnd-right-here'><img className ='portfolioPic' src={dnd} alt="DND Pic" /></a>
        <a href='https://github.com/KStaySLC/Prove-It'><img className ='portfolioPic' src={proveIt} alt="Notepad" /></a>
      </div>
      <div className="pc1">
        <a href='https://github.com/Kammina1/ORM-E-Commerce'><img className ='portfolioPic' src={eComm} alt="ecommerce" /></a>
        <a href='https://github.com/Kammina1/Random-Passowrd-Generator'><img className ='portfolioPic' src={pw} alt="password" /></a>
      </div>
      <div className="pc1">
        <a href='https://github.com/Kammina1/Code-Quiz'><img className ='portfolioPic' src={quiz} alt="quiz" /></a>
        <a href='https://github.com/Kammina1/Weather-API'><img className ='portfolioPic' src={weather} alt="weather" /></a>
      </div>
    </div>
  )
}

export default portfolio 