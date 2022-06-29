import React from "react";
import "./KolListing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const KolListing = () => {
  return (
    <>
      <div className="row justify-content-between py-4">
        <div className="col-lg-3 py-2">
          <div className="kol-user-img">
            <img src="./Images/4.jpg" />
          </div>
        </div>
        <div className="col-lg-9 border-bottom  py-2">
          <div className="row justify-content-between">
            <div className="col-lg-9">
              <h3 className="text-bold">
                Sara Jammal
                <sup>
                  <i className="bi bi-patch-check-fill heading-icon"></i>
                </sup>
              </h3>
              <p>( Lorm ipsum dummy )</p>
            </div>
            <div className="col-lg-3">
              <p className="text-right">
                <i className="bi bi-geo-alt mx-1 geo-icon"></i>
                <span>Mohali Punjab,india</span>
                <span className="book-icon">
                  <i className="bi bi-bookmark mx-1 bookmark-icon"></i>
                </span>
              </p>
            </div>
          </div>

          <div className="row py-1">
            <div className="col-lg-12 d-flex">
              <h5 className="text-bold">
                Languages: <span className="text-normal">English</span>
              </h5>
              <ul className="social-count-list">
                <li className="">
                  <span></span>
                  <i className="bi bi-instagram"></i> 20k
                </li>
                <li className="">
                  <span></span>
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="facebook-icon"
                  />
                  20k
                </li>
                <li className="">
                  <span></span>
                  <i className="bi bi-youtube youtube-icon"></i> 20k
                </li>
                <li className="">
                  <span></span>
                  <i className="bi bi-tiktok"></i> 20k
                </li>
              </ul>
            </div>
          </div>

          <div className="row py-1">
            <div className="col-lg-12">
              <h5 className="text-bold">Bio</h5>
              <p className="kol-bio">
                The Lorem ipsum text is derived from sections and of Cicero's De
                finibus bonorum et malorum The physical source may have been the
                Loeb Classical Library edition of De finibus, where the Latin
                text, presented on the left-hand pages, breaks off on page with
                Neque porro quisquam est qui do- and continues on page with
                lorem ipsum , suggesting that the galley type of that page was
                mixed.
              </p>
            </div>
          </div>

          <div className="row py-1">
            <div className="col-lg-12 align-items-center d-flex">
              <h5 className="text-bold">Team Member</h5>
              <ul className="team-list">
                <li className="rounded-circle">
                  <img src="./Images/4.jpg" />
                </li>
                <li className="rounded-circle">
                  <img src="./Images/5.jpg" />
                </li>
                <li className="rounded-circle">
                  <img src="./Images/6.jpg" />
                </li>
                <li className="rounded-circle">+10</li>
              </ul>
              <div className="ml-auto more-button">
                <Link to="">Show More Detail</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-between py-4">
        <div className="col-lg-3 py-2">
          <div className="kol-user-img">
            <img src="./Images/5.jpg" />
          </div>
        </div>
        <div className="col-lg-9 border-bottom  py-2">
          <div className="row justify-content-between">
            <div className="col-lg-9">
              <h3 className="text-bold">
                Justin Lee
                <sup>
                  <i className="bi bi-patch-check-fill heading-icon"></i>
                </sup>
              </h3>
              <p>( Lorm ipsum dummy )</p>
            </div>
            <div className="col-lg-3">
              <p className="text-right">
                <i className="bi bi-geo-alt mx-1 geo-icon"></i>
                <span>Mohali Punjab,india</span>
                <span className="book-icon">
                  <i className="bi bi-bookmark mx-1 bookmark-icon"></i>
                </span>
              </p>
            </div>
          </div>

          <div className="row py-1">
            <div className="col-lg-12 d-flex">
              <h5 className="text-bold">
                Languages: <span className="text-normal">English</span>
              </h5>
              <ul className="social-count-list">
                <li className="">
                  <span></span>
                  <i className="bi bi-instagram"></i> 20k
                </li>
                <li className="">
                  <span></span>
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="facebook-icon"
                  />
                  20k
                </li>
                <li className="">
                  <span></span>
                  <i className="bi bi-youtube youtube-icon"></i> 20k
                </li>
                <li className="">
                  <span></span>
                  <i className="bi bi-tiktok"></i> 20k
                </li>
              </ul>
            </div>
          </div>

          <div className="row py-1">
            <div className="col-lg-12">
              <h5 className="text-bold">Bio</h5>
              <p>
                The Lorem ipsum text is derived from sections and of Cicero's De
                finibus bonorum et malorum The physical source may have been the
                Loeb Classical Library edition of De finibus, where the Latin
                text, presented on the left-hand pages, breaks off on page with
                Neque porro quisquam est qui do- and continues on page with
                lorem ipsum , suggesting that the galley type of that page was
                mixed.
              </p>
            </div>
          </div>

          <div className="row py-1">
            <div className="col-lg-12 align-items-center d-flex">
              <h5 className="text-bold">Team Member</h5>
              <ul className="team-list">
                <li className="rounded-circle">
                  <img src="./Images/4.jpg" />
                </li>
                <li className="rounded-circle">
                  <img src="./Images/5.jpg" />
                </li>
                <li className="rounded-circle">
                  <img src="./Images/6.jpg" />
                </li>
                <li className="rounded-circle">+10</li>
              </ul>
              <div className="ml-auto more-button">
                <Link to="">Show More Detail</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-between py-4">
        <div className="col-lg-3 py-2">
          <div className="kol-user-img">
            <img src="./Images/6.jpg" />
          </div>
        </div>
        <div className="col-lg-9 border-bottom  py-2">
          <div className="row justify-content-between">
            <div className="col-lg-9">
              <h3 className="text-bold">
                Sophia
                <sup>
                  <i className="bi bi-patch-check-fill heading-icon"></i>
                </sup>
              </h3>
              <p>( Lorm ipsum dummy )</p>
            </div>
            <div className="col-lg-3">
              <p className="text-right">
                <i className="bi bi-geo-alt mx-1 geo-icon"></i>
                <span>Mohali Punjab,india</span>
                <span className="book-icon">
                  <i className="bi bi-bookmark mx-1 bookmark-icon"></i>
                </span>
              </p>
            </div>
          </div>

          <div className="row py-1">
            <div className="col-lg-12 d-flex">
              <h5 className="text-bold">
                Languages: <span className="text-normal">English</span>
              </h5>
              <ul className="social-count-list">
                <li className="">
                  <span></span>
                  <i className="bi bi-instagram"></i> 20k
                </li>
                <li className="">
                  <span></span>
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="facebook-icon"
                  />
                  20k
                </li>
                <li className="">
                  <span></span>
                  <i className="bi bi-youtube youtube-icon"></i> 20k
                </li>
                <li className="">
                  <span></span>
                  <i className="bi bi-tiktok"></i> 20k
                </li>
              </ul>
            </div>
          </div>

          <div className="row py-1">
            <div className="col-lg-12">
              <h5 className="text-bold">Bio</h5>
              <p>
                The Lorem ipsum text is derived from sections and of Cicero's De
                finibus bonorum et malorum The physical source may have been the
                Loeb Classical Library edition of De finibus, where the Latin
                text, presented on the left-hand pages, breaks off on page with
                Neque porro quisquam est qui do- and continues on page with
                lorem ipsum , suggesting that the galley type of that page was
                mixed.
              </p>
            </div>
          </div>

          <div className="row py-1">
            <div className="col-lg-12 align-items-center d-flex">
              <h5 className="text-bold">Team Member</h5>
              <ul className="team-list">
                <li className="rounded-circle">
                  <img src="./Images/4.jpg" />
                </li>
                <li className="rounded-circle">
                  <img src="./Images/5.jpg" />
                </li>
                <li className="rounded-circle">
                  <img src="./Images/6.jpg" />
                </li>
                <li className="rounded-circle">+10</li>
              </ul>
              <div className="ml-auto more-button">
                <Link to="">Show More Detail</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KolListing;