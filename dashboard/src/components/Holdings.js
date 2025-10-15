import React, { useState, useEffect } from "react";
import axios from "axios"; // Removed the unused '{ all }'
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price (LTP)",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(53, 162, 235, 0.5)", // Changed to a nice blue color
      },
    ],
  };

  // Helper function to calculate totals
  const totalInvestment = allHoldings.reduce((acc, stock) => acc + (stock.avg * stock.qty), 0);
  const currentValue = allHoldings.reduce((acc, stock) => acc + (stock.price * stock.qty), 0);
  const totalPandL = currentValue - totalInvestment;
  const pandlPercentage = totalInvestment === 0 ? 0 : (totalPandL / totalInvestment) * 100;


  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const pAndL = curValue - stock.avg * stock.qty;
              const isProfit = pAndL >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.day.startsWith("+") ? "profit" : "loss";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {pAndL.toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row holdings-summary">
        <div className="col">
          <h5>{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={totalPandL >= 0 ? "profit" : "loss"}>
            {totalPandL.toFixed(2)} ({pandlPercentage.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
      
      <div style={{marginTop: "50px", padding: "20px"}}>
        <VerticalGraph data={data} />
      </div>
    </>
  );
};

export default Holdings;