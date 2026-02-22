import { useState } from 'react';
import { RiMenu3Fill , RiCloseLine } from "react-icons/ri";

import logo from '../../assets/GPT-3.svg'
import './Navbar.css'
const Signs=()=>{ 
   return( 
    <div className="Navbar__links__signs">
        <p className='signIn ' ><a href="" style={{textDecoration:'none'}}>Sign in</a></p>
          <p className='signUp' ><a href="" style={{textDecoration:'none'}}>Sign up</a></p>
        </div>
   )
}
const NavLinks =()=>{
   return(
      <div className="Navbar__links__Main ">
              <p><a href="#Home">Home</a></p>
              <p><a href="#Whatgpt">What is GPT?</a></p>
              <p><a href="#Futures">Futures</a></p>
              <p><a href="#GetStart">Get Start</a></p>
              <p><a href="#Blog">Blog</a></p>
            </div>
   )
}
const Navbar = () => {
     const [isToggle, setToggle]=useState<boolean>(false);

  return (
    <div className=' Navbar'>
      <div className="Navbar__logo ">
        <img src={logo} alt="gpt" />  
      </div>
        <div className="menu" onClick={()=>{ setToggle(!isToggle)}}>
            {isToggle? <RiCloseLine/>:<RiMenu3Fill/> }</div>

      <div className="Navbar__links ">
           <NavLinks/>
           <Signs/>
     </div>
     {isToggle && (
        <div className="Navbar__menu_container scale-up-center">
          <div className="Navbar__menu_container-links">
             {/* We reuse your components here! */}
             <NavLinks />
             <div className="Navbar__menu_container-links-sign">
                <Signs />
             </div>
          </div>
        </div>
      )}
        
    </div>
  )
}

export default Navbar