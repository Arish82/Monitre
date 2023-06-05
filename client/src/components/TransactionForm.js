import React from 'react'
import { useNavigate } from 'react-router-dom'
import transaction from '../assets/transaction.jpg'
import '../pages/register.css'
import Header from './Header'
import ActivityCard from "./ActivityCard"
import "../assets/scss/trasaction.scss"

const TransactionForm = () => {

    const navigate = useNavigate();

    const addTransaction = () => {
        window.alert('Transaction recorded successfully')
        navigate('/');
    }

    return (
        <>
            <div className="main-containers"  >
                <Header />
                <div className='transaction-form' >
                    <div class="transaction-card" style={{"--delay": ".4s"}}>
                        <h1 class="title">Transaction Details</h1>
                        <form className='transaction-form-card' method="POST" autoComplete="off">
                            <select id="transactionType" className="input-fields">
                                
                                <option value=""></option>
                                <option value="+">Deposit</option>
                                <option value="-">Debit</option>
                            </select>
                            <input
                                type="text"
                                name="transactionName"
                                autoComplete='off'
                                placeholder='Category'
                                required
                                className='input-fields'
                            />
                            <input
                                type="type"
                                name="transactionDescription"
                                placeholder='Description'
                                required
                                className='input-fields'
                            />
                            <input
                                type="text"
                                name="transactionAmount"
                                placeholder='Amount'
                                required
                                className='input-fields'
                            />
                            <button type="submit" className='button offer-button' onClick={addTransaction}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus">
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