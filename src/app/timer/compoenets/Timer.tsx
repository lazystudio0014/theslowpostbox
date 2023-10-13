'use client'
import { useEffect ,useState} from "react"
type DateTime =
{
    currentTime : number
}
export default function Timer({currentTime} : DateTime)
{
    const [hour,setHour] = useState(0)// 1시간
    const [minute, setMinute] = useState(0)// 분
    const [second, setSecond] =useState(0)// 초

    useEffect(()=>{    
    },[hour,minute,second])

    const endDate = new Date(currentTime + 86400000)
    function timer()
    {   
        const rightNow = new Date(Date.now())
        
        const endAt =  (endDate.getTime()-rightNow.getTime())
        let secondcal = Math.floor(endAt/1000)
        let minutecal = Math.floor(secondcal/60)
        let hourcal = Math.floor(minutecal/60)
        secondcal = secondcal %60
        minutecal = minutecal % 60
        setHour(hourcal)
        setMinute(minutecal)
        setSecond(secondcal)
    }
    // 매 초마다 업데이트 진행
    setInterval(timer,1000)
    return( <div>시간 {`${hour}h:${minute}m:${second}s`}</div>)
}