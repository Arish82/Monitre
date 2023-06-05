import React from 'react'

export default function Expenses() {
    return (
        <>
            <div className="discount card" style={{"--delay": ".4s"}}>
                <div className="title">Expenses</div>
                <div className="discount-wrapper">
                    <div className="discount-info">
                        <div className="subtitle">This Month:</div>
                        <div className="subtitle-count dist">$500</div>
                        <div className="subtitle">Remaining:</div>
                        <div className="subtitle-count is-remain">$1200</div>
                    </div>
                    <div className="discount-chart">
                        <div className="circle">
                            <div className="pie">
                                <svg>
                                    <circle cx="60" cy="60" r="50">   
                                    </circle>
                                </svg>
                            </div>
                            <div className="counter">$500</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
