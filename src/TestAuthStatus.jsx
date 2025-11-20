import { useAuth } from "./context/AuthContext";

export default function TestAuthStatus() {
  const { currentUser, role, profile } = useAuth();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">AuthContext Status</h2>
      <p>User: {currentUser?.email || "Not logged in"}</p>
      <p>Role: {role || "N/A"}</p>

      <pre className="bg-gray-100 mt-3 p-2 rounded">
        {JSON.stringify(profile, null, 2)}
      </pre>
    </div>
  );
}
