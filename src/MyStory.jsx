export function MyStory() {
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
                <a className="nav-link" href="donate_2.html">
                  Donation Progress
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
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-carousel">
        <h1>My Race Story</h1>
        <div className="carousel-size">
          <div
            id="race_carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#race_carousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#race_carousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#race_carousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://miray15.github.io/NYE-race-400px.png"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://miray15.github.io/hotcoco_400px.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#race_carousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#race_carousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <h2 className="donate-subtitle">Lifestyle changes</h2>
      <p className="mystory">
        When I returned from China in 2017, I realized I needed a sport to
        maintain my fitness and healthy habits. Running is easily one of the
        most accessibles sports on the planet! Grab a pair of shoes and run! As
        I got more competitive, I invested in a pair of shoes that matched the
        needs of my feet, and since then have been updating them every 300
        miles. I also began continued biking for my{" "}
      </p>
      <p>
        My mother died of complications from diabetes, so in the last few years
        I've been paying close attention to my A1C. Realizing that making
        lifestyle changes later in life would be more challenging than making
        them now, I started following the "Mediterranean Diet": eliminating all
        meat except for seafood, and maintaining a strong intake of nuts and
        seeds
      </p>
      <p>
        This proved to be successful in lowering my A1C! I am in the lowest
        bracket of the average range!
      </p>
    </div>
  );
}
