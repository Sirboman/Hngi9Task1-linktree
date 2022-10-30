import React  from 'react';
import "../styles/MainContainer.css";
import profilepic from "../images/profilepic.JPG"
import profileimg from "../images/profileimg.png";
import slack from "../images/slack.png";
import { AiFillGithub } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import {FaEllipsisH } from "react-icons/fa";

function MainContainer() {

  return (
  <div className='MainContainer'>
        <header>
            <div className="icon-sm">
                <i><FaEllipsisH /></i>
                <i><IoIosShareAlt /></i>
            </div>
            

            <div id='profile'>
                <div id='profile__img'>
                <img className='profilepic' src={profilepic}alt='' />
                </div>
                <span>
                    <h2 id='twitter'><small>Henry Okolie</small></h2>
                    <h2 id='slack' hidden ><small>HNG001819OHO</small></h2>
                </span>      
            </div>
        </header>

        <main>
            <div className='links'>
                <ul className='link'>

                    <li>
                        <a href='https://twitter.com/sir_boman?t=42uPZV1CSoEOzFAulbo1xQ&s=09/' id='btn__zuri'> 
                        <h3 className='title'>Twitter Link</h3>
                        </a>
                    </li>

                    <li>
                        <a href='https://training.zuri.team/' id='btn__zuri'> 
                        <h3 className='title'>Zuri Team</h3>
                        </a>
                    </li>

                    <li>
                        <a href='http://books.zuri.team' id='books'> 
                        <h3 className='title'>Zuri Books</h3>
                        </a>
                    </li>

                    <li>
                        <a href='https://books.zuri.team/python-for-beginners?ref_id=<HNG001819OHO>' id='book__python'>
                        <h3 className='title'>Python Books</h3>
                        </a>
                    </li>

                    <li>
                        <a href='https://background.zuri.team' id='pitch'>
                        <h3 className='title'>Background Check for Coders</h3>
                        </a>
                    </li>
                    
                    <li>
                        <a href='https://books.zuri.team/design-rules' id='book__design'>
                        <h3 className='title'>Design Books</h3>
                        </a>
                    </li>
                </ul>

                <div className='primary'>
                    <span>
                        <a href='J'> <img src={slack} alt="hngIcon" /></a>
                    </span>
                    <span>
                        <i><AiFillGithub /></i>  
                    </span>
                </div>
            </div>

           
        </main>

        

      
  </div>
  )
}

export  {MainContainer}