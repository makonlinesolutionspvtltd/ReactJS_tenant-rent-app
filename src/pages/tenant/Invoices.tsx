export default function TenantInvoices() {
    const invoices = [
      { id: "INV-001", date: "Apr 01, 2025", amount: "₹12,000", status: "Paid" },
      { id: "INV-002", date: "May 01, 2025", amount: "₹12,000", status: "Pending" },
    ];
  
    return (
      <div className="space-y-4">
        <h1 className="text-xl font-bold">My Invoices</h1>
        <table className="w-full text-sm border">
          <thead className="bg-gray-50 text-left border-b">
            <tr>
              <th className="py-2 px-3">Invoice No</th>
              <th className="py-2 px-3">Date</th>
              <th className="py-2 px-3">Amount</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-b">
                <td className="py-2 px-3">{inv.id}</td>
                <td className="py-2 px-3">{inv.date}</td>
                <td className="py-2 px-3">{inv.amount}</td>
                <td className={`py-2 px-3 ${inv.status === "Paid" ? "text-green-600" : "text-yellow-600"}`}>
                  {inv.status}
                </td>
                <td className="py-2 px-3">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  