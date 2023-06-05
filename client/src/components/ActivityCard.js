import React from 'react'

export default function ActivityCard() {
  return (
    <>
      <div className="activity card" style={{"--delay": ".2s"}}>
        <div className="title">User Activities</div>
        <div className="subtitle">Hoo - is an adaptive Online Courses Application with a wide range of course directions. The students will have a great possibility to study.</div>
        <div className="activity-links">
          <div className="activity-link active">Current User</div>
          <div className="activity-link notify">User Request</div>
        </div>
        <div className="destination">
          <div className="destination-card">
            <div className="destination-profile">
              <img className="profile-img" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="" />
              <div className="destination-length">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map-pin">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                45.4m
              </div>
            </div>
            <div className="destination-points">
              <div className="point">Traffic Point</div>
              <div className="sub-point">Brooklyn St, NY</div>
            </div>
          </div>
          <div className="destination-card">
            <div className="destination-profile">
              <img className="profile-img" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="" />
              <div className="destination-length">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map-pin">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                42.8m
              </div>
            </div>
            <div className="destination-points">
              <div className="point">Pickup Point</div>
              <div className="sub-point">Maryland 17, NY</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
