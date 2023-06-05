import React from 'react'
import { useNavigate } from 'react-router-dom'
import transaction from '../assets/transaction.jpg'
import '../pages/register.css'

const TransactionForm = () => {

    const navigate=useNavigate();

    const addTransaction=()=>{
        window.alert('Transaction recorded successfully')
        navigate('/');
    }

    return (
        < div className = 'main-container' >
            <div className='sub-container'>
                <div className='img-container'>
                    <img src={transaction} alt="transaction" className='image-transaction' />
                </div>
                <div className='main-form-container'>
                    <div className="form-heading">Transaction Details</div>
                    <form className='form-container' method="POST" autoComplete="off">
                    <select id="transactionType" class="wallet-type-select">
                            <option value="true">Deposit</option>
                            <option value="false">Debit</option>
                        </select>
                        <input
                            type="text"
                            name="transactionName"
                            autoComplete='off'
                            placeholder='Transaction Name'
                            required
                            className='input-container'
                        />
                        <input
                            type="type"
                            name="transactionDescription"
                            placeholder='Transaction Description'
                            required
                            className='input-container'
                        />
                        <input
                            type="text"
                            name="transactionAmount"
                            placeholder='Transaction Amount'
                            required
                            className='input-container'
                        />
                        <button type="submit" className='submit' onClick={addTransaction}>Submit</button>
                    </form>
                </div>
            </div>
    </div >
  )
}

export default TransactionForm