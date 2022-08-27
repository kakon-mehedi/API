console.clear();

// GET DATA TRHOUCH FETCH API CALLING


const makeGetRequest = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const message = `Error: ${res.status} occourd`;
    throw new Error(message);
  }
  data = await res.json();
  return data;
};

const getData = (url) => {
  makeGetRequest(url)
    .then((res) => {


      //console.log(res);
       //write your code here


    }).catch((err) => console.log(err));
};

getData('https://jsonplaceholder.typicode.com/posts')




// SEND DATA 


const makePostRequest = async (url, config) =>{
    const res = await fetch(url, config)
    if (!res.ok) {
        const message = `Error: ${res.status} occourd`;
        throw new Error(message);
    }
    const data = await res.json()
    return data
}


const postData = (url, config) => {
    makePostRequest(url, config)
    .then(res => {
        
       console.log(res)
        //write your code here


    }).catch(err => console.log(err))
}

postConfig = {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }

  postData('https://jsonplaceholder.typicode.com/posts', postConfig);






