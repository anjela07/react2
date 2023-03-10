import React from "react";
import css from './Second.module.css'
import w from '../images/woman.png'
import { HelpCard } from "../HelpCard";
import { SixCube } from "../SixCube";


export const Second =()=>{
    return(
        <div className={css.second}>
          <h1 className={css.why}>Why Thrive</h1>
          <div className={css.text}>
            <p className={css.txt}>
            Want to improve your well-being from the comfort<br/>
             of your own couch? Are you having trouble finding<br/>
              the right therapist? <span className={css.tex}>Here at ThriveTalk, our licensed<br/>
               therapists provide the same quality care you would get in office <br/>
               from anywhere you can access your laptop or mobile phone.<br/>
                Become your best self with ThriveTalk.  Start therapy now with a licensed therapist!</span></p>
            <img src={w} className={css.girl} alt="" />
          </div>
          <div className={css.white}>
            <div className={css.third}>
              <span className={css.about}>ABOUT US</span>
              <h2 className={css.want}>We want to help you thrive! Whether you are just<br/>
               looking for someone to talk to, or are struggling with a<br/>
                mental wellness issue we’re here to help.  Our highly<br/>
                 talented therapists can help you with a range of issues<br/>
                  including relationships, sex, PTSD, depression, social<br/>
                   anxiety, or even just caring for yourself more.</h2>
            </div>
            <h3 className={css.help}>WE CAN HELP YOU WITH</h3>
          </div>
          <div className={css.cards}>
         < HelpCard bg='#FFE2DE' title="Weight Lifting"/>
         < HelpCard bg='#C4E769' title="Running  & Spinning"/>
         < HelpCard bg='#62D0DF' title="Pumping Iron"/>
         < HelpCard bg='#0052C1' title="Pumping Iron"/>
          </div>
          <div className={css.whites}>
          </div>
          <div className={css.phis}>
         < HelpCard width="680px" height="500px" bg='#22356F' title="Physical Health"/>
         < HelpCard bg='#0052C1' title="Mental Health"/>
          <SixCube  title="Nutrition"/>
         < HelpCard bg='#62D0DF' title="Gymnastics"/>
         < HelpCard bg='#DEE1FF' title="Crossfit"/>
         < HelpCard bg='#8F00FF' title="Aerobics"/>
          </div>
        </div>
     )
}