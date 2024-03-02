import React, { useState } from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";

function Bank() {
    const [balance, setBalance] = useState(2000);
  const [deposit, setDeposit] = useState("00");
    const[withdraw,setWithdraw]=useState("00")



  const handleDeposit = () => {
    if (deposit > 0) {
      setBalance(prevBalance => prevBalance + parseFloat(deposit));
      
    } else {
      alert('Please enter a valid amount to Deposit.');
    }
  };

  const handleWithdraw = () =>
  {

    if(withdraw > 0)
    {
        setBalance(prevBalance => prevBalance - parseFloat(withdraw));
    }
    else {
        alert('Please enter a valid amount to withdraw.');
      }
  };

  return (

<>

<div className="account">
        <div className="container">
            <div className="row">
                <div class="col-lg-4 mb-3">
                    <div className="deposit status">
                        <h5>Deposit</h5>
                        <h2><FaIndianRupeeSign/> <span >{deposit} </span></h2>
                    </div>
                </div>
                
                <div className="col-lg-4 mb-3">
                    <div className="withdraw status">
                        <h5>Withdraw</h5>
                        <h2><FaIndianRupeeSign /> <span> {withdraw} </span></h2>
                    </div>
                </div>
                
                <div className="col-lg-4 mb-3">
                    <div className="balance status">
                        <h5>Balance</h5>
                        <h2><FaIndianRupeeSign /> <span>{balance}</span></h2>
                    </div>
                 </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="submit-area">
                        <h4>Deposit Amount</h4>
                        <input  type="text" onChange={(e) => setDeposit(e.target.value)} className="form-control" placeholder="Enter deposit amount"/><br/>
                        <button  className="btn btn-success" onClick={handleDeposit}>Deposit</button>
                    </div>
                </div>
                
                <div className="col-lg-6">
                    <div className="submit-area">
                        <h4>Withdraw Amount</h4>
                        <input  type="text" className="form-control" onChange={(e) =>setWithdraw(e.target.value)} placeholder="Enter withdraw amount"/><br/>
                        <button class="btn btn-success" onClick={handleWithdraw}>Withdraw</button>
                    </div>
                </div>
            </div>
        </div>
    </div>



 </>




  )
}

export default Bank
