import React from "react";

const cardData = [
  {
    title: "Total Orders",
    value: 862,
    timestamp: 1754476592000,
  },
  {
    title: "Ordered Items This Week",
    value: 156,
    timestamp: 1754641532000,
  },
  {
    title: "Return Orders",
    value: 12,
    timestamp: 1754562992000,
  },
  {
    title: "Fulfilled Orders This Week",
    value: 124,
    timestamp: 1754627132000,
  },
];

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const DashboardCard1 = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "40px",
        width: "680px",
        height: "296px",
        margin: "40px auto",
        flow: "Horizontal",
        paddingLeft: "30px",
        paddingBottom: "280px",
      }}
    >
      {cardData.map((card, index) => (
        <div
          key={index}
          style={{
            border: "2px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "12px", alignItems:"flex-start"}}>
            {card.title}
          </h3>
          <h1 style={{ fontSize: "32px", paddingRight:"200px",margin: "10px 0" }}>{card.value}</h1>
          <p style={{ fontSize: "12px", color: "black", paddingLeft: "100px" }}>
            as of {formatDate(card.timestamp)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCard1;
