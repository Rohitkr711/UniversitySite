// src/pages/Auth/Signup.jsx
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { signupWithEmail } from "../../firebase/auth";
import { useAuth } from "../../context/AuthContext";

export default function Signup() {
    const { currentUser, role, loading: authLoading } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "student",
    });
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");
    
    // If already logged in → redirect
    if (!authLoading && currentUser && role) {
        if (role === "faculty") return <Navigate to="/faculty/dashboard" replace />;
        if (role === "student") return <Navigate to="/userdashboard" replace />;
    }



    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setBusy(true);

        try {
            await signupWithEmail(form.email, form.password, form.name, form.role);

            // After signup → redirect based on role
            if (form.role === "faculty") {
                navigate("/faculty/dashboard", { replace: true });
            } else {
                navigate("/userdashboard", { replace: true });
            }
        } catch (err) {
            console.error("Signup error:", err);
            setError(err.message || "Failed to register.");
        } finally {
            setBusy(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow p-6">
                <h2 className="text-2xl font-semibold mb-2 text-center text-blue-700">Create Account</h2>
                <p className="text-sm text-gray-500 mb-6 text-center">
                    Register for your dashboard
                </p>

                {error && (
                    <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name */}
                    <label className="block">
                        <span className="text-sm text-gray-600">Full Name</span>
                        <input
                            type="text"
                            required
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-200"
                            placeholder="John Doe"
                        />
                    </label>

                    {/* Email */}
                    <label className="block">
                        <span className="text-sm text-gray-600">Email</span>
                        <input
                            type="email"
                            required
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-200"
                            placeholder="you@example.com"
                        />
                    </label>

                    {/* Password */}
                    <label className="block">
                        <span className="text-sm text-gray-600">Password</span>
                        <input
                            type="password"
                            required
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-200"
                            placeholder="••••••••"
                        />
                    </label>

                    {/* Role Selection */}
                    <label className="block">
                        <span className="text-sm text-gray-600">Register as</span>
                        <select
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-200"
                        >
                            <option value="student">Student</option>
                            <option value="faculty">Faculty</option>
                        </select>
                    </label>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={busy}
                        className={`w-full py-2 mt-4 rounded-lg text-white ${busy ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        {busy ? "Creating account..." : "Sign up"}
                    </button>
                </form>

                {/* Link to login */}
                <div className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                        Sign in
                    </a>
                </div>
            </div>
        </div>
    );
}
