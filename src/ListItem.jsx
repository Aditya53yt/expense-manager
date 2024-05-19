import React from 'react'

const ListItem = ({transaction,deletetransaction,editTransaction}) => {
  return (
    <li
    className={transaction.amount>0?"list-group-item rounded-0 bg-success":"list-group-item rounded-0 bg-danger"}
       
    
  >
    <h1 className="text-light display-6">
    
    {transaction.text}:{transaction.amount}
    </h1>
    <span className="float-end">
      <button className="btn btn-outline-warning btn-sm rounded-0 mx-1" onClick={()=>editTransaction(transaction)}>
        EDIT
      </button>
      <button className="btn btn-outline-light btn-sm rounded-0 mx-1" onClick={()=>deletetransaction(transaction.id)}>
        DELETE
      </button>
    </span>
  </li>
  )
}

export default ListItem