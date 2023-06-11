import React, { useState } from "react";

export function Family() {
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };
  return (
    <div className="parents_background">
      <h3 className="mama-text">She was 58</h3>
      <p className="mama-text">
        When my mom died my sophomore year of college, I would never hear her
        voice, taste her food, or rest my head on her shoulder. It was the most
        devastating thing that happened to me.
      </p>
      <br />
      <br /> <br />
      <br />
      <h3 className="baba-text">He was 66</h3>
      <p className="baba-text">
        My dad wanted the best for me, and worked hard to design a future where
        I would feel success. He learned to bake the best bread, make wheels of
        cheese he shared with family and friends, and loved me and my brothers
        endlessly.
      </p>
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
