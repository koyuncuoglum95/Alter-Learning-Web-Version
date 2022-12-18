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
      <Card>
        <CardImg
          style={{ width: "100%", height: "400px", borderRadius: 0 }}
          src="/Team-members/hero.png"
          alt="Card image cap"
        />
        <div className="centered">WE’RE A DIVERSE, MULTI-TALENTED TEAM</div>
      </Card>

      <div className="row">
        {team.map((team) => {
          return (
            <div
              className="col-xs-12 col-sm-6 col-md-4 col-lg-3 cardHolder"
              key={team.id}
            >
              <Card style={{ borderRadius: "25px" }}>
                <CardImg src={team.image} alt={team.name} />
                <CardBody className="cardbody" style={{ fontSize: "14px" }}>
                  {team.name}
                  <span className="linkedln-logo">
                    <IoLogoLinkedin
                      onClick={() => openInNewTab(team.linkedln)}
                      size={25}
                      color="#0077b5"
                    ></IoLogoLinkedin>
                  </span>
                  <CardTitle className="title">{team.title}</CardTitle>
                  <CardSubtitle className="subtitle">
                    {team.subtitle}
                  </CardSubtitle>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default OurTeam;
