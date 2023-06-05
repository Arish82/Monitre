import React from 'react'
import "./home.scss";
import LeftSidebar from '../../components/LeftSidebar';
import MainContainer from '../../components/MainContainer';

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <LeftSidebar />
        <MainContainer/>
      </div>
    </>
  )
}
