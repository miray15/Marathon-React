export function Donate() {
  return (
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
        The donations I've received are a great start! I'd love for you to
        donate even $10 to help me get to my goal. Every dollar counts!
      </p>
      <div>
        <img src="https://miray15.github.io/fundraising-thermometer%20(3).png" />
        <p>
          <a href="https://www2.heart.org/site/TR/Marathon/MWA-MidWestAffiliate?px=26207527&pg=personal&fr_id=8944">
            Donate at this link!
          </a>
        </p>
      </div>
    </div>
  );
}
