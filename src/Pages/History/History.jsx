import React, { useContext } from "react";
import { AuthContext } from './../AuthContext/AuthContext';
import { Navigate } from "react-router";


const History = () => {
  const { user, paidBillsDetails } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" replace />;

  if (!paidBillsDetails || paidBillsDetails.length === 0) {
    return (
      <div className="text-center my-10 text-gray-600">
        You haven't paid any bills yet.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto my-10 px-4">
      <h2 className="sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-gray-800">
        Payment History
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paidBillsDetails.map((bill, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={bill.logourl}
              alt={bill.billType}
              className="w-24 h-24 object-contain mb-4"
            />
            <h3 className="text-lg font-extrabold mb-2">{bill.billType} Bill</h3>
            <p className="text-sm font-bold text-gray-600 mb-1">
              <span className="font-extrabold ">Organization:</span>{" "}
              {bill.organization}
            </p>
            <p className="text-sm font-bold text-gray-600 mb-1">
              <span className="font-extrabold ">Amount Paid:</span>{" "}
              {bill.amount} BDT
            </p>
            <p className="text-sm font-bold text-gray-600 mb-1">
              <span className="font-extrabold ">Due Date:</span> {bill.dueDate}
            </p>
            <p className="text-xs font-bold text-gray-400">
              <span className="font-extrabold ">Paid on:</span> {bill.paidAt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;