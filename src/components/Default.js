import React from "react";

const Default = () => {
  return (
    <div className="bg-dark text-light">
      <div className="container ">
        <div
          className="row w-100 justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <h1 className="col">
            I'm sorry, you just entered the wrong URL.
            <span>
              <i className="bi-emoji-neutral mx-3"></i>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Default;
