export function Donate() {
  return (
    <div>
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
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="mystory.html">
                    My race story
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www2.heart.org/site/TR/Marathon/MWA-MidWestAffiliate?px=26207527&pg=personal&fr_id=8944"
                  >
                    Make a donation
                  </a>
                </li>
                <li className="nav-item dropdown"></li>
              </ul>
            </div>
          </div>
        </nav>

        <h1>My Donation Progress</h1>

        <p>
          The donations I&apos;ve received are a great start! I&apos;d love for
          you to donate even $10 to help me get to my goal. Every dollar counts!
        </p>
      </div>
      <div id="countdown-wrap">
        <div id="goal">$1,250</div>
        <div id="glass">
          <div id="progress"></div>
        </div>
        <div className="goal-stat">
          <span className="goal-number">16%</span>
          <span className="goal-label">Funded</span>
        </div>
        <div className="goal-stat">
          <span className="goal-number">$1,640</span>
          <span className="goal-label">Raised</span>
        </div>
        <div className="goal-stat">
          <span className="goal-number">
            <div id="countdown"></div>
          </span>
          <span className="goal-label">Days to Go</span>
        </div>
        <div className="goal-stat">
          <span className="goal-number">38</span>
          <span className="goal-label">Sponsors</span>
        </div>
      </div>
    </div>
  );
}
