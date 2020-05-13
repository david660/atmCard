import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

function App() {
  return(
    <div>
      <CreditCard/>
    </div>
  )
}

function CreditCard() {
  return (
    <CardDetails name="DAODU MUYIWA" bankName="Big Bank, Inc." cardNumber="1234 5678 8765 4321" littleNo="1234" date="08/19"/>
  )
}

function CardDetails(prop) {
  return (
    <div className="container">
      <div className="bankName">
        <h3>{prop.bankName}</h3>
      </div>
      <div className="cardNo">
        <p>{prop.cardNumber}</p>
        <p className="little">{prop.littleNo}</p>
      </div>
      <div className="expDate">
        <div className="words">
          <p>VALID</p>
          <p>THRU</p>
        </div>
        <div className="date">
          <p>{prop.date}</p>
        </div>
      </div>
      <div className="cardHolder">
        <p>{prop.name}</p>
      </div>
    </div>
  )
}


ReactDOM.render(<App/>, document.getElementById("root"))