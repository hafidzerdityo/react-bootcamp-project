import React from "react";

const Kurikulum = () => {
  return (
    <>
      <section
        className="kurikulum text-light"
        style={{ paddingBottom: "30px" }}
      >
        <div className="container p-5">
          <h3
            className="text-center"
            style={{ fontWeight: "700", marginBottom: "10px" }}
          >
            Full Stack Javascript Immersive
          </h3>
          <p className="small-container text-center">
            Kami memiliki kurikulum yang telah teruji di perusahaan-perusahaan
            ternama dan empat pilar utama dalam program ini.
          </p>
        </div>

        <div className="medium-container px-4 text-dark">
          <div className="row g-3" style={{ marginBottom: "40px" }}>
            <div className="col-md-4">
              <div
                className="p-3 border bg-light"
                style={{ borderRadius: "7.5px" }}
              >
                <div className="mb-3">
                  <i className="bi-code" style={{ fontSize: "30px" }}></i>
                </div>
                <div>
                  <div className="card-control-1">
                    <h3 style={{ fontWeight: "700" }}>
                      Fundamental Programming
                    </h3>
                  </div>
                  <p>
                    Siswa akan mempelajari pola pikir seorang programmer untuk
                    menjadi programmer andal.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="p-3 border bg-light"
                style={{ borderRadius: "7.5px" }}
              >
                <div className="mb-3">
                  <i
                    className="bi-window-sidebar"
                    style={{ fontSize: "30px" }}
                  ></i>
                </div>
                <div>
                  <div className="card-control-1">
                    <h3 style={{ fontWeight: "700" }}>Application Structure</h3>
                  </div>
                  <p>
                    Siswa akan mempelajari tentang struktur dalam membuat sebuah
                    aplikasi.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="p-3 border bg-light"
                style={{ borderRadius: "7.5px" }}
              >
                <div className="mb-3">
                  <i className="bi-stack" style={{ fontSize: "30px" }}></i>
                </div>
                <div>
                  <div className="card-control-1">
                    <h3 style={{ fontWeight: "700" }}>Pengenalan Database</h3>
                  </div>
                  <p>
                    Siswa akan mempelajari cara membuat database untuk membuat
                    aplikasi.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="p-3 border bg-light"
                style={{ borderRadius: "7.5px" }}
              >
                <div className="mb-3">
                  <i className="bi-file-code" style={{ fontSize: "30px" }}></i>
                </div>
                <div>
                  <div className="card-control-1">
                    <h3 style={{ fontWeight: "700" }}>React & React Native</h3>
                  </div>
                  <p>
                    Siswa akan mempelajari Library dan Framework terkenal dari
                    JavaScript untuk membuat aplikasi di Android & iOS.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="p-3 border bg-light"
                style={{ borderRadius: "7.5px" }}
              >
                <div className="mb-3">
                  <i className="bi-intersect" style={{ fontSize: "30px" }}></i>
                </div>
                <div>
                  <div className="card-control-1">
                    <h3 style={{ fontWeight: "700" }}>Membuat MVP</h3>
                  </div>
                  <p>
                    Siswa akan diminta dan akan dibimbing untuk membangun MVP
                    (Minimum Viable Product) untuk portfolio.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="p-3 border bg-light"
                style={{ borderRadius: "7.5px" }}
              >
                <div className="mb-3">
                  <i className="bi-briefcase" style={{ fontSize: "30px" }}></i>
                </div>
                <div>
                  <div className="card-control-1">
                    <h3 style={{ fontWeight: "700" }}>Final Project</h3>
                  </div>
                  <p>
                    Di akhir program siswa akan membuat final project yang akan
                    dipresentasikan di depan Hiring Partner Void8.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ color: "#fff" }} />
          <div className="row">
            <div
              className="col row justify-content-between align-items-center"
              style={{ height: "100px" }}
            >
              <p style={{ color: "#fff" }} className="col-auto ">
                Lebih lengkapnya, kamu bisa download silabus Full Stack
                Javascript Immersive:
              </p>
              <button className="col-auto btn btn-primary">
                DOWNLAOD SILABUS
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kurikulum;
