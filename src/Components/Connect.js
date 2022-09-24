import React  from 'react'
// eslint-disable-next-line
export default function Connect () {
  
    return (
      <div className = "connect-container">
      <div className="connect-item">
      <img src='https://www.tnpgndec.com/images/whatsapp.png?3805f54099f4f44f5e5e6bae87e596da'  alt=""  className="connect-photo1"/>
        <h6>Whatsapp</h6>
        <a type="button" className="btn btn-outline-primary btn-sm connect-btn" href="https://api.whatsapp.com/send?phone=91123745679" target="_blank" rel="noopener noreferrer">
                Send message
        </a>
      </div>
      <div className="connect-item">
      <img src="https://www.tnpgndec.com/images/linkedin.png?2dc4e479f10778a01ba557e87526f1e0" alt="" className="connect-photo2"  />
        <h6>Linkedn</h6>
        <a  className="btn btn-outline-primary btn-sm connect-btn" href= 'https://www.linkedin.com/company/tnpgndec/mycompany/' target="_blank" rel="noopener noreferrer">
        Connect
        </a>
      </div>
      </div>
    )
}
