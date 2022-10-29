import React from 'react'
import "../styles/FooterContainer.css";
import I4G from "../images/I4G.png";


function FooterContainer() {
  return (
    <div className='FooterContainer'>

       <div className='break'></div>
       <footer>
            <div className='logo'>
                <h2>
                    <small>Zuri
                        <span id='zuri'>.</span>
                        Internship
                    </small>
                </h2>
            </div>

            <div className='task'>
                Hng Internship 9 Frontend Task
            </div>

            <div className='partner'>
                <img src={I4G} alt='h' />
            </div>

           
        </footer>
    </div>
  )
}

export {FooterContainer}