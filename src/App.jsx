import { data } from "autoprefixer"
import { useEffect, useState } from "react"
import Users from "./Components/Users";
import Addusers from "./Components/Addusers";

function App() {

const [users, setUsers] = useState([]);

useEffect(()=>{
fetchData();
}, [])
const fetchData = async()=>{
  await fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) =>res.json())
  .then((data) => setUsers(data))
  .catch((error) =>{
    console.log(error)
  })
}

console.log(users)


const onAdd = async(name, email) =>{
  await fetch('https://jsonplaceholder.typicode.com/users',{
    method: 'POST',
    body: JSON.stringify({
      name: name,
      email: email
    }),
    headers:{
      "content-type": "application/json: charset=UTF-8"
    }
  })
  .then((res) =>{
    if(res.status !== 201){
      return
    }else{
      return res.json();
    }
  })
  .then((data) =>{
    setUsers((users)=>[...users,data]);
  })
  .catch((error)=>{
    console.log(error)
  })
}






  return (
    <>
      <div className="">
        <h1 className="font-bold text-6xl text-center mb-6">Hello users</h1>

        <br />
        <Addusers onAdd={onAdd} />

        {
          users.map((user)=>(
            <Users id={user.id} key={user.id} name={user.name} email={user.email} />
          ))
        }
      </div>
    </>
  )
}

export default App
