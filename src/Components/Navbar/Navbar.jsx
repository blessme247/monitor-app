import { useEffect, useState } from "react"
import "./navbar.scss"
import Logo from "../../assets/Icons/logo.svg"
import {gsap} from "gsap"

 const Navbar = ()=>{
    const [date, setDate] = useState(new Date())

    useEffect(()=>{

    gsap.set(".navWrapper", {y: -5, ease: "ease-in-out"})
    gsap.to(".navWrapper", {y: 0, ease: "ease-in-out", opacity: "1", delay: "1"})

      let timer = setInterval(() => setDate(new Date()), 1000)
  
      return function cleanup() {
        clearInterval(timer)
      }
     
    }, [])
  
    return (
        <nav className="navWrapper">
            <div className="navContainer"> 
            <div className="logoWrapper">
                <img src={Logo} alt="logo" className="logo" />
            </div>
            <div className="info">
                <div className="timeWrapper">
                <span>{date.toLocaleTimeString()}</span>
                </div>
                <div className="dateWrapper">
                    March 23
                </div>
                <div className="userInfo">
                    Uche
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;