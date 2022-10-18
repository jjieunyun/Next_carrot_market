import React, {useState} from 'react';

function UseMutation(url) {
  const [state, setState] = useState({
    loading: false,
    data : undefined,
    error : undefined
  })

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  function mutation(data) {
    setLoading(true);
    fetch('api/users/enter',{
      method : "POST",
      body : JSON.stringify(data),
      headers : {
        "Content-Type" : "application/json"
      }
    }).then((response)=> response.json().
    catch(()=>{}))
      .then(json=>{setData(json)})
      .catch(setError)
      .finally(()=>setLoading(false))
  }

  return [mutation,{loading, data, error}]
}

export default UseMutation;