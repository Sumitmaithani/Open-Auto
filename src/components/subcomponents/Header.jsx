import React from 'react'
import {PhoneFilled, MailFilled} from "@ant-design/icons";
import { Button } from 'antd';

const Header = () => {
  return (
    <div className='header'>
       <h1 className='header-logo'>OPENAUTO</h1>
       <ul className="header-options">
        <li className="header-option">
          <PhoneFilled
            className="header-option-icon"
            style={{ transform: "rotateY(180deg)" }}
          />
          + 769 586 4558
        </li>
        <li className="header-option">
          <MailFilled className="header-option-icon" />
          service@openauto.ca
        </li>
        <li className="header-option">
          <Button className="header-option-button" shape="round" size="large">
            Download the mobile app
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default Header