import React, { useState } from 'react'
import '../components/css/stickymenu.css'
import mediclaim from '../public/images/NotificationImages/mediclaim.png'
import flm from '../public/images/NotificationImages/FLM.png'
import email from '../public/images/NotificationImages/email.png'

function StickyMenu() {    
    const imgMediclaim = <img src={mediclaim} alt="" style={{width:'2.5rem',height:'2.5rem', margin:'0.5rem'}} />;
    const imgFLM = <img src={flm} alt="" style={{width:'2.5rem',height:'2.5rem', margin:'0.5rem'}} />;
    const imgEmail = <img src={email} alt="" style={{width:'2.5rem',height:'2.5rem', margin:'0.5rem'}} />;

    return (
        <>                 
            <div className="divmenu4" onMouseOver={()=>{setValue4(imgMediclaim)}} onMouseOut={()=>{setValue4(imgMediclaim)}}>
                {imgMediclaim}
            </div>

            <div className="divmenu5" onMouseOver={()=>{setValue5(imgFLM)}} onMouseOut={()=>{setValue5(imgFLM)}}>
                {imgFLM}
            </div>

            <div className="divmenu6" onMouseOver={()=>{setValue6(imgEmail)}} onMouseOut={()=>{setValue6(imgEmail)}}>
                {imgEmail}
            </div>
        </>
    )
}

export default StickyMenu

