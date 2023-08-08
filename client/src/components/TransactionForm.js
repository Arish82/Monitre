import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../pages/Registration/register.css'
import Header from './Header'
import "../assets/scss/trasaction.scss"

const TransactionForm = (props) => {
    const [data, setdata] = useState({
        type: "",
        category: "",
        description: "",
        amount: ""
    })
    console.log(data);
    const navigate = useNavigate();

    const addTransaction = (e) => {
        e.preventDefault();
        
        // window.alert('Transaction recorded successfully')
        // navigate('/');
    }

    return (
        <>
            <div className="main-containers"  >
                <Header />
                <div className='transaction-form' style={{"--delay": "1s"}} >
                    <div className="transaction-card">
                        <h1 className="title">Transaction Details</h1>
                        <form className='transaction-form-card' method="POST" autoComplete="off">
                            <select id="transactionType" className="input-fields" value={data.type} onChange={e=> setdata({...data,type: e.target.value}) } >
                                
                                <option value=""></option>
                                <option value="Deposit">Deposit</option>
                                <option value="Debit">Debit</option>
                            </select>
                            <input
                                type="text"
                                name="transactionName"
                                autoComplete='off'
                                placeholder='Category'
                                required
                                className='input-fields'
                                value={data.category}
                                onChange={e=>setdata({...data, category: e.target.value})}
                            />
                            <input
                                type="type"
                                name="transactionDescription"
                                placeholder='Description'
                                required
                                className='input-fields'
                                value={data.description}
                                onChange={e=>setdata({...data, description: e.target.value})}
                            />
                            <input
                                type="text"
                                name="transactionAmount"
                                placeholder='Amount'
                                required
                                className='input-fields'
                                value={data.amount}
                                onChange={e=>setdata({...data, amount: e.target.value})}
                            />
                            <button type="submit" className='button offer-button' onClick={addTransaction}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                    <path d="M12 5v14M5 12h14" />
                                </svg> Add
                            </button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default TransactionForm