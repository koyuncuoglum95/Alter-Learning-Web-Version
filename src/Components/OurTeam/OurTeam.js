import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";
import "./our_team.css";
import { IoLogoLinkedin } from "react-icons/io";
import { team } from "./team";

const OurTeam = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="our-team">
      <p className="space-paragraph">BLANK SPACE</p>
      <Card
        className="card-image"
        style={{ borderRadius: "20px", border: "2px solid #C4C4C4", boxShadow: "2px 2px 3px rgba(196, 196, 196, 0.5)" }}
      >
        <CardImg
          style={{ width: "100%", height: "400px" }}
          src="/Team-members/hero.png"
          alt="Card image cap"
        />
        <div className="centered">WE’RE A DIVERSE, MULTI-TALENTED TEAM</div>
      </Card>

      <div className="card-table">
      <div className="row">
        {team.map((team) => {
          return (
            <div
              className="col-xs-12 col-sm-6 col-md-4 col-lg-3 cardHolder"
              key={team.id}
            >
              <Card style={{ borderRadius: "20px", width: "92%", border: "2px solid #C4C4C4", boxShadow: "2px 2px 3px rgba(196, 196, 196, 0.5)" }}>
                <CardImg src={team.image} alt={team.name} />
                <CardBody className="cardbody" style={{ fontSize: "14px" }}>
                  <CardTitle className="title" style={{ marginTop: "0rem" ,marginBottom: "0rem" }}>{team.title}</CardTitle>
                    <CardSubtitle className="subtitle" style={{ marginBottom: "0.5rem" }}>
                    {team.subtitle}
                  </CardSubtitle>
                  {team.name}
                  <span className="linkedln-logo">
                    <IoLogoLinkedin
                      onClick={() => openInNewTab(team.linkedln)}
                      size={25}
                      color="#0077b5"
                    ></IoLogoLinkedin>
                  </span>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};
export default OurTeam;
