import { useAuth } from "../../context/authContext";

function UserProfile() {
  const { user, logout, loading } = useAuth();
  const { displayName, email } = user;
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <h1>Loading...</h1>;
  
  return (
    <div className="container">
      <div className="profile container">
        <h1 className="profile__title">Perfil</h1>
        <span className="profile__span">
          Name: <b>{displayName}</b>
        </span>
        <span className="profile__span">
          Email: <b>{email}</b>
        </span>
        <button className="profile__btn" onClick={handleLogout}>Cerrar sesíon</button>
      </div>
    </div>
  );
}

export default UserProfile;
