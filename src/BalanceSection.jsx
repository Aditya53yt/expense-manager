import React from 'react'

const BalanceSection = ({transactions}) => {
  const balance = transactions.reduce((p, c) => {
    return p + c.amount;
  }, 0);

  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((p, c) => {
      return p + c.amount;
    }, 0);

  const income =transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((p, c) => {
      return p + c.amount;
    }, 0);
 
  return (
    <div className="my-3 row g-3">
    <div className="col-md-12 col-lg-4">
      <div className="card p-3 rounded-0 bg-primary">
        <h1 className="display-6 text-light">Total Inc:{income}</h1>
        <h1 className="display-5 text-light"></h1>
      </div>
    </div>
    <div className="col-md-12 col-lg-4">
      <div className="card p-3 rounded-0 bg-danger">
        <h1 className="display-6 text-light">Total Exp :{expense}</h1>
        <h1 className="display-5 text-light"></h1>
      </div>
    </div>
    <div className="col-md-12 col-lg-4">
      <div className="card p-3 rounded-0 bg-warning">
        <h1 className="display-6 text-light">Balance:{balance}</h1>
        <h1 className="display-5 text-light"></h1>
      </div>
    </div>
  </div>
  )
}

export default BalanceSection