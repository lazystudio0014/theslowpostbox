'use client'
import Timer from "./compoenets/Timer"
export default function Page() {
    
    return (
        <Timer currentTime={new Date().getTime()}/>
    )
  }