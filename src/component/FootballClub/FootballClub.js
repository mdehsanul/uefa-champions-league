import React from "react";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import "./FootballClub.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

const FootballClub = (props) => {
  const { idTeam, strTeamBadge, strTeam, strSport } = props.club;
  let history = useHistory();
  const handleClubDetail = (idTeam) => {
    history.push(`/team/${idTeam}`);
    // console.log(idTeam);
  };
  return (
    <div>
      <Container>
        <Row className="conatinerRow">
          <Col className="conatinerColumn">
            <Card className="teamCard">
              <Card.Img src={strTeamBadge} className="cardImage" />
              <Card.Body>
                <Card.Title>{strTeam}</Card.Title>
                <Card.Text>Sports type: {strSport}</Card.Text>
                <Button
                  variant="success"
                  onClick={() => handleClubDetail(idTeam)}
                >
                  Explore <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FootballClub;
