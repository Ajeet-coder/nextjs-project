import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
export function middleware(request:Request){

    // const regex=new RegExp('/client/*')

    // if(regex.test(request.url)){

    // }

    console.log("Middleware!");
    console.log(request.method)
    console.log(request.url)

    const origin=request.headers.get('origin');
    console.log(origin)
    return NextResponse.next();
}

export const config={
    matcher:'/client/:path'
}