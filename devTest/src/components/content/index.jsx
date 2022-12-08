import React, { useEffect, useState } from "react";

export const Content = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(
      "wss://ws.bitmex.com/realtime?subscribe=instrument,orderBookL2_25:XBTUSD"
    );

    ws.onmessage = (e) => {
      const { data } = JSON.parse(e.data);
      setInfo([...data]);
    };

    // ws.close();
  }, []);
  return (
    <div>
      <div className="container">
        <table className="order_book">
          <tr>
            <th>Orders Book</th>
          </tr>
          {info.map((i) => (
            <tr key={i.id} className="fila">
              <td>{i.side}</td>
              <td>{i.size}</td>
              <td>{i.symbol}</td>
              <td>{i.timestamp}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
