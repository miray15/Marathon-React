import React from "react";
import { useEffect } from "react";

export function Donate(props) {
  console.log(props.donationComments);
  return (
    <div className="Donate">
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/family"
                  >
                    Family
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/mystory"
                  >
                    My Story
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="https://www2.heart.org/site/TR/Marathon/MWA-MidWestAffiliate?px=26207527&pg=personal&fr_id=8944"
                  >
                    Make a Donation
                  </a>
                </li>
                <li className="nav-item dropdown"></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="hands-container">
          <h1 className="donate-header-font do-something">DO SOMETHING</h1>

          <h1 className="donate-header-font">INCREDIBLE </h1>
          <img
            src="https://i.ibb.co/fDNHFht/My-project-2.png"
            alt="My-project-2"
            border="0"
            className="hands-image"
          />

          <h1>My Donation Progress</h1>
          <p className="donate_pg">
            I am incredibly grateful for the generosity shown so far, and your
            support has been fundamental in fueling my fundraising efforts for
            the American Heart Association. However, there&apos;s still more to
            accomplish.
          </p>
          <p className="donate_pg">
            Every contribution, regardless of its size, has the potential to
            make a significant impact in the fight against heart disease. Even a
            $10 donation from you can help save lives and support groundbreaking
            research, education, and advocacy initiatives led by the American
            Heart Association. By making a contribution, you become an
            invaluable partner in the fight against heart disease, a condition
            that took my parents from me. Your support will enable the American
            Heart Association to continue its vital work in promoting heart
            health, preventing cardiovascular diseases, and improving the lives
            of those affected.
          </p>
          <p className="donate_pg">
            Together, we can create a world where heart disease is a thing of
            the past. Your donation, no matter the amount, will contribute to
            our collective progress. Let's track our donation progress and
            celebrate each step forward on the path to a healthier future.
          </p>
          <p className="donate_pg">
            To make a donation and keep track of our collective impact, please{" "}
            <a href="https://www2.heart.org/site/TR/Marathon/MWA-MidWestAffiliate?px=26207527&pg=personal&fr_id=8944">
              visit this page
            </a>
            .
          </p>
          <p className="donate_pg">
            Your involvement with the American Heart Association and your
            contribution will help drive positive change and save lives. Thank
            you for joining me in supporting the American Heart Association and
            the fight against heart disease. Together, we can make a lasting
            difference in the lives of individuals and families affected by this
            devastating condition. Let's empower hearts and save lives! Scroll
            down for donation progress.
          </p>
        </div>
      </div>
      <div id="countdown-wrap">
        <div id="goal">$1,250</div>
        <div id="glass">
          <div id="progress"></div>
        </div>
        <div className="goal-stat">
          <span className="goal-number">1%</span>
          <span className="goal-label">Funded</span>
        </div>
        <div className="goal-stat">
          <span className="goal-number">$35</span>
          <span className="goal-label">Raised</span>
        </div>
        <div className="goal-stat">
          <span className="goal-number">1</span>
          <span className="goal-label">Sponsors</span>
        </div>
      </div>

      {props.donationComments.map((comment) => (
        <div key={comment.id}>
          <h2>{comment.body}</h2>
        </div>
      ))}

      <>
        <h1 className="donation_comments">Why I Want to Make a Difference</h1>
        <form className="donation_comments">
          <div className="donation_comments">
            <textarea rows="4" cols="50">
              Share your reasons for donating
            </textarea>
          </div>
          <button type="submit" className="donation_button">
            Create comment
          </button>
        </form>
      </>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
