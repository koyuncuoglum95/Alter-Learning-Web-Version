import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Container,
  CardImg,
  CardFooter,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import "./LeftCounter.css";

class LeftCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Card
            className="testcard"
            style={{ width: "750px", height: "405px", borderRadius: 8 }}
          >
            <CardHeader as="h5" align="left">
              ALTER LEARNING CONNECT
            </CardHeader>
            <CardImg
              width="100%"
              height="92%"
              src="images/v443_23035.png"
              alt="Card image cap"
            />
          </Card>
        </div>
        <div>
          <Card
            className="testcard"
            style={{ width: "750px", height: "958px", borderRadius: 8 }}
          >
            <CardHeader as="h5" align="left">
              FAQ
            </CardHeader>
            <ListGroup>
              <ListGroupItem>
                <div>
                    <h6>1. What is Alter Learning CONNECT ?</h6>
                    <div>
                      <h6>ANSWER</h6>
                      <div>
                        Alter Learning CONNECT is a social platform created for our network of students, parents, and
                        educators. Gather here to share your posts, interact with your educational community, and
                        best of all - PLAY XR GAMES IN OUR VIRTUAL CLASSROOMS. 
                      </div>
                    </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div>
                    <h6>2. How much is it to enjoy your game titles?</h6>
                    <div>
                      <h6>ANSWER</h6>
                      <div>
                        Alter Learning CONNECT is a social platform created for our network of students, parents, and
                        educators. Gather here to share your posts, interact with your educational community, and
                        best of all - PLAY XR GAMES IN OUR VIRTUAL CLASSROOMS. 
                      </div>
                    </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div>
                    <h6>3. Is this a social media platform or game platform?</h6>
                    <div>
                      <h6>ANSWER</h6>
                      <div>
                        Alter Learning CONNECT is a social platform created for our network of students, parents, and
                        educators. Gather here to share your posts, interact with your educational community, and
                        best of all - PLAY XR GAMES IN OUR VIRTUAL CLASSROOMS. 
                      </div>
                    </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div>
                    <h6>4. How often will new games be available?</h6>
                    <div>
                      <h6>ANSWER</h6>
                      <div>
                        Alter Learning CONNECT is a social platform created for our network of students, parents, and
                        educators. Gather here to share your posts, interact with your educational community, and
                        best of all - PLAY XR GAMES IN OUR VIRTUAL CLASSROOMS. 
                      </div>
                    </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div>
                    <h6>5. Who is Alter Learning CONNECT for?</h6>
                    <div>
                      <h6>ANSWER</h6>
                      <div>
                        Alter Learning CONNECT is a social platform created for our network of students, parents, and
                        educators. Gather here to share your posts, interact with your educational community, and
                        best of all - PLAY XR GAMES IN OUR VIRTUAL CLASSROOMS. 
                      </div>
                    </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div>
                    <h6>6. Is this website safe for families, students, and educators to interact?</h6>
                    <div>
                      <h6>ANSWER</h6>
                      <div>
                        Alter Learning CONNECT is a social platform created for our network of students, parents, and
                        educators. Gather here to share your posts, interact with your educational community, and
                        best of all - PLAY XR GAMES IN OUR VIRTUAL CLASSROOMS. 
                      </div>
                    </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div>
                    <h6>7. What kind of hardware do i need to enjoy your games?</h6>
                    <div>
                      <h6>ANSWER</h6>
                      <div>
                        Alter Learning CONNECT is a social platform created for our network of students, parents, and
                        educators. Gather here to share your posts, interact with your educational community, and
                        best of all - PLAY XR GAMES IN OUR VIRTUAL CLASSROOMS. 
                      </div>
                    </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div>
                    <h6>8. I cannot access my game library. How do I play my games?</h6>
                    <div>
                      <h6>ANSWER</h6>
                      <div>
                        Alter Learning CONNECT is a social platform created for our network of students, parents, and
                        educators. Gather here to share your posts, interact with your educational community, and
                        best of all - PLAY XR GAMES IN OUR VIRTUAL CLASSROOMS. 
                      </div>
                    </div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </div>
      </div>
    );
  }
}

export default LeftCounter;
