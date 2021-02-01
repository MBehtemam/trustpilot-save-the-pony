import React, { useState } from 'react'


const useHTTP = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    const [response, setResponse] = useState<any>(null)
    const get = async (url:string) => {
        setLoading(true);
        setError('');
        try{
            const data = await fetch(url)
            const json = await data.json();
            setResponse(json);
            setLoading(false)
        }catch(err){
            setLoading(false);
            setError(error)
        }

    }

    const post = async(url:string, body:any) => {
        try {
            setLoading(true);
            setError('')
            const data = await fetch(
              url,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
              }
            );
            if (data.ok) {
              const json = await data.json();
              setResponse(json);
              setLoading(false);
            } else {
              const text = await data.text();
              throw text;
            }
          } catch (err) {
            setLoading(false);
            setResponse(null)
            setError(err);
          }
    }

    return {
        get,
        post,
        loading,
        error,
        response
    }
}

export default useHTTP