import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { AuthContext } from './../AuthContext/AuthContext';
import { toast } from 'react-toastify';


const PayPage = () => {
  const { billType } = useParams();
  const [billData, setBillData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paid, setPaid] = useState(false);

  const {
    updateBalance,
    markBillAsPaid,
    hasPaidBill,
    balance,
    addBillDetails,
  } = useContext(AuthContext);

  useEffect(() => {
  const fetchBillData = async () => {
    const loadingToastId = toast.loading('⏳ Loading bill details...');
    try {
      const res = await fetch('/billData.json');
      const data = await res.json();
      const selectedBill = data[billType];
      if (selectedBill) {
        setBillData(selectedBill);
        toast.update(loadingToastId, {
          render: '✅ Bill details loaded!',
          type: 'success',
          isLoading: false,
          autoClose: 2000,
        });
      } else {
        setBillData(null);
        toast.update(loadingToastId, {
          render: '❌ No data found for this bill type.',
          type: 'error',
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (err) {
      console.error("Failed to fetch bill data:", err);
      toast.update(loadingToastId, {
        render: '🚫 Failed to load bill data. Please try again later.',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      });
      setBillData(null);
    } finally {
      setLoading(false);
    }
  };

  fetchBillData();
}, [billType]);


  useEffect(() => {
    if (billType) {
      const alreadyPaid = hasPaidBill(billType);
      setPaid(alreadyPaid);
    }
  }, [billType, balance]);

  const handlePay = () => {
    if (!billData) return;

    if (billData.amount > balance) {
       toast.warning('⚠️ Insufficient balance.Please recharge your account.');
      return;
    }

    updateBalance(billData.amount);
    markBillAsPaid(billType);

    const paymentTime = new Date().toLocaleString();

    const paidBillInfo = {
      ...billData,
      paidAt: paymentTime,
    };

    addBillDetails(paidBillInfo);

    setPaid(true);
    toast.success('✅ Payment successful! Your bill has been cleared.');
  };

  if (loading) return <div className="text-center my-10">Loading...</div>;
  if (!billData) return <div className="text-center my-10 text-red-500">No data found for this bill type.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-3 py-6 sm:px-4">
      <div className="w-full max-w-5xl bg-[#FFF6F1] shadow-xl rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 p-5 sm:p-8 md:p-10 transition-all duration-300">

        
        <div className="flex justify-center items-center  rounded-xl p-4 sm:p-6">
          <img
            src={billData.logourl}
            alt={billData.billType}
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] rounded-2xl object-contain"
          />
        </div>

      
        <div className="flex flex-col justify-center gap-3 text-gray-800 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold  mb-1 sm:mb-2">{billData.billType} Bill</h2>
          <p className="text-sm font-bold  sm:text-base"><span className=" font-extrabold text-lg ">Organization:</span> {billData.organization}</p>
          <p className="text-sm font-bold  sm:text-base"><span className=" font-extrabold text-lg ">Amount:</span> {billData.amount} BDT</p>
          <p className="text-sm font-bold  sm:text-base"><span className=" font-extrabold text-lg ">Due Date:</span> {billData.dueDate}</p>
          <p className="text-sm font-bold  sm:text-base"><span className=" font-extrabold text-lg ">Due Day:</span> {billData.dueDay}</p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
               to="/history"
              onClick={handlePay}
              disabled={paid}
              className={`w-full sm:w-auto px-6 py-2.5 rounded-md shadow-md text-sm sm:text-base font-medium transition-all duration-300 ${paid
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
            >
              {paid ? "Already Paid" : "Pay Your Bill"}
            </Link>
            <Link
              to="/"
              className="w-full sm:w-auto text-center bg-pink-500 hover:bg-pink-600 text-white px-6 py-2.5 rounded-md shadow-md text-sm sm:text-base font-medium transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PayPage;