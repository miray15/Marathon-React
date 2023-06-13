import React, { useState } from "react";

export function MyStory(props) {
  return (
    <div className="mystory-div">
      <h1>My Race Story</h1>
      <div>
        <img
          src="https://miray15.github.io/sh_friends.jpeg"
          className="image-container"
        />
        <div className="text-container">
          <p>
            When I returned from Shanghai in 2017, I made it a point to continue
            the healthy habits I started abroad. Running made the most sense
            because of how accessible it was. All I needed was a pair of shoes,
            and I could start my journey (metaphorically and otherwise). What
            motivated me to make this fitness change was acknowleding all the
            women in my life who suffered from diabetes, which was one of the
            comorbid causes of my mom&apos;s death. At 30, I began paying
            attention to my A1C levels, adjusting my eating habits to reflect
            the Medditerannean diet, or minimizing red meat and eating more
            legumes. My A1C went down since my diet change last year, and
            I&apos;m now in the lowest healthy bracket for adults! If
            you&apos;re like me and looking to make a lifestyle change, grab
            pair of shoes and hit the road. Your healthier self will thank you!
          </p>
        </div>
        <img
          src="https://miray15.github.io/removed_backgroun2.jpg"
          className="image-container"
        />
      </div>
      <br />
    </div>
  );
}
