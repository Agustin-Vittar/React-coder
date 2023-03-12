import { useEffect, useState } from "react"

const ConsumiendoApis = () => {
  
    /* const [ posts , setPosts] = useState([])

  useEffect(()=>{

    const getData = fetch("https://jsonplaceholder.typicode.com/posts");

    getData
    .then( res => res.json())
    .then( res => setPosts(res))
    .catch( err => console.log("catch: ", err))

  } ,[]);

  console.log(posts); */

  /* useEffect(() => {

    createPost = fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: "esta es una del front",
            userId: 2,
            body: "acá estamos probando el verbo post desde react"
        })
  })
  
  }, [])  */
  
  
    return (
        <div>ConsumiendoApis</div>
  )
}

export default ConsumiendoApis