import { signupWithEmail, loginWithEmail, logout } from "./firebase/auth";
import { useAuth } from "./context/AuthContext";
import { useState } from "react";

export default function TestAuth() {
  const { currentUser, userDoc } = useAuth();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  async function handleSignup() {
    await signupWithEmail(email, pass, name, "student"); // or faculty
    // await signupWithEmail(email, pass, name, "faculty"); // or faculty

    alert("Signup success!");
  }

  async function handleLogin() {
    await loginWithEmail(email, pass);
    alert("Login success!");
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Test Auth</h1>

      <input className="border p-2" placeholder="Name" onChange={e => setName(e.target.value)} />
      <br /><br />
      <input className="border p-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <br /><br />
      <input className="border p-2" placeholder="Password" onChange={e => setPass(e.target.value)} />

      <br /><br />
      <button onClick={handleSignup} className="bg-blue-500 text-white px-4 py-2">Signup</button>
      <button onClick={handleLogin} className="bg-green-500 text-white px-4 py-2 ml-2">Login</button>
      <button onClick={logout} className="bg-red-500 text-white px-4 py-2 ml-2">Logout</button>

      <div className="mt-4">
        <p><b>Current User:</b> {currentUser?.email || "None"}</p>
        <p><b>Role:</b> {userDoc?.role || "N/A"}</p>
      </div>
    </div>
  );
}
