import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("red");
  const [selectedLight, setSelectedLight] = useState("red");
  const [automaticLight, setAutomaticLight] = useState(false);

  const change = () => {
    if (automaticLight) {
      if (selectedLight === "red") {
        setSelectedLight("yellow");
      } else if (selectedLight === "yellow") {
        setSelectedLight("green");
      } else if (selectedLight === "green") {
        setSelectedLight("purple");
      } else {
        setSelectedLight("red");
      }
    }
  };

  setTimeout(change, 2000);

  return (
    <>
      <div className="wrapper">
        <div
          className={`red-light ${selectedLight === "red" ? "blurred" : ""}`}
          onClick={() => {
            setSelectedLight("red");
          }}
        ></div>
        <div
          className={`yellow-light ${
            selectedLight === "yellow" ? "blurred" : ""
          }`}
          onClick={() => {
            setSelectedLight("yellow");
          }}
        ></div>
        <div
          className={`green-light ${
            selectedLight === "green" ? "blurred" : ""
          }`}
          onClick={() => {
            setSelectedLight("green");
          }}
        ></div>
        <div
          className={`purple-light ${
            selectedLight === "purple" ? "blurred" : ""
          }`}
          onClick={() => {
            setSelectedLight("purple");
          }}
        ></div>
      </div>

      <div style={{ marginLeft: "470px" }}>
        <button
          onClick={() => {
            setAutomaticLight(!automaticLight);
          }}
        >
          {automaticLight ? "Stop Automatic" : "Automatic"}
        </button>

        <button
          onClick={() => {
            setSelectedLight("purple");
          }}
        >
          Purple
        </button>
      </div>
    </>
  );
};

export default Home;
