import React, { useState } from "react";

export function Family() {
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="parents_background">
        <br />
        <h3 className="mama-text">She was 58</h3>
        <p className="mama-text">
          When my mom died my sophomore year of college, I would never hear her
          voice, taste her food, or rest my head on her shoulder. It was the
          most devastating thing that happened to me.
        </p>
        <br />
        <br /> <br />
        <br />
        <br /> <br />
        <br />
        <h3 className="baba-text">He was 66</h3>
        <p className="baba-text">
          My dad wanted the best for me, and worked hard to design a future
          where I would feel success. He learned to bake the best bread, make
          wheels of cheese he shared with family and friends, and loved me and
          my brothers endlessly.
        </p>
        <div>
          <button onClick={handleLike}>Like</button>
          <p>{likeCount} Likes</p>
        </div>
      </div>
    </div>
  );
}
