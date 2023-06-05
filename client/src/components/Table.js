import React from 'react'

export default function Table() {
    return (
        <>
            <div className="cards-wrapper" style={{"--delay": "1s"}}>
                <div className="cards-header">
                    <h2 className="cards-view">
                        Transactions
                    </h2>
                    <div className="cards-header-date">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="arrows feather feather-chevron-left">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                        <div className="title">Sat, Nov 25 2020</div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="arrows feather feather-chevron-right">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </div>
                    <div className="cards-button button">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                        Create
                    </div>
                </div>
                <div className="cards card">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Time</th>
                                <th>Date</th>
                                <th>Message</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                Home Rent</td>
                                <td>17:04</td>
                                <td>28 Feb</td>
                                <td>28 Feb</td>
                                <td>
                                    <div className="status is-green">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus">
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                        $ 300
                                    </div>
                                </td>
                                <tdc className="edit-btn">
                                    <svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 121.51">
                                        <path d="M28.66,1.64H58.88L44.46,16.71H28.66a13.52,13.52,0,0,0-9.59,4l0,0a13.52,13.52,0,0,0-4,9.59v76.14H91.21a13.5,13.5,0,0,0,9.59-4l0,0a13.5,13.5,0,0,0,4-9.59V77.3l15.07-15.74V92.85a28.6,28.6,0,0,1-8.41,20.22l0,.05a28.58,28.58,0,0,1-20.2,8.39H11.5a11.47,11.47,0,0,1-8.1-3.37l0,0A11.52,11.52,0,0,1,0,110V30.3A28.58,28.58,0,0,1,8.41,10.09L8.46,10a28.58,28.58,0,0,1,20.2-8.4ZM73,76.47l-29.42,6,4.25-31.31L73,76.47ZM57.13,41.68,96.3.91A2.74,2.74,0,0,1,99.69.38l22.48,21.76a2.39,2.39,0,0,1-.19,3.57L82.28,67,57.13,41.68Z" />
                                    </svg>
                                </tdc>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}