'use client'

export default function Home() {
  return (
   <div>
        <button className="myBtn" onClick={()=>{location.href = '/timer'}}>Timer Link</button>
        <button className="myBtn" onClick={()=>{location.href = '/preview'}}>Preview</button>
   </div>
  )
}
