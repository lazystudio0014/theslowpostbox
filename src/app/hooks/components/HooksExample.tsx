import {useState,useEffect,useContext,useMemo,useReducer, useRef} from 'react'
import {ChangeEvent} from 'react'
import {Child} from './TestChild'

export function UseState() {
    const [noTypeState, setNoTypeState] = useState<any>(0)
    const [data,setData] = useState(0)
    useEffect(()=>{console.log("useEffect "+data)},[data])
    async function handleChange(e:ChangeEvent<HTMLInputElement>) {
        // useState 는 비동기식 방식이다 따라서 중간에 데이터를 바꾼다 해도 작업이 끝나야 데이터를 불러올수 있다
        console.log(data)
        setData(2);
        console.log(data)
        /// 결과 0 0 useEffect 2
        // setData 앞에  await 를 쓰면 결과는 0 useEffect 2 0
        // 따라서 파일 여러장을 불러와서 setData를 하면 데이터가 undefined 가 나올수가 있다
        // 테스트를 해보면서 useState 비동기식 방식이라는것을 알수있다 
    }
   
    // 부모가 state를 자식한테 보내는 예제 
    function someFun() {
        console.log("This message is some function sending from UseState compoents")
    }
    async function getData()
    {
        let test =await fetch("api/testData/test2",{method : "GET"}).then(e=>{return e.json()}).then(e=>{return (e.result.data)})  
        setData(test)
        setNoTypeState(test)
    }
    
    return(
    <div>
        <input type='file' accept='image/*'
            onChange={handleChange}
        />
        <br/>
        <br/>
        <br/>
        <Child someFun={someFun} someString={"random string"} someBoolean={true}/>
        <br/>
        <br/>
        <br/>
        {noTypeState}
        {data}
        <button onClick={()=>{getData()}} className='myBtn'>Get Data</button>
    </div>)
    
}
export function UseMemo()
{
    return(<div></div>)
}