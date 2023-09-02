import axios from 'axios'
import  { useEffect, useState } from 'react'

axios.defaults.baseURL="https://opentdb.com/"
const useAxios = () => {
    const url ="/api.php?amount=10&category=18&type=multiple"
    const [response,setResponse] =useState(null)
    const [error,setError] = useState("")
    const [loading,setLoading] =useState(true)

    useEffect(()=>{
        const fetchQuestions = ()=>{
            axios.get(url)
            .then(res=>setResponse(res.data))
            .catch(err=>setError(err))
            .finally(() =>setLoading(false))
        }
        fetchQuestions()
    },[])
  return { response ,error,loading }
}

export default useAxios