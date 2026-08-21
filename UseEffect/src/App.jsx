import { useEffect,useState } from "react";

function App(){
  const [users,setUsers] = useState([])
  const [isloading,setIsloading] = useState(true)
  const [error,setError] = useState("");
  useEffect(() => {fetch("https://jsonplaceholder.typicode.com/users").
    then((response) => {
      if(!response.ok){
        throw new Error("Something Went Wrong")
      }
      response.json()
    })
    .then((data) => {setUsers(data)
    setIsloading(false);
    })
    .catch((error) => {
      setError(error.message);
      setIsloading(false);
    })
  },[])
  if(isloading){
    return (
      <h2>Loading....</h2>
    )
  }
  if(error){
    return (
      <h2>{error}</h2>
    )
  }
  return (
    <div>
      <h2>Users Data</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
        </div>
      ))}
    </div>
  )
}

export default App;