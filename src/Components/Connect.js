import React  from 'react'

export default function Connect () {
  
    return (
      <div className = "connect-container">
      <div className="connect-item">
      <img src='https://www.tnpgndec.com/images/whatsapp.png?3805f54099f4f44f5e5e6bae87e596da' alt=""  className="connect-photo1"/>
        <h6>Whatsapp</h6>
        <button type="button" className="btn btn-outline-primary btn-sm">
                Send message
        </button>
      </div>
      <div className="connect-item">
      <img src="https://www.tnpgndec.com/images/linkedin.png?2dc4e479f10778a01ba557e87526f1e0" alt="" className="connect-photo2"  />
        <h6>Linkedn</h6>
        <button type="button" className="btn btn-outline-primary btn-sm">
        Connect
        </button>
      </div>
      </div>
    )
}
