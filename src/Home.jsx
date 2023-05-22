export function Home() {
  return (
    <div id="home-page">
      <nav id="home-nav">
        <div>
          <a href="/home">Home</a>
          <a href="#">My Story</a>
          <a href="/donate">Donation Progress</a>
        </div>
      </nav>

      <h1 className="intro">Look, its 1996!</h1>
      <p>
        Were going back in time, to a place where{" "}
        <a href="https://firstmonday.org/ojs/index.php/fm/article/view/799/708">
          Al Gore invented the internet
        </a>
        , everyone was getting Rick Rolled, and all of our favorite cat's name
        was{" "}
        <a
          href="https://www.youtube.com/watch?v=QH2-TGUlwu4&ab_channel=NyanCat
  "
        >
          Nyan
        </a>{" "}
      </p>

      <br />

      <p>Welcome to Mimis first website, to support an awesome cause!</p>

      <h1>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
          Why I am running the 2023 Chicago Marathon
        </a>
      </h1>

      <p>
        {" "}
        This is a picture of my mom and dad. If you know me, you know my mom and
        dad meant the world to me. What you might not know is they both died of
        heart attacks before I turned 30.{" "}
      </p>

      <p>
        {" "}
        As tragic as this is, it has motivated me to take control of my health.
        I am running the 2023 Chicago Marathon for my parents, for my family,
        and for myself. <br /> As long as I live, I will do everything in my
        power to take care of my own heart and everyones heart around me ❤️{" "}
      </p>

      <div>
        <img
          src="https://miray15.github.io/mom-and-dad_3.jpeg"
          alt="Image"
          className
        />
      </div>

      <button onClick="">Like</button>
      <span id="">389</span>

      <br />
      <br />
      <p>
        {" "}
        Head back up to to the navigation bar to learn more about my story.
        Click the donate button to be rediected to my fundraising site.{" "}
      </p>
    </div>
  );
}

// render.com -- host front, back, and db
