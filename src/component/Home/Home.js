import React, { useState, useEffect } from "react";
import "./Home.css";
import FootballClub from "../FootballClub/FootballClub";

const Home = () => {
  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=UEFA%20Champions%20League"
    )
      .then((response) => response.json())
      .then((data) => setClubs(data.teams));
  }, []);
  return (
    <div className="home">
      <h1 className="header">UEFA Champions League</h1>
      {clubs.map((club) => (
        <FootballClub club={club} key={club.idTeam}></FootballClub>
      ))}
    </div>
  );
};

export default Home;
<h1>I am from Home</h1>;
