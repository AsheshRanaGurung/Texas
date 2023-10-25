import { useEffect, useState } from 'react'
import axios from "axios"
import { BaseURL } from '../App'

const CancelAPI = () => {
    const [dataID,setDataID]=useState(1)
    useEffect(()=>{
        const abortAPI= new AbortController();
        const {signal}=abortAPI
        axios.get(`${BaseURL}/posts/${dataID}`,{signal}).then(()=>console.log("data fetched")).catch(()=>console.log("error occured"))

        return()=>{ abortAPI.abort()}
    },[dataID])
  return (


    <div>data for post ID {dataID}
    <br/>
        <button onClick={()=>setDataID(prev=>prev+1)}>new api</button>
    </div>
  )
}

export default CancelAPI