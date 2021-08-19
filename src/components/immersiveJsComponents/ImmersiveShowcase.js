import React from "react";
import immersiveShowcasePerson from "../../img/immersiveShowcasePerson.jpg";
const ImmersiveShowcase = () => {
  return (
    <>
      <section className="showcase bg-light text-dark">
        <div className="container px-5 ">
          <div
            className="my-3"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h5 className="mx-2">Full Stack Javascript Immersive</h5>
          </div>
          <hr />

          <div className="row">
            <div className="col-md-6 col-12 row align-items-center">
              <div className="col-md">
                <h1>Full Stack Javascript Immersive</h1>
                <p>
                  Karir melesat dalam 16 minggu dengan menjadi Full Stack
                  Developer. Dapatkan pekerjaan di 350 hiring partner setelah
                  lulus.
                </p>
                <div className="row">
                  <button
                    type="button"
                    className="my-btn btn btn-success col-md-auto m-auto my-1"
                  >
                    SAYA SIAP BELAJAR FULL STACK IMMVERSIVE
                  </button>
                  <button
                    type=" button"
                    className="my-btn btn btn-success col-md-auto m-auto my-1"
                  >
                    HUBUNGI KAMI
                  </button>
                </div>
              </div>
            </div>
            <div className="col  ">
              <img
                src={immersiveShowcasePerson}
                alt=".."
                className="img-fuid d-md-block d-none"
                style={{ borderRadius: "13px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImmersiveShowcase;
