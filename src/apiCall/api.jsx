import { useEffect, useState} from 'react';
import '../App.css';

function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Get api Implementation
    const url = 'https://jsonplaceholder.typicode.com/comments'
    fetch(url, {
      headers: {
        companyId: '47856784365874387'
      }
    })
    .then (response => response.json()).then(json => {
      // console.log("JOhnnn", json)
      setData(json)
    }).catch(e => {
      console.log('e', e)
    })
  }, [])

  // Post and put api implementation
  const postPutEvent = () => {
    const data = {
      id: 'def123',
      name: 'seema',
      mobile: '767676786',
      designation: 'developer',
      pin: '45678'
    }
    const url = data.id ? `'https://jsonplaceholder.typicode.com/comments/'+${data.id}` : 'https://jsonplaceholder.typicode.com/comments'
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      console.log('response', response)
      if(response.state === 200) {
        alert('API successfully works')
      }
    }).catch(e => {
      console.log("error", e);
    })
  }

  return (
    <div className="App">
      <h2> Fetch method Api Call with put and Post </h2>
      {
        data.map(item => {
          return(
            <div> 
              {/* {item.id}  */}
            </div>
          )
        })
      }
      <button onClick={postPutEvent}> Submit </button>
    </div>
  );
}

export default Api;
