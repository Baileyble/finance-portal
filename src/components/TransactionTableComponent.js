import React, {Component} from "react";
import { Table } from 'reactstrap';

function TransactionTable({transactions}) {
    return (
        <>
            <div className="container">
                <Table>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Transaction</th>
                        <th>Memo</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.map(transaction => <tr key={transaction.Id}>
                        <td>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(transaction.Created)))}</td>
                        <td>{transaction.Type}</td>
                        <td>{transaction.Memo}</td>
                        <td>${transaction.Amount}</td>
                    </tr>)}
                    </tbody>
                </Table>
            </div>
        </>
    )
}


export default TransactionTable