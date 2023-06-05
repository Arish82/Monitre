import React from 'react'
import UserProfileImage from "../assets/Hamshita.png"

export default function AccountWrapper() {
    let UserName="Hamshita";
    let Work="SDE Intern";
    return (
        <>
            <div className="account-wrapper" style={{"--delay": ".8s"}}>
                <div className="account-profile">
                    <img src={UserProfileImage} alt={UserName} />
                    <div className="blob-wrap">
                        <div className="blob"></div>
                        <div className="blob"></div>
                        <div className="blob"></div>
                    </div>
                    <div className="account-name">{UserName}</div>
                    <div className="account-title">{Work}</div>
                </div>
                <div className="account card">
                    <div className="account-cash is-green">$ 5637.04</div>
                    <div className="account-income">Total Income</div>
                    <div className="account-iban">**** **** **** 3060</div>
                </div>
            </div>
        </>
    )
}
