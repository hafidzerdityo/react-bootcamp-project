import React from "react";

const ImmersiveProgram = () => {
  return (
    <>
      <div className="bg-light p-5">
        <div className="container">
          <div>
            <h3
              className="text-center"
              style={{ fontWeight: "700", marginBottom: "30px" }}
            >
              Program Full Stack Immersive Void8
            </h3>
          </div>

          <div>
            <div className="row px-5">
              <div
                className="col-md-3 "
                style={{ borderLeft: "2px solid green" }}
              >
                <i
                  className="bi-clipboard-check"
                  style={{ fontSize: "20px" }}
                ></i>
                <h5 style={{ fontWeight: "700", marginTop: "10px" }}>
                  Kurikulum Terupdate
                </h5>
                <p>
                  Kurikulum kami selalu diupdate sesuai dengan perkembangan dan
                  kebutuhan di industri terkini.
                </p>
              </div>
              <div
                className="col-md-3"
                style={{ borderLeft: "2px solid green" }}
              >
                <i className="bi-people" style={{ fontSize: "20px" }}></i>
                <h5 style={{ fontWeight: "700", marginTop: "10px" }}>
                  250+ Hiring Partners
                </h5>
                <p>
                  Kami memiliki lebih dari 250 perusahaan rekanan yang siap
                  merekrut lulusan kami di setiap bulannya.
                </p>
              </div>
              <div
                className="col-md-3 "
                style={{ borderLeft: "2px solid green" }}
              >
                <i className="bi-lightbulb" style={{ fontSize: "20px" }}></i>
                <h5 style={{ fontWeight: "700", marginTop: "10px" }}>
                  Growth Mindset
                </h5>
                <p>
                  Kami membentuk setiap siswa kami untuk memiliki Growth Mindset
                  yang berguna untuk perkembangan karir di masa depan.
                </p>
              </div>
              <div
                className="col-md-3 "
                style={{ borderLeft: "2px solid green" }}
              >
                <i className="bi-people-check" style={{ fontSize: "20px" }}></i>
                <h5 style={{ fontWeight: "700", marginTop: "10px" }}>
                  Instruktur Profesional
                </h5>
                <p>
                  Siswa akan dibimbing oleh instruktur berpengalaman selama
                  mengikuti proses pembelajaran.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImmersiveProgram;
