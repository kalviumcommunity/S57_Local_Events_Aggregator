import React from "react";
import "./Auth.css";
function Auth() {
  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };
  const deleteAccount = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <h1>Home Page </h1>
      <p>Wellcome {localStorage.getItem("name")}</p>
      <button onClick={logout} className="logout">
        LogOut
      </button>
      <button onClick={deleteAccount} className="delete">
        Delete
      </button>
    </div>
  );
}
export default Auth;
