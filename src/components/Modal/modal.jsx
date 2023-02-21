import { useRef, useState } from "react";

export default function Modal({ closeModal, quest="hellooo", descript="yooo"}) {
    const modalRef = useRef();
    const handleClick = () => {
        modalRef.current.style.transform = 'translate(50% ,0)'

        setTimeout(() => {
            closeModal(false);
        }, [5000])
    }

    const [accordion, setAccordion] = useState(false);

    // const modalReveal = useRef();
    // const modalClick = () => {
    //     modalReveal.current.style.height = '100%'
    //     modalReveal.current.style.overflow = 'visible'
    // }

    const accordionContent = [
        {
            quest: 'question-1',
            descript: 'loremipsum'
        },
    ]

    return(
        <div ref={modalRef} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%',width:'100%',position:'fixed',top:'0',left:'50%',transform:'translate(-50%,0)',background:'rgba(255,255,255,1',transition:'all 4s ease'}}>
            <div>
                <h1 style={{fontSize:'5rem'}}>MODAL</h1><span onClick={handleClick} style={{cursor:'pointer'}}>
                <h1>X</h1>
            </span>
            </div>
            <div  className="accordion-container" style={{border:'1px red solid',height:'unset',transition:'all 2s ease'}}>
                <div className="accordion-content" style={{border:'1px green solid',transition:'all 2s ease',padding:'2rem 0',margin:'2rem 0'}}>
                    {
                        accordionContent.map((accord, i) => {
                            return(
                                <>
                                <div key={i} onClick={() => {setAccordion(!accordion)}}  style={{cursor:'pointer',transition:'all 2s ease'}}>
                                    <h1>{accord.quest}</h1>
                                </div>
                                <div className="accordion-content-reveal" style={{height: accordion ? '100%':'0',overflow: accordion? 'visible':'hidden',transition:'all 2s ease'}}>
                                    <p style={{width:'40%', transition:'al 5s ease'}}>{accord.descript}</p>
                                </div>
                                </>
                                
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}