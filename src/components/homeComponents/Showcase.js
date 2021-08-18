import React from "react";
import showcase from "../../img/showcase.svg";
const Showcase = () => {
  return (
    <>
      <section
        className="
         showcase
        bg-dark
        text-light
        text-center text-md-start
        p-5
        p-lg-0
        pt-lg-5
      "
      >
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <div>
              <h1>
                Bangun Karir Bersama <span className="text-primary">Void8</span>
              </h1>
              <p className="lead">
                This is not a real bootcamp, this website is created for
                educational purposes
              </p>
              <button type="button" className="btn btn-primary btn-lg">
                Daftar Sekarang!
              </button>
            </div>
            <img className="img-fluid w-50 mt-5 " src={showcase} alt=".." />
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
