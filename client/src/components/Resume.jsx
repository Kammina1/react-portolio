import React from 'react'

function Resume() {
  return (
    <div className = 'resumeDiv'>
      <h2>Download my resume here: </h2>
      <a className='resume' href="./resume.pdf" download>Resume</a>
      <h2>View a list of my skills here:
        <ul className='resumeUl'>Front End:
          <li className='resumeLi'>CSS</li>
          <li className='resumeLi'>HTML</li>
          <li className='resumeLi'>Javascript</li>
          <li className='resumeLi'>Responsive Design</li>
          <li className='resumeLi'>Bootstrap</li>
        </ul>
        <ul className='resumeUl'>Back End:
          <li className='resumeLi'>API's</li>
          <li className='resumeLi'>Express</li>
          <li className='resumeLi'>Node</li>
          <li className='resumeLi'>MongoDB</li>
          <li className='resumeLi'>React</li>
        </ul>
      </h2>
    </div>
  )
}

export default Resume