import {useAuth} from "../../context/authContext"

function UserProfile() {
    const {user, logout, loading} = useAuth()
    // console.log(user);
    const handleLogout = async() => {
        try {
            await logout()
        } catch (error) {
            console.log(error);
        }
    }

    if(loading) return <h1>Loading...</h1>

  return (
    <div>
        <h1>Pefil</h1>
        <h2>Welcome {user.email}</h2>
        <button onClick={handleLogout}>Cerrar sesíon</button>
    </div>
  )
}

export default UserProfile