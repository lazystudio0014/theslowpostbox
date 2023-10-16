'use client'
import {useEffect} from 'react'
export default function Home() {
   useEffect(()=>{test()},[])
    async function test()
    {
        await fetch("/api/lostark",{
            method:"GET"
        })
    }
    
  return (
   <div className="container mx-[20%] mt-[8%]">
    

   </div>
  )
}
