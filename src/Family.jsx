import React, { useState } from "react";

export function Family() {
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };
  return (
    <div
      style={{
        backgroundImage: `url(https://i.postimg.cc/Jz0St5Ym/SCAN0088-2.jpg)`,
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'auto', 
        backgroundPosition: 'center', 
        width: 100vw, 
        height: 100vh,  
      }}
    >
      <h3 className="mama-text">She was 58</h3>
      <p className="mama-text">
        I was 20 when my mom died. I would never hear her voice, taste her food,
        or rest my head on her shoulder. It was the most devastating thing that
        happened to me in my life.
      </p>
      <br />
      <br />
      <br />
      <h3 className="baba-text">He was 66</h3>
      <p className="baba-text">
        Seven years later, my dad died. He wanted the best for me, and worked
        hard to design a future where I would feel success. He learned to bake
        the best bread, make wheels of cheese he shared with family and friends,
        and loved my me endlessly.
      </p>
      <div>
        <button onClick={handleLike}>Like</button>
        <p>{likeCount} Likes</p>
      </div>
    </div>
  );
}
