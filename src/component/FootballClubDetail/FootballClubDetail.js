import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "./FootballClubDetail.css";
import found from "../../Icon/found.png";
import country from "../../Icon/flag.png";
import football from "../../Icon/football.png";
import genderSign from "../../Icon/male-gender-sign.png";
import femaleImage from "../../Photo/female.png";
import { Button } from "react-bootstrap";
import twitter from "../../Icon/Twitter.png";
import facebook from "../../Icon/Facebook.png";
import youtube from "../../Icon/YouTube.png";

const FootballClubDetail = () => {
  const { teamId } = useParams();
  const [teamDetail, setTeamDetail] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTeamDetail(data.teams[0]));
  }, [teamId]);

  const history = useHistory();
  const handleBackToHome = () => {
    history.push("/");
  };

  return (
    <div className="footballTeamDetail">
      <Container fluid>
        <Row className="clubDetailbanner">
          <Col className="teamBannerColumn">
            <img src={teamDetail.strTeamBadge} className="teamBadge" alt="" />
          </Col>
        </Row>
      </Container>
      <div className="teamDetailBackground">
        <Container>
          <Row className="teamDetailRow">
            <Col md={12} className="teamDetailColumn ">
              <div className="teamDetail">
                <div>
                  <h2 className="teamName">{teamDetail.strTeam}</h2>
                  <p className="teamInfo">
                    <img src={found} className="icon" alt="" /> Founded:{" "}
                    {teamDetail.intFormedYear}
                  </p>
                  <p className="teamInfo">
                    <img src={country} className="icon" alt="" /> Country:{" "}
                    {teamDetail.strCountry}
                  </p>
                  <p className="teamInfo">
                    <img src={football} className="icon" alt="" /> Sport Type:{" "}
                    {teamDetail.strSport}
                  </p>
                  <p className="teamInfo">
                    <img src={genderSign} className="icon" alt="" /> Gender:{" "}
                    {teamDetail.strGender}
                  </p>
                </div>
                <div>
                  {/* Conditional Rendering */}
                  {teamDetail.strGender === "Female" ? (
                    <img src={femaleImage} className="teamImage" alt="" />
                  ) : (
                    <img
                      src={teamDetail.strTeamFanart3}
                      className="teamImage"
                      alt=""
                    />
                  )}
                </div>
              </div>
            </Col>
            <Col md={12}>
              <div className="aboutTeam">
                <p>{teamDetail.strDescriptionEN}</p>
                <Button
                  variant="success"
                  className="backToHome"
                  onClick={() => handleBackToHome()}
                >
                  Back to Home
                </Button>
              </div>
            </Col>
            <Col>
              <div className="social">
                <a href={`https://${teamDetail.strTwitter}`} target="_blank">
                  <img src={twitter} className="socialIcon" alt="" />
                </a>
                <a href={`https://${teamDetail.strFacebook}`} target="_blank">
                  <img src={facebook} className="socialIcon" alt="" />
                </a>
                <a href={`https://${teamDetail.strYoutube}`} target="_blank">
                  <img src={youtube} className="socialIcon" alt="" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FootballClubDetail;
