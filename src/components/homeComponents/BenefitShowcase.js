import React from "react";
import asumsi from "../../img/asumsi.png";
import hijub from "../../img/hijub.png";
import investree from "../../img/investree.png";
import loket from "../../img/loket.png";
import mcpayment from "../../img/mcpayment.png";
import mekari from "../../img/mekari.png";
import rebelworks from "../../img/rebelworks.png";
import sinarmas from "../../img/sinarmas.png";
import sirclo from "../../img/sirclo.png";
import tanihub from "../../img/tanihub.png";
import wehelpyou from "../../img/wehelpyou.png";
import xendit from "../../img/xendit.png";

const BenefitShowcase = () => {
  return (
    <section
      className="bg-light text-dark      
        benefit-showcase
        text-center 
        p-5"
    >
      <div className="container partner">
        <div>
          <h2 className="my-3">500+ Lulusan Void8 Telah Bekerja di</h2>
        </div>
        <div className="row g-3 m-2 px-5 align-items-center justify-content-center">
          <div className="col-md-2 col-12">
            <img className="img-fluid " src={asumsi} alt=".." />
          </div>
          <div className="col-md-2 col-12">
            <img className="img-fluid " src={hijub} alt=".." />
          </div>
          <div className="col-md-2 col-12">
            <img className="img-fluid " src={investree} alt=".." />
          </div>
          <div className="col-md-2 col-12">
            <img className="img-fluid " src={loket} alt=".." />
          </div>
          <div className="col-md-2 col-12">
            <img className="img-fluid " src={mcpayment} alt=".." />
          </div>
          <div className="col-md-2 col-12">
            <img className="img-fluid " src={mekari} alt=".." />
          </div>
          <div className="col-md-2 col-12">
            <img className="img-fluid " src={rebelworks} alt=".." />
          </div>
          <div className="col-md-2 col-12">
            <img className="img-fluid " src={sinarmas} alt=".." />
          </div>
          <div className="col-md-2 col-12">
            <img className="img-fluid " src={sirclo} alt=".." />
          </div>
          <div className="col-md-2 col-12">
            <img className="img-fluid " src={tanihub} alt=".." />
          </div>
          <div className="col-md-2 col-12">
            <img className="img-fluid " src={wehelpyou} alt=".." />
          </div>
          <div className="col-md-2 col-12">
            <img className="img-fluid " src={xendit} alt=".." />
          </div>
        </div>
      </div>

      <hr className="my-5" />

      <div className="container benefit">
        <h2 className="mt-5 mb-3">Keunggulan Belajar Di Void8</h2>
        <div className="row g-3 m-2 px-5 align-items-center justify-content-center">
          <div className="col-md-6 row  ">
            <div className="col-md-3">
              <i className="bi-laptop" role="img"></i>
            </div>
            <div className="col-md-9 text-md-start">
              <h3>Coding Bootcamp</h3>
              <p>
                Siswa akan difokuskan untuk belajar menjadi Full Stack Developer
                atau Data Scientist di program Full Time.
              </p>
            </div>
          </div>
          <div className="col-md-6 row ">
            <div className="col-md-3">
              <i className="bi-lightbulb"></i>
            </div>
            <div className="col-md-9 text-md-start">
              <h3>Growth Mindset</h3>
              <p>
                Siswa kami selalu dibimbing dan dituntut memiliki Growth Mindset
                yang berguna untuk peningkatan karir di masa depan.
              </p>
            </div>
          </div>
          <div className="col-md-6 row ">
            <div className="col-md-3">
              <i className="bi-puzzle" role="img"></i>
            </div>
            <div className="col-md-9 text-md-start">
              <h3>Relevan Skillset</h3>
              <p>
                Kurikulum kami dibuat dan selalu disesuaikan dengan kebutuhan
                industri teknologi masa kini.
              </p>
            </div>
          </div>
          <div className="col-md-6 row ">
            <div className="col-md-3">
              <i className="bi-diagram-3" role="img"></i>
            </div>
            <div className="col-md-9 text-md-start">
              <h3>Coding Bootcamp</h3>
              <p>
                Siswa akan difokuskan untuk belajar menjadi Full Stack Developer
                atau Data Scientist di program Full Time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitShowcase;
