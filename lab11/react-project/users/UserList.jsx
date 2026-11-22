import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../src/api" /* Connection to axios library */

export default function UserList(){
    // useState function destructures to the state name, setter
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    // useEffect(callBack, state to trigger Update)
    useEffect(() => {
        const getUsers = async () => {
            try{
                const response = await api.get("/users")
                //console.log(response.data[0].name)
                // state users will contain the data from API
                setUsers(response.data)
            } catch (errorCaught){
                setError("Could not load users: " + errorCaught.message)
            } finally{
                setLoading(false)
            }
        }

        getUsers()
    }, [])

    const deleteUser = async (id) => {
        if(!window.confirm(`Delete user ${id}?`)){
            return
        }

        try {
            await api.delete(`/users/${id}`)
            setUsers(users.filter((user) => user.id !== id))
        } catch (errorCaught) {
            alert("Delete failed: " + errorCaught.message)
        }
    }

    if(loading){
        return <p>Loading users...</p>
    }

    if(error){
        return <p>{error}</p>
    }

    return (
        <article>
            <h2>User List</h2>
            {users.map((user) => {
                return (
                    <p key={user.id}>
                        {user.name}
                        <button onClick={() => {deleteUser(user.id)}}>Delete</button>
                    </p>
                )
            })}
        </article>
    )
}
