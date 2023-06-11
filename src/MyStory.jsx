import React, { useState } from "react";

export function MyStory(props) {
  console.log(props.pictureComments);
  const [likeCount, setLikeCount] = useState(0);

  const handleButtonClick = () => {
    setLikeCount(likeCount + 1);
  };

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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/donate">
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
              <li className="nav-item">
                <a className="nav-link" href="/mystory">
                  My Story
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/family">
                  Mom & Dad
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>My Race Story</h1>
      {/* <div className="image-container">
        <img
          src="https://i.ibb.co/2FpbZkN/WWUR2439.jpg"
          style={{ marginRight: "10px", height: "100%", objectFit: "cover" }}
        />
        <div className="text-container">
          <p>
            When I returned from China in 2017, I realized I needed a sport to
            maintain my fitness and healthy habits. Running is easily one of the
            most accessible sports on the planet! Grab a pair of shoes and run!
            As I got more competitive, I invested in a pair of shoes that
            matched the needs of my feet, and since then have been updating them
            every 300 miles. I also began continued biking for My mother died of
            complications from diabetes, so in the last few years I've been
            paying close attention to my A1C. Realizing that making lifestyle
            changes later in life would be more challenging than making them
            now, I started following the Mediterranean Diet: eliminating all
            meat except for seafood, and maintaining a strong intake of nuts and
            seeds This proved to be successful in lowering my A1C! I am in the
            lowest bracket of the average range!
          </p>
        </div>
        <img
          src="https://miray15.github.io/removed_backgroun2.jpg"
          className="image-container-pic2"
        />
      </div> */}
      <div className="image-container">
        <img
          src="https://i.ibb.co/2FpbZkN/WWUR2439.jpg"
          style={{
            marginRight: "10px",
            height: "100%",
            width: "50%",
            objectFit: "cover",
          }}
        />
        <div className="text-container">
          <p>
            When I returned from China in 2017, I realized I needed a sport to
            maintain my fitness and healthy habits. Running is easily one of the
            most accessible sports on the planet! Grab a pair of shoes and run!
            As I got more competitive, I invested in a pair of shoes that
            matched the needs of my feet, and since then have been updating them
            every 300 miles. I also began continued biking for My mother died of
            complications from diabetes, so in the last few years I've been
            paying close attention to my A1C. Realizing that making lifestyle
            changes later in life would be more challenging than making them
            now, I started following the Mediterranean Diet: eliminating all
            meat except for seafood, and maintaining a strong intake of nuts and
            seeds This proved to be successful in lowering my A1C! I am in the
            lowest bracket of the average range!
          </p>
        </div>
        <img
          src="https://miray15.github.io/removed_backgroun2.jpg"
          className="image-container-pic2"
          style={{ height: "100%", width: "50%", objectFit: "cover" }}
        />
      </div>

      {props.pictureComments.map((picture) => (
        <div key={picture.id}>
          <h2>{picture.body}</h2>
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
