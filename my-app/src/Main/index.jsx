import React from "react"
import mainPic from '../images/conv.png'
import css from './Main.module.css'
export const MainPage =()=>{
    return(
        <div className={css.mainPage}>
            <div className={css.container}>
            <nav>
                <span>Thrivetalk</span>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>BLOG</li>
                </ul>
                <button className={css.contact}>CONTACT US</button>
            </nav>
            <div className={css.MainBlock}>
                <div>
                    <h3>Thrivetalk</h3>
                    <h1>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
                    <p>Our highly talented therapists can help you with a range of issues including
                         relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>
                         <div> <button className={css.who}>WHO AM I</button>
                <button  className={css.who2}>WHAT DO I DO</button></div>
                </div>
                <div>
                    <img src={mainPic} className={css.pic}  />
                    </div> 
            </div>
            </div>
        </div>
    )
}