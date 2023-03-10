import React from "react";
import css from './Third.module.css'
import m from '../images/mans.png'

export const ThirdPage =()=>{
    return(
        <div className={css.third}>
            <div className={css.text}>
            <p className={css.first}>National Plans <br />  <span className={css.firstsm}>Nutritional Facts on some shitty things that<br/> you don’t care about and even we don’t , I<br/> need to replace this copy.</span></p>
            <p className={css.second}>Weight Loss <br />  <span className={css.firstsm}>Nutritional Facts on some shitty things that<br/> you don’t care about and even we don’t , I<br/> need to replace this copy.</span></p>
            <p className={css.thirds}>Mental Peace  <br /> <span className={css.thirdsm}>Nutritional Facts on some shitty things that<br/> you don’t care about and even we don’t , I<br/> need to replace this copy.</span></p>
            <p className={css.first}>Home Training <br />  <span className={css.firstsm}>Nutritional Facts on some shitty things that<br/> you don’t care about and even we don’t , I<br/> need to replace this copy.</span></p>
            <p className={css.second}>Work/Life Balance <br />  <span className={css.firstsm}>Nutritional Facts on some shitty things that<br/> you don’t care about and even we don’t , I<br/> need to replace this copy.</span></p>
            <p className={css.thirds}>Cardio <br /> <span className={css.thirdsm}>Nutritional Facts on some shitty things that<br/> you don’t care about and even we don’t , I<br/> need to replace this copy.</span></p>
            <p className={css.you}>YOU SHOULD ALSO KNOW</p>
            <img src={m} className={css.m} />
            <h2 className={css.md}>MDD affects more than 16.1 million<br/> American adults, or about 6.7%of the U.S.<br/> population age 18 and older in a given year.<br/> We at ThriveTalk can help you.</h2>
            <h5>GET HELP NOW</h5>
            </div>
            

        </div>
    )
}