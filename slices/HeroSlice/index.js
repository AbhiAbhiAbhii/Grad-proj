import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import RichText from '../../src/components/RichText/richtext'
import { useInView } from 'react-intersection-observer'
import isMobile from 'ismobilejs';
import { useEffect, useRef, useState } from 'react'
import Modal from '../../src/components/Modal/modal';



import styles from '../../styles/Home.module.css'


/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
export default function HeroSlice({ slice }){
  const [mobileCheck, setMobileCheck] = useState(false)
  useEffect(()=>{
    if (typeof window !== "undefined") {
      setMobileCheck(isMobile(window.navigator).any)
    }
  },[])

  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => {


    setOpenModal(true);
  }

  const {ref: borderRef, inView: borderVisible} = useInView();
  return(
    <main className='hero-container' style={{padding:mobileCheck?'6rem 1rem':'6rem 4.2rem',border:'1px green solid'}}>
      <div className='hero-content'>
        <div style={{padding:mobileCheck?'2rem 0':'2.8rem 0'}}>
          <div style={{display:'flex',alignItems:'flex-end'}}>
            <div style={{fontSize:mobileCheck?'1rem':'5rem',textTransform:'uppercase',lineHeight:'160%',letterSpacing:'-.11em',fontWeight:'bold'}}>
              <RichText field={slice.primary.titleMain} className='hero-title' />
            </div>
            <div className='hero-image' style={{display:mobileCheck?'none':'',padding:'0 1rem'}}>
                <PrismicNextImage height={100} width={100} field={slice.primary.heroimage} alt={slice.primary.heroimage.alt} />
            </div>
          </div>
          <div style={{fontSize:mobileCheck?'1rem':'5rem',textTransform:'uppercase',lineHeight:'160%',letterSpacing:'-.11em',fontWeight:'bold'}}> 
          <RichText field={slice.primary.titlesecond} />
          </div>
        </div>
        {/* <pre>{JSON.stringify(slice,null,2)}</pre> */}
        <div  style={{padding:'0.8rem .3rem',position:'relative'}}>
          <div  className={`${styles.borderAnimate} ${borderVisible ? styles.borderAnimatee : ''}`} >
            <div className='description' style={{width:mobileCheck?'100%':'48%',fontSize:mobileCheck?'1rem':'1.6rem',fontWeight:'300',padding:'1rem 0',letterSpacing:'-.02em',lineHeight:'120%',border:'1px red solid'}}>
              <RichText field={slice.primary.description} />
            </div>
            <div className='CTA'  style={{padding:'2rem 0',border:'1px red solid'}}>
              {
              slice.items.map((item, i) => (
                <PrismicLink className='btn-hover-animation' style={{border:'1px black solid',borderRadius:'20rem',padding:'.6rem 3.2rem'}} field={item.cta_link} key={i}>
                  {item.cta_text}
                </PrismicLink>
              ))
              }
            </div>
            <div>
              <button className={`${mobileCheck? '':'btn-hover-animation'}`} onClick={handleModal} style={{background:'none',border:'1px #000 solid',borderRadius:'20rem',cursor:'pointer',padding:'.6rem 4rem'}}>
                Modal
              </button>
            </div>
          </div>
          
        </div>
        {/* Next-Slice */}
        <div style={{padding:'5rem 0'}}>
          <h2 ref={borderRef}>FEATURED PROJECT</h2>
        </div>
        {
          openModal && <Modal   closeModal={setOpenModal} />
        }  
            
      </div>
    </main>
  )
}