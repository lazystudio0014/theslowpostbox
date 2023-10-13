'use client'

export default function Home() {
  const buttonType = 
  [
    {"src": '/timer', "text": "Timer"},
    {"src": '/preview', "text": "Preview"},
  ]
  return (
   <div className="container mx-[20%] mt-[8%]">
    {   
        buttonType && buttonType.map((e,i)=>{
          return(<button key={i} className="myBtn" onClick={()=>{location.href = e.src}}>{e.text}</button>)
        })
    }
   </div>
  )
}
