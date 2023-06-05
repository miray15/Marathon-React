export function Home() {
  return (
    <div id="home-page">
      <nav>
        <div className="navbar_home">
          <a href="#">Home</a>
          <a href="/Family">Family</a>
          <a href="/mystory">My Story</a>
          <a href="donate">Donate</a>
        </div>
      </nav>

      <h1 className="intro">Look, it's 1996!</h1>
      <p className="home-pg">
        We&apos;re going back in time, to a place where{" "}
        <a href="https://firstmonday.org/ojs/index.php/fm/article/view/799/708">
          Al Gore invented the internet
        </a>
        , everyone was getting Rick Rolled, and all of our favorite cat&apos;s
        name was{" "}
        <a
          href="https://www.youtube.com/watch?v=QH2-TGUlwu4&ab_channel=NyanCat
  "
        >
          Nyan
        </a>{" "}
      </p>

      <p className="home-pg">
        Welcome to Mimi&apos;s first website, to support an awesome cause!
      </p>

      <h1>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
          Why I&apos;m running the 2023 Chicago Marathon
        </a>
      </h1>

      <p className="home-pg">
        {" "}
        This is a picture of my mom and dad. If you know me, you know my mom and
        dad meant the world to me. What you might not know is they both died of
        heart attacks before I turned 30.{" "}
      </p>

      <p className="home-pg">
        {" "}
        As tragic as this is, it has motivated me to take control of my health.
        I am running the 2023 Chicago Marathon for my parents, for my family,
        and for myself. <br /> As long as I live, I will do everything in my
        power to take care of my own heart and everyone&apos;s heart around me
        ❤️{" "}
      </p>

      <img
        src="https://miray15.github.io/mom-and-dad_3.jpeg"
        alt="Image"
        className="img_home"
      />

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
