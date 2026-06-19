import axios from "axios";
import { useEffect, useState } from "react";


function useApi(api){
const [data,setData]=useState([]);
const [error,setError]=useState("");
const [loading,setLoading]=useState(true);

useEffect(()=>{
    const fetchApi=async ()=>{
       try{
        const apiData=await axios.get(api);
        setData(apiData.data)
       }catch(err){
          setError(err.message)
       }finally{
        setLoading(false)
       }
    }

    fetchApi()
},[])

return {data,error,loading}
}

export default useApi;