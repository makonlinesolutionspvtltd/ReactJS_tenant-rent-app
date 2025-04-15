import { Link } from "react-router-dom";
import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Papa from "papaparse";

export default function Payments() {
  const [statusFilter, setStatusFilter] = useState("All");

  const payments = [
    {
      invoice: "INV-001",
      tenant: "John Doe",
      property: "Flat 101 - Green Residency",
      date: "Apr 05, 2024",
      amount: "₹12,000",
      status: "Paid",
    },
    {
      invoice: "INV-002",
      tenant: "John Doe",
      property: "Flat 101 - Green Residency",
      date: "—",
      amount: "₹12,000",
      status: "Pending",
    },
  ];

  const filtered = statusFilter === "All"
    ? payments
    : payments.filter((p) => p.status === statusFilter);

  const exportCSV = () => {
    const csv = Papa.unparse(filtered);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "payments.csv";
    link.click();
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Payment Records", 14, 14);
    autoTable(doc, {
      startY: 20,
      head: [["Invoice", "Tenant", "Property", "Date", "Amount", "Status"]],
      body: filtered.map((p) => [
        p.invoice,
        p.tenant,
        p.property,
        p.date || "",
        p.amount,
        p.status,
      ]),
    });
    doc.save("payments.pdf");
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Payments</h1>
        <div className="flex gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border px-3 py-1 rounded text-sm"
          >
            <option value="All">All</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
          <button onClick={exportCSV} className="border px-3 py-1 rounded text-sm">
            Export CSV
          </button>
          <button onClick={exportPDF} className="border px-3 py-1 rounded text-sm">
            Export PDF
          </button>
        </div>
      </div>

      <table className="w-full text-sm border">
        <thead className="text-left bg-gray-50 border-b">
          <tr>
            <th className="py-2 px-3">Invoice No.</th>
            <th className="py-2 px-3">Tenant</th>
            <th className="py-2 px-3">Property</th>
            <th className="py-2 px-3">Payment Date</th>
            <th className="py-2 px-3">Amount</th>
            <th className="py-2 px-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((p, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="px-3 py-2 text-blue-600 hover:underline">
                <Link to={`/admin/invoice/${p.invoice}`}>{p.invoice}</Link>
              </td>
              <td className="px-3 py-2">{p.tenant}</td>
              <td className="px-3 py-2">{p.property}</td>
              <td className="px-3 py-2">{p.date}</td>
              <td className="px-3 py-2">{p.amount}</td>
              <td
                className={`px-3 py-2 ${
                  p.status === "Paid" ? "text-green-600" : "text-yellow-600"
                }`}
              >
                {p.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
