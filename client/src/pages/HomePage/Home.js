import React from 'react'
import "./home.scss";
import LeftSidebar from '../../components/LeftSidebar';
import MainContainer from '../../components/MainContainer';

import Header from '../../components/Header'
import Expenses from '../../components/Expenses'
import AccountWrapper from '../../components/AccountWrapper'
import Table from '../../components/Table'
import Transection from '../../components/Transection'

export default function Home() {
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

