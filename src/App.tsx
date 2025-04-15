import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Layouts
import TenantLayout from "./pages/TenantLayout";
import AdminLayout from "./pages/AdminLayout"; // (assumed exists)

// Tenant Pages
import TenantDashboard from "./pages/tenant/Dashboard";
import TenantInvoices from "./pages/tenant/Invoices";
import RentSchedule from "./pages/tenant/RentSchedule";
import MyProperty from "./pages/tenant/MyProperty";
import TenantSelfProfile from "./pages/tenant/Profile";

// Admin Pages (as placeholders)
import AdminDashboard from "./pages/admin/Dashboard";
import Tenants from "./pages/admin/Tenants";
import Properties from "./pages/admin/Property";
import Payments from "./pages/admin/Payments";
import Settings from "./pages/admin/Settings";
import TenantProfile from "./pages/admin/TenantProfile"; // for tenant details view
import InvoiceDetails from "./pages/admin/InvoiceDetail"; // detailed invoice page

export default function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Default redirect to Tenant Panel */}
        <Route path="/" element={<Navigate to="/tenant" replace />} />

        {/* ✅ Tenant Panel */}
        <Route path="/tenant" element={<TenantLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<TenantDashboard />} />
          <Route path="invoices" element={<TenantInvoices />} />
          <Route path="rent-schedule" element={<RentSchedule />} />
          <Route path="my-property" element={<MyProperty />} />
          <Route path="profile" element={<TenantSelfProfile />} />
        </Route>

        {/* ✅ Admin Panel */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="tenants" element={<Tenants />} />
          <Route path="properties" element={<Properties />} />
          <Route path="payments" element={<Payments />} />
          <Route path="settings" element={<Settings />} />
          <Route path="tenant-profile/:name" element={<TenantProfile />} />
          <Route path="invoice/:id" element={<InvoiceDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}
