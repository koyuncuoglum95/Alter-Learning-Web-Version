import React from "react";
import { AiOutlineAudio, AiOutlineSearch, AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { CgSmileMouthOpen } from "react-icons/cg"
import { BiDotsVerticalRounded, BiBlock } from "react-icons/bi"
import { BsBoxArrowUp } from "react-icons/bs"
import { Card, CardHeader, CardBody, CardGroup } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./LeftCounter.css";
import {
  friendRequests,
  friendsMessagesList,
} from "./Mocks/FriendsMessagesMock";
import Friends from "./MessagesComponents/Friends";

class LeftCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="leftCards">
        {/* 1 */}
        <div>
          <Card
            className="testcard"
            style={{ width: "90%", height: "238px", borderRadius: 8 }}
          >
            <CardHeader as="h5" align="left">
              FRIEND REQUESTS <i class="fas fa-cog"></i>
            </CardHeader>
            <ListGroup style={{ height: "70px" }}>
              {friendRequests.map((request) => (
                <ListGroupItem>
                  <p className="paragraph">
                    {`${request.name} | ${request.account} | ${request.school} | requested to follow you`}
                    <AiOutlinePlusCircle size={16} color="#61CA3C"/>
                    <AiOutlineMinusCircle size={16} color="#AC2529"/>
                    <BiBlock size={16} color="#C4C4C4"/>
                  </p>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Card>
        </div>
        {/* 2 */}
        <div style={{ marginTop: "50px" }}>
          <Card
            className="testcard"
            style={{ width: "90%", height: "750px", borderRadius: 8 }}
          >
            <CardHeader as="h5" align="left">
              MESSAGES <i class="fas fa-search"></i> <i class="fas fa-cog"></i>
            </CardHeader>
            <CardBody className="cardBody">
              <div
                style={{ height: "90%", display: "flex", flexDirection: "row" }}
              >
                <div
                  className="friends-messages"
                  style={{ width: "35%", height: "80%" }}
                >
                  <div className="search-container">
                    <AiOutlineSearch className="search-icons" />
                    <input
                      className="search-engine"
                      placeholder="Search Messages"
                      style={{ border: "0px", height: "100%" }}
                    />
                    <AiOutlineAudio className="search-icons" />
                  </div>
                  <Friends />
                  <h4
                    style={{ color: "#73B6F7", borderTop: "2px solid #C4C4C4" }}
                  >
                    MORE MESSAGES...
                  </h4>
                </div>
                <div
                  className="main-chat"
                  style={{ width: "65%", height: "100%" }}
                ></div>
              </div>
              <div
                style={{
                  height: "10%",
                  display: "flex",
                  borderTop: "2px solid #C4C4C4",
                }}
              >
                <div>
                  <input placeholder="Type your message here" />
                  <AiOutlineAudio className="search-icons" />
                </div>
                <div>
                  <BsBoxArrowUp />
                  <CgSmileMouthOpen />
                  <BiDotsVerticalRounded />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default LeftCounter;
