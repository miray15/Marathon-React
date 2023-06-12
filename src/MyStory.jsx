import React, { useState } from "react";

export function MyStory(props) {
  // console.log(props.pictureComments);
  // const [likeCount, setLikeCount] = useState(0);

  // const handleButtonClick = () => {
  //   setLikeCount(likeCount + 1);
  // };

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
                  href="/donate"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>My Race Story</h1>

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
            When I returned from Shanghai in 2017, I made it a point to continue
            the healthy habits I started abroad. Running made the most sense!
            All you need is a pair of shoes, and you can start your journey
            (metaphorically and otherwise). What motivated me to make this
            fitness change was acknowleding all the women in my life who
            suffered from diabetes, which was one of the comorbid causes of my
            mom&apos;s death. At 30, I began paying attention to my A1C levels,
            adjusting my eating habits to reflect the Medditerannean diet, or
            minimizing red meat and eating more legumes and olive oil. My A1C
            went down since my diet change, and I&apos;m now in the lowest
            healthy bracket for adults! If you&apos;re like me and looking to
            make a lifestyle change, grab a pair of shoes and hit the road! Your
            healthier self will thank you! Comment your own journey to health
            below!
          </p>
        </div>
        <img
          src="https://miray15.github.io/removed_backgroun2.jpg"
          className="image-container"
          style={{ height: "100%", width: "50%", objectFit: "cover" }}
        />
      </div>

      {props.pictureComments.map((picture) => (
        <div key={picture.id}>
          <h2>{picture.body}</h2>
        </div>
      ))}

      <h1>I have Something to Say:</h1>
      <form>
        <div>
          body:{" "}
          <textarea rows="4" cols="50">
            This is a text paragraph input.
          </textarea>
        </div>
        <button type="submit">Share my Story</button>
      </form>
    </div>
  );
}
