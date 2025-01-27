import React from 'react'
import {EMAIL, EMAIL_URL, PHONE, PHONE_URL } from '../../constants/constants';
const MiniHeader = () => {
  return (
    <div className="header-top">
        <div className="auto-container">
            <div className="inner-container">
                <div className="left-column">
                    
                </div>
                <div className="right-column">
                    <ul className="contact-info">
                        <li><a href={PHONE_URL}><i className="flaticon-call"></i> { PHONE } </a></li>
                        <li><a href={EMAIL_URL}><i className="flaticon-email-1"></i>{ EMAIL }</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MiniHeader
