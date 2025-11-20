import { useAuth } from "../context/AuthContext";

export default function AuthStatus() {
  const { currentUser, role, userProfile } = useAuth();

  return (
    <div className="p-6">
      <h2 className="font-bold text-xl">Auth Status</h2>
      <p>User: {currentUser?.email || "None"}</p>
      <p>Role: {role}</p>

      <pre className="bg-gray-100 p-3 mt-3 rounded">
        {JSON.stringify(userProfile, null, 2)}
      </pre>
    </div>
  );
}
