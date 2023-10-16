import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

  const header = new Headers(req.headers)
  let serach = '이벤트'
  const api  = process.env.LOSTARK_API;
  const baseURL = 'https://developer-lostark.game.onstove.com'
  let coreURL = `/news/notices?type=${serach}`
  let url = baseURL + coreURL;

  try {
    
    header.set('accept', 'application/json');
    header.set('authorization', `${api}`);
    const result =  await fetch(url,{
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'authorization': `${api}`
      }
  }).then(e=>{return e.json()}).then(e=>{return e});      

  console.log(result)
    return NextResponse.json({ message: "OK", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}