import React, { useState } from "react";

function ChargesTable() {
  const [activeTab, setActiveTab] = useState("equity");

  const renderContent = () => {
    switch (activeTab) {
      case "equity":
        return (
          <table className="table table-bordered mt-4">
            <thead>
              <tr>
                <th></th>
                <th>Equity delivery</th>
                <th>Equity intraday</th>
                <th>F&O - Futures</th>
                <th>F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>Zero Brokerage</td>
                <td>Flat ₹20 or 0.03% whichever is lower</td>
                <td>Flat ₹20 or 0.03% whichever is lower</td>
                <td>Flat ₹20 per executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>0.1% on buy & sell</td>
                <td>0.025% on the sell side</td>
                <td>0.0125% on the sell side</td>
                <td>0.0625% on the sell side (on premium)</td>
              </tr>
            </tbody>
          </table>
        );
      case "currency":
        return (
          <table className="table table-bordered mt-4">
            <thead>
              <tr>
                <th></th>
                <th>Currency Futures</th>
                <th>Currency Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>Flat ₹20 or 0.03% whichever is lower</td>
                <td>Flat ₹20 per executed order</td>
              </tr>
               <tr>
                <td>STT/CTT</td>
                <td>No STT</td>
                <td>No STT</td>
              </tr>
            </tbody>
          </table>
        );
      case "commodity":
        return (
          <table className="table table-bordered mt-4">
            <thead>
              <tr>
                <th></th>
                <th>Commodity Futures</th>
                <th>Commodity Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>Flat ₹20 or 0.03% whichever is lower</td>
                <td>Flat ₹20 per executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>0.01% on the sell side (Non-Agri)</td>
                <td>0.05% on the sell side</td>
              </tr>
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container py-5">
      <div className="charges-tabs d-flex justify-content-center border-bottom">
        <button
          className={`nav-link ${activeTab === "equity" ? "active" : ""}`}
          onClick={() => setActiveTab("equity")}
        >
          Equity
        </button>
        <button
          className={`nav-link ${activeTab === "currency" ? "active" : ""}`}
          onClick={() => setActiveTab("currency")}
        >
          Currency
        </button>
        <button
          className={`nav-link ${activeTab === "commodity" ? "active" : ""}`}
          onClick={() => setActiveTab("commodity")}
        >
          Commodity
        </button>
      </div>
      {renderContent()}
    </div>
  );
}

export default ChargesTable;
