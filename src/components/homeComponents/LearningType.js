import React from "react";
import { Link } from "react-router-dom";
import learning_one from "../../img/learning_one.jpeg";
import learning_two from "../../img/learning_two.jpeg";
import learning_three from "../../img/learning_three.jpeg";

const LearningType = () => {
  return (
    <section className="bg-void text-light learning-type text-center">
      <div className="container p-5">
        <h2 className="mb-4">Pilih Jalur Belajar Kamu</h2>

        {/* Card */}
        <div className="row gx-4 gy-md-0 gy-3">
          <div className="col-md">
            <div className="card bg-light text-dark">
              <img src={learning_two} alt="" className="img-fluid" />
              <div className="card-body">
                <i className="bi-terminal-fill"></i>
                <div className="card-control-1">
                  <h3 className="card-title">Bootcamp</h3>
                </div>
                <div className="card-control-2">
                  <p className="card-text">
                    Program intensif untuk belajar menjadi Full Stack Developer
                    atau Data Scientist.
                  </p>
                </div>
                <Link to="/" className="btn bg-void text-light">
                  JOIN BOOTCAMP
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-light text-dark">
              <img src={learning_three} alt=".." className="img-fluid" />
              <div className="card-body">
                <i className="bi-stickies-fill"></i>
                <div className="card-control-1">
                  <h3 className="card-title">Professional Development</h3>
                </div>

                <div className="card-control-2">
                  <p className="card-text">
                    Program paruh waktu untuk meningkatkan skill di bidang
                    digital teknologi.
                  </p>
                </div>

                <Link to="/" className="btn bg-void text-light">
                  JOIN PROFESSIONAL DEVELOPMENT
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-light text-dark">
              <img src={learning_one} alt="" className="img-fluid " />
              <div className="card-icon-control"></div>
              <div className="card-body">
                <i className="bi-rss-fill"></i>
                <div className="card-control-1">
                  <h3 className="card-title">Corporate Program</h3>
                </div>
                <div className="card-control-2">
                  <p className="card-text">
                    Program pelatihan di bidang digital teknologi khusus untuk
                    perusahaan.
                  </p>
                </div>
                <Link to="/" className="btn bg-void text-light">
                  JOIN CORPORATE PROGRAM
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningType;
