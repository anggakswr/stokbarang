import React from "react";

export default function Notifications({ notifications }) {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map((item) => (
                <li key={item.id}>
                  <span className="pink-text">{item.cabang} </span>
                  <span>{item.content} </span>
                  <span className="grey-text date-notifications">
                    {item.time.toDate().toDateString()}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
