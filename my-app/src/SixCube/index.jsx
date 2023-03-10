import React from "react";
import style from './SixCube.module.css'
import b from '../images/berry.png'
import { ThirdPage } from "../Third";

export const SixCube =(title,bg)=>{
    return(
        <div style={{background:bg}} className={style.six}>
        <br />
        <hr />
        <img src={b} className={style.berry} alt="" />
       
    </div>
    
    )}
    <ThirdPage/>
