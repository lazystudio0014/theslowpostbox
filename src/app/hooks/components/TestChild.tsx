type dataList =
{
    someString : string, 
    someBoolean: boolean,
    someFun : ()=>void,
}
export function Child({someString,someBoolean,someFun} : dataList) {
    

    return (
        <>
            <button onClick={someFun} className="myBtn">Test Button</button>
            <br/>
            someString is {someString}
            <br/>
            someBoolean is {someBoolean ? "True" :"False"}
        </>
    )
}