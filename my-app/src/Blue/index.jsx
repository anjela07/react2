import React from "react";
import css from './Blue.module.css'
import mn from '../images/black.png'

export const BluePage=()=>{
    return(
        <div className={css.blue}>
             <img src={mn} className={css.black} />
            <div className={css.texxt}>
           
            <h6>CONTACT US</h6>
            <h1 className={css.red}>Ready. Set. Smile</h1>
            <h2 className={css.tk}>Take the free online assessment to<br/>
            see if you are a candidate and get<br/>
             started on your journey.</h2>
             <h5 className={css.get}>GET HELP NOW</h5>
            </div>
         
        </div>
    )
}