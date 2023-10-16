import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest,  context: { params: any }) {
  try {
    console.log( context.params.id)
    const result = await {"data" : context.params.id}
    return NextResponse.json({ message: "OK", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}