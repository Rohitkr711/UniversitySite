// src/pages/Auth/Login.jsx
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { loginWithEmail, getUserDoc } from "../../firebase/auth";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { currentUser, role, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  // ✅ Hooks MUST be at the top
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  // ✅ Redirect AFTER hooks are defined
  if (!authLoading && currentUser && role) {
    if (role === "faculty") return <Navigate to="/faculty/dashboard" replace />;
    if (role === "student") return <Navigate to="/userdashboard" replace />;
    return <Navigate to="/" replace />;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setBusy(true);
    setError("");

    try {
      const cred = await loginWithEmail(email, password);
      const uid = cred.user.uid;

      const userDoc = await getUserDoc(uid);
      const userRole = userDoc?.role;

      if (userRole === "faculty") navigate("/faculty/dashboard", { replace: true });
      else if (userRole === "student") navigate("/userdashboard", { replace: true });
      else navigate("/", { replace: true });

    } catch (err) {
      console.error("Login error:", err);
      if (err.code === "auth/user-not-found") setError("No account found for this email.");
      else if (err.code === "auth/wrong-password") setError("Incorrect password.");
      else setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-2 text-center text-blue-700">Sign in</h2>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm text-gray-600">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded"
              placeholder="you@example.com"
            />
          </label>

          <label className="block">
            <span className="text-sm text-gray-600">Password</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded"
              placeholder="••••••••"
            />
          </label>

          <button
            type="submit"
            disabled={busy}
            className={`w-full py-2 rounded text-white ${busy ? "bg-blue-300" : "bg-blue-600"}`}
          >
            {busy ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
