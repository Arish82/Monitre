import React from 'react'
import Header from './Header'
import Expenses from './Expenses'
import AccountWrapper from './AccountWrapper'
import Table from './Table'
import Transection from './Transection'
// import ActivityCard from './ActivityCard'


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
                  {/* <ActivityCard/> */}
              </div>
              <div className="user-box second-box second-row">
                  <Table/>
              </div>
            </div>
        </div>
    </>
  )
}
