import React from "react";
import { friendsMessagesList } from "../Mocks/FriendsMessagesMock";
import "./Friends.css";

class Friends extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="friends" style={{ height: "100%", marginTop: "2.5%" }}>
        <div className="friend" style={{ height: "20%" }}></div>
        <div className="friend" style={{ height: "20%" }}></div>
        <div className="friend" style={{ height: "20%" }}></div>
        <div className="friend" style={{ height: "20%" }}></div>
        <div className="friend" style={{ height: "20%" }}></div>
      </div>
    );
  }
}

export default Friends;
