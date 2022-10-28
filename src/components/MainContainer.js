import React from 'react';
import "../styles/MainContainer.css";
import profileimg from "../images/profileimg.png";
import slack from "../images/slack.png";
import I4G from "../images/I4G.png";
import { AiFillGithub } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";


function MainContainer() {
  return (
  <div className='MainContainer'>
        <header>
            <div className="icon">
                <i><IoIosShareAlt /></i>
            </div>

            <div id='profile'>
                <div id='profile__img'>
                <img src={profileimg}alt='' />
                </div>
                <span>
                    <h2 id='twitter'><small>Sir_boman</small></h2>
                    <h2 id='slack' hidden ><small>HNG001819OHO</small></h2>
                </span>      
            </div>
        </header>

        <main>
            <div className='links'>
                <ul className='link'>
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
            </div>
        </main>

        <div className='primary'>
            <span>
                <a href='j'> <img src={slack} alt="hngIcon" /></a>
            </span>
            <span>
                <a href='j'>
                    <i><AiFillGithub /></i>
                </a>
                
            </span>
        </div>

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

export  {MainContainer}