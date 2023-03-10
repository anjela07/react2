import React from "react";
import css from './Footer.module.css';
import wm from '../images/autumn.png'

 export const FooterPage =()=>{
    return(
<div className={css.footer}>
<img src={wm} className={css.wm} />
<div className={css.textt}>
 <h4 className={css.one}>SOME INFO <br /><span className={css.ones}>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br />Libero nemo id in ullam laboriosam.</span></h4>
 <h4 className={css.two}>ENFOLD HEALTH <br /> <span className={css.ones}>Main Street 1,Olcott<br/>
 Buffalo,United States <br />
 +555 283 784 333 <br />
 office@enfold-health.com</span></h4>
 <h4 className={css.three}>OFFICE HOURS <br /> <span className={css.ones}>Mo-Fr 8:00-19-00 <br />
 Sa: 8:00-14:00 <br />
 Su:closed</span></h4>

</div>
</div>

    )
 }