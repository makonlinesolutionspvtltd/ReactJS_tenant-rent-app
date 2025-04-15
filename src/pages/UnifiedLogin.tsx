// File: src/pages/Login.tsx
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();

  const handleRoleSelect = (role: "admin" | "tenant") => {
    localStorage.setItem("token", "test-token");
    localStorage.setItem("role", role);
    if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/tenant/dashboard");
    }
  };

  // Auto-login for previously selected role (optional)
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      navigate("/admin/dashboard");
    } else if (role === "tenant") {
      navigate("/tenant/dashboard");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-2xl font-bold">Select Role for Testing</h1>
      <div className="space-x-4">
        <button
          onClick={() => handleRoleSelect("admin")}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Admin Dashboard
        </button>
        <button
          onClick={() => handleRoleSelect("tenant")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Tenant Dashboard
        </button>
      </div>
    </div>
  );
}
