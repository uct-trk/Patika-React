import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const [loading, setLoading] = useState(false);

  const { user, setUser } = useContext(UserContext);
  console.log(user);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({ id: 1, username: "ugurcan", bio: "lorem ipsum" });
      setLoading(false);
    }, 1500);
  };

  const handleOut = () => {
      setUser(null)
  }

  return (
    <div>
      {!user && (
        <button onClick={handleLogin}>{loading ? "loading" : "login"}</button>
      )}
      <code>{JSON.stringify(user)}</code>
      {
          user && <button onClick={handleOut}>Logout</button>
      }
    </div>
  );
};

export default Profile;
