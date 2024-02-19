'use client'

import { useEffect, useState } from "react"

interface Userdata{
    city:string
    country:string
}

export default function UserCountry() {
   
const [userCity,setUserCity]=useState<Userdata |null>(null)


useEffect(()=>{
    const fetchData=async()=>{
        const response=await fetch(`https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_API_TOKEN}`)

        if(!response.ok){
            console.log('Error in fetching user country')
        }
        let data: Userdata = await response.json();
        setUserCity(data)
    }
fetchData()
},[])



  return (
    <div>{userCity?.country==="IN"?<span>India</span>:"Loading Country..."}</div>
  )
}
