import React from "react";
import { useEffect } from "react";

export function Donate(props) {
  console.log(props.donationComments);
  return (
    <div className="Donate">
      <div>
        <div className="hands-container">
          <h1 className="donate-header-font do-something">DO SOMETHING</h1>

          <h1 className="donate-header-font">INCREDIBLE </h1>
          <img
            src="https://i.ibb.co/fDNHFht/My-project-2.png"
            alt="My-project-2"
            border="0"
            className="hands-image"
          />

          <h1>
            {" "}
            <a href="https://www2.heart.org/site/TR/Marathon/MWA-MidWestAffiliate?px=26207527&pg=personal&fr_id=8944">
              Donate Here
            </a>
          </h1>
          <p className="donate_pg">
            I am incredibly grateful for the generosity shown so far, and your
            support has been fundamental in fueling my fundraising efforts for
            the American Heart Association. But there&apos;s still more to do.
          </p>
          <p className="donate_pg">
            Together, we can work to eradicate heart disease. Your donation, no
            matter the amount, will contribute to our progress. To make a
            donation and keep track of our collective impact,{" "}
            <a href="https://www2.heart.org/site/TR/Marathon/MWA-MidWestAffiliate?px=26207527&pg=personal&fr_id=8944">
              visit this page
            </a>
            .
          </p>
        </div>
      </div>
      <div id="countdown-wrap">
        <div id="goal">$1,250</div>
        <div id="glass">
          <div id="progress"></div>
        </div>
        <div className="goal-stat">
          <span className="goal-number">22%</span>
          <span className="goal-label">Funded</span>
        </div>
        <div className="goal-stat">
          <span className="goal-number">$285</span>
          <span className="goal-label">Raised</span>
        </div>
      </div>

      {props.donationComments.map((comment) => (
        <div key={comment.id}>
          <h2>{comment.body}</h2>
        </div>
      ))}

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
