import Image from "next/image"
import Link from "next/link"
import isMobile from 'ismobilejs';
import { useEffect, useRef, useState } from 'react'




export default function Nav(){

    const [mobileCheck, setMobileCheck] = useState(false)
    useEffect(()=>{
        if (typeof window !== "undefined") {
        setMobileCheck(isMobile(window.navigator).any)
        }
    },[])


    return(
        <nav className="main-nav" style={{padding:mobileCheck?'2rem 1rem':'2rem 6.2rem',position:'fixed',top:'0',right:'0',left:'0',background:'#f6f6f6',border:'1px red solid'}}>
            <div className="main-nav-container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',border:'1px red solid'}}>
                <div className="main-nav-logo" style={{border:'1px yellow solid'}}>
                    <Link href={'/'}><Image src='/assets/nav-logo.svg' height={28} width={150} style={{height:mobileCheck?'1rem':''}} alt="GRADICAL" /></Link>
                </div>
                <div className="main-nav-links-wrapper" style={{border:'1px red solid'}}>
                        <ul style={{color:'black',fontFamily:'monospace',fontWeight:'400',fontSize:mobileCheck?'.8rem':'1.25rem',textTransform:'uppercase',display:'flex'}}>
                            <Link href="https://www.gradical.xyz/agency" target={""}><div className="main-nav-link-container"><li className="main-nav-link">Agency</li></div></Link>
                            <Link href="https://www.gradical.xyz/project" target={""}><div className="main-nav-link-container"><li className="main-nav-link">Projects</li></div></Link>
                            <Link href="https://www.gradical.xyz/careers" target={""}><div className="main-nav-link-container"><li className="main-nav-link">Careers</li></div></Link>
                            <Link href="https://www.gradical.xyz/contact" target={""}><div className="main-nav-link-container"><li className="main-nav-link">Contact</li></div></Link>
                        </ul>
                </div>
            </div>
        </nav>
    )
}