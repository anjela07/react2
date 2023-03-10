import React from "react";
import style from './HelpCard.module.css'

export const HelpCard =({title,bg})=>{
    return(
        <div style={{background:bg}} className={style.helpcard}>
            <br />
            <hr />
            <h3 >{title}</h3>
            <div className={style.mom}></div>
        </div>
    )
}
