import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
const From = ({saveTransactions,edit,updateTransaction}) => {
  const[text,setText]=useState("")
  const[amount,setAmount]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
    if (edit.isEdit) {
      updateTransaction({
        id: edit.transaction.id,
        text: text,
        amount: parseInt(amount),
      });
    } else {
      saveTransactions(text, amount);
    }
    
setText("")
setAmount("")

Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Add transaction successfull",
  showConfirmButton: false,
  timer: 1500
});


  }
  useEffect(()=>{
    setText(edit.transaction.text)
    setAmount(edit.transaction.amount)
    
    },[edit])
  return (
    <div className="card rounded-0 p-3">
    <h1 className="display-6 text-center">Enter Your Transaction</h1>
    <form className="my-3" onSubmit={(e)=>handleSubmit(e)} >
      <input
        type="text"
        placeholder="Enter Transaction"
        className=" my-2 form-control rounded-0"
        onChange={(e)=>setText(e.target.value)}
        value={text}
        required
        
      />
      <input
        type="number"
        placeholder="Enter Amount"
        className=" my-2 form-control rounded-0"
        onChange={(e)=>setAmount(e.target.value)}
        value={amount}
      />
      <button className="btn btn-success rounded-0 w-100">Save</button>
    </form>
  </div>
  )
}

export default From