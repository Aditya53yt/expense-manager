import React, { useState } from 'react'
import Navbar from './component/Navbar'
import From from './From'
import BalanceSection from './BalanceSection'
import ListGroup from './ListGroup'
import Swal from 'sweetalert2' 
const App = () => {
const[transactions,setTransactions]=useState([
])
const[edit,setEdit]=useState({
  transaction:{},
  isEdit:false
})
const saveTransactions=(text,amount)=>{
  const newTransanction={
    id:crypto.randomUUID,
    text,
    amount:parseInt(amount)
  }
  setTransactions([newTransanction,...transactions])
}
//delete transaction
const deletetransaction=(id)=>{
setTransactions(transactions.filter((item)=>item.id!==id))
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});


}
const editTransaction=(transaction)=>{
  setEdit({
    transaction:transaction,
    isEdit:true
  })
}

const updateTransaction=(updatedTransaction)=>{
  setTransactions(transactions.map((item)=>item.id===updatedTransaction.id?updatedTransaction:item))

}


  return (
    <>
    
   <Navbar/>
      <div className="container px-3 py-5">
       <From saveTransactions={saveTransactions} edit={edit}  updateTransaction={updateTransaction}/>
        <BalanceSection transactions={transactions}/>
        <ListGroup transactions={transactions} deletetransaction={deletetransaction} editTransaction={editTransaction}/>
      </div>
    </>
  )
}

export default App