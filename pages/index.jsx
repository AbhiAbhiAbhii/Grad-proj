import { SliceZone } from '@prismicio/react'
import { useState, useEffect } from 'react'
import isMobile from 'ismobilejs';
import { createClient } from '../prismicio'
import { components } from '../slices'
 
export default function Page ({ page, navigation, settings }) {

  const [mobileCheck, setMobileCheck] = useState(false);
  useEffect(()=>{
    if (typeof window !== "undefined") {
      setMobileCheck(isMobile(window.navigator).any)
    }
  },[])

  return (
    <div className='container' style={{padding:mobileCheck?'0':'0 1rem',overflowX:'hidden'}}>
        <SliceZone slices={page.data.slices} components={components} />
    </div>
  )
}
 

 
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getSingle('homepage')
  return {
    props: {
      page,
    },
  }
}