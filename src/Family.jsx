import React, { useState } from "react";

export function Family() {
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url("https://i.postimg.cc/sxxtV2dr/SCAN0088-2.jpg")`,
      }}
    >
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3 className="mama-text">She was 58</h3>
        <p className="mama-text">
          When my mom died my sophomore year of college, I was in shock.{" "}
        </p>
        <p className="mama-text">
          I would never receive a text that ended in "luv u mama" again. I would{" "}
        </p>{" "}
        <p className="mama-text">
          never hear her voice, taste her food, or rest my head on her shoulder.{" "}
        </p>{" "}
        <p className="mama-text">
          I nearly dropped out of college, but I wanted to graduate to fulfill{" "}
        </p>{" "}
        <p className="mama-text">my promise to her.</p>
        <br />
        <br />
        <h3 className="baba-text">He was 66</h3>
        <p className="baba-text">
          My dad wanted the best for me, and worked hard to design a future
          where{" "}
        </p>{" "}
        <p className="baba-text">
          I would feel success. He learned to bake the best bread, make wheels
          of cheese{" "}
        </p>{" "}
        <p className="baba-text">
          {" "}
          he shared with family and friends, and loved me and my brothers
          endlessly.
        </p>
      </div>
      <div>
        <button onClick={handleLike}>Like</button>
        <p>{likeCount} Likes</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
