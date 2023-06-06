import { Home } from "./Home";
import { Routes, Route } from "react-router-dom";
import { Donate } from "./Donate";
import { MyStory } from "./MyStory";
import { Family } from "./Family";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { useState, useEffect } from "react";
import axios from "axios";

export function Content() {
  const [picture_comment, setPictureComments] = useState([]);
  const handleIndexPictureComment = () => {
    console.log("in handle index picture_comments");
    axios
      .get("http://localhost:3000/picture_comments.json")
      .then((response) => {
        console.log(response.data);

        setPictureComments(response.data);
      });
  };
  useEffect(handleIndexPictureComment, []);

  const [donation_comment, setDonationComments] = useState([]);
  const handleIndexDonationComment = () => {
    console.log("in handle index donation_comments");
    axios
      .get("http://localhost:3000/donation_comments.json")
      .then((response) => {
        console.log(response.data);

        setDonationComments(response.data);
      });
  };
  useEffect(handleIndexDonationComment, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/mystory" element={<MyStory />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/family" element={<Family />} />
      </Routes>
    </div>
  );
}
