import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = async (url) => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios(url)
        setData(res.data)
          console.log(data)
          console.log(res.data)
      } catch (err) {
        setError(err)
        console.log(error)
      }
    }
    fetch()
  }, [])
  return { data, error }
}
export default useFetch
