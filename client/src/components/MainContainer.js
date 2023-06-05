import React from 'react'
import Header from './Header'
import Expenses from './Expenses'
// import ActivityCard from '../../../temp/ActivityCard'
// import CardWrapper from './CardWrapper'
import AccountWrapper from './AccountWrapper'
import Table from './Table'
import Transection from './Transection'

export default function MainContainer() {
  return (
    <>
        <div className="main-containers">
            <Header/>
            <div className="body-container">

              <div className="user-box first-row">
                  <AccountWrapper/>
                  <Expenses/>
                  <Transection/>
              </div>
              <div className="user-box second-box second-row">
                  <Table/>
              </div>
            </div>
        </div>
    </>
  )
}
