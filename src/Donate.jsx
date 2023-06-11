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
        <h1 className="donate-header-font do-something">DO SOMETHING</h1>
        <div className="incredible-now">
          <h1 className="donate-header-font">INCREDIBLE NOW</h1>
        </div>

        <a href="https://imgbb.com/">
          <img
            src="https://i.ibb.co/F8009Lj/hearts-hands.png"
            alt="hearts-hands"
            border="0"
          />
        </a>
        <h1>My Donation Progress</h1>
        <p>
          The donations I&apos;ve received are a great start! I&apos;d love for
          you to donate even $10 to help me get to my goal.
        </p>
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {props.donationComments.map((comment) => (
        <div key={comment.id}>
          <h2>{comment.body}</h2>
        </div>
      ))}

      <h1>New comment</h1>
      <form>
        <div>
          body: <input name="body" type="text" />
        </div>
        <button type="submit">Create comment</button>
      </form>
    </div>
  );
}
