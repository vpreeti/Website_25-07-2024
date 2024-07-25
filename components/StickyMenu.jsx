import React, { useState } from 'react'
import '../components/css/stickymenu.css'
import phone from '../public/images/NotificationImages/phone.png'
import ess from '../public/images/NotificationImages/ESS.png'
import apar from '../public/images/NotificationImages/APAR.png'
import mediclaim from '../public/images/NotificationImages/mediclaim.png'
import flm from '../public/images/NotificationImages/FLM.png'
import email from '../public/images/NotificationImages/email.png'
import twitter from '../public/images/NotificationImages/twitter.png'

function StickyMenu() {
    // let imgPhone = <img src={phone} alt="" style={{width:'2.5rem',height:'2.5rem' }} />
    // let setImgPhone = <div style={{display:'flex', justifyContent:'center',width:'10rem'}}>
    //     <div>Phone Directory</div>
    //     <div>
    //     <img src={phone} alt="" style={{width:'2.5rem',height:'2rem',objectFit:'contain'}} />
    //     </div> 
    // </div>;

    let imgPhone = <img src={phone} alt="" style={{ width: '2.5rem', height: '2.5rem' }} />;

let setImgPhone = (
  <div style={{ display: 'flex', alignItems: 'center', width: '10rem' }}>
    <div>Phone Directory</div>
    <div>
      <img src={phone} alt="" style={{ width: '2.5rem', height: '2.5rem', objectFit: 'contain' }} />
    </div>
  </div>
);


    let imgESS = <img src={ess} alt="" style={{width:'2.5rem',height:'2.5rem'}} />
    let setImgESS = <div style={{display:'flex',padding:'3px', justifyContent:'space-between',width:'10rem'}}>
    <div>ESS/MSS</div>
    <div>
    <img src={ess} alt="" style={{width:'2.5rem',height:'2rem',objectFit:'contain'}} />
    </div> 
    </div>;

    // let imgAPAR = <img src={apar} alt="" style={{width:'2.5rem',height:'2.5rem'}} />
    let imgAPAR = <img src={apar} alt="" style={{ width: '2.5rem', height: '2.5rem', margin:'auto' }} />
    let imgMediclaim = <img src={mediclaim} alt="" style={{width:'2.5rem',height:'2.5rem', margin:'0.5rem'}} />
    let imgFLM = <img src={flm} alt="" style={{width:'2.5rem',height:'2.5rem', margin:'0.5rem'}} />
    let imgEmail = <img src={email} alt="" style={{width:'2.5rem',height:'2.5rem', margin:'0.5rem'}} />
    let imgTwitter = <img src={twitter} alt="" style={{width:'2.5rem',height:'2.5rem', margin:'0.5rem'}} />

    const [value, setValue] = useState(imgPhone)
    const [value2, setValue2] = useState(imgAPAR)
    const [value3, setValue3] = useState(imgESS)
    const [value4, setValue4] = useState(imgMediclaim)
    const [value5, setValue5] = useState(imgFLM)
    const [value6, setValue6] = useState(imgEmail )
    const [value7, setValue7] = useState(imgTwitter)
    return (
        <>
            
           

            <div className="divmenu1" onMouseOver={() => { setValue(setImgPhone) }} onMouseOut={() => { setValue(imgPhone) }}>
                {value}
            </div>

            

            <div className="divmenu2"  onMouseOver={()=>{setValue2('APAR')}}  onMouseOut={()=>{setValue2(imgAPAR)}}>
                {value2}
            </div>

            <div className="divmenu3"  onMouseOver={()=>{setValue3(setImgESS)}}  onMouseOut={()=>{setValue3(imgESS)}}>
                {value3}
            </div>

            <div className="divmenu4"  onMouseOver={()=>{setValue4('Mediclaim')}}  onMouseOut={()=>{setValue4(imgMediclaim)}}>
                {value4}
            </div>

            <div className="divmenu5"  onMouseOver={()=>{setValue5('FLM/FIORI')}}  onMouseOut={()=>{setValue5(imgFLM)}}>
                {value5}
            </div>

            <div className="divmenu6"  onMouseOver={()=>{setValue6('e-Mail')}}  onMouseOut={()=>{setValue6(imgEmail)}}>
                {value6}
            </div>

            <div className="divmenu7"  onMouseOver={()=>{setValue7('Twitter')}}  onMouseOut={()=>{setValue7(imgTwitter)}}>
                {value7}
            </div>
            
            

        </>
    )
}

export default StickyMenu