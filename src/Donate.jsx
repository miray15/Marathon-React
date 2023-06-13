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
          <span className="goal-number">1%</span>
          <span className="goal-label">Funded</span>
        </div>
        <div className="goal-stat">
          <span className="goal-number">$35</span>
          <span className="goal-label">Raised</span>
        </div>
      </div>

      {props.donationComments.map((comment) => (
        <div key={comment.id}>
          <h2>{comment.body}</h2>
        </div>
      ))}

      <h1 className="donation_comments">Why I Want to Make a Difference</h1>
      <p className="donate-pg">
        {" "}
        Share your reasons for donating in this text box below.
      </p>
      <div className="donation-section">
        {/* <form className="donation_comments"> */}
        <div className="cursor">
          <input type="text-area" className="donation_comments" />
          <i></i>
        </div>

        <button type="submit" className="donation_button">
          Create comment
        </button>

        {/* <div className="donation_comments">
            <textarea rows="4" cols="50">
              Share your reasons for donating
            </textarea>
          </div> */}
        {/* </form> */}
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
