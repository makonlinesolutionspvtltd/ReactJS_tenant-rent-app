import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TenantLogin from "./pages/UnifiedLogin";

import AdminLayout from "./pages/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Tenants from "./pages/admin/Tenants";
import TenantProfile from "./pages/admin/TenantProfile";
import InvoiceDetail from "./pages/admin/InvoiceDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<TenantLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="tenants" element={<Tenants />} />
          <Route path="/admin/tenants/:name" element={<TenantProfile />} />
          <Route path="/admin/invoice/:invoiceId" element={<InvoiceDetail />} />
            {/* Add other admin routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
