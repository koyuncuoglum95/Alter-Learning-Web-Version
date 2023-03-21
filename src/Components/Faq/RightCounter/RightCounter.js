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
import "./RightCounter.css";

class RightCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Card
            className="testcard"
            style={{ width: "350px", height: "403px", borderRadius: 8 }}
          >
            <CardHeader as="h5" className="cardheader1" align="left">
              MY PROFILE <i class="fas fa-cog"></i>
            </CardHeader>
            <div>
              <CardImg width="50px" height="150px" src="images/widget2.jpeg" />
              <div className="image" align="center">
                <img
                  src="images/v443_23123.png"
                  width="100"
                />
              </div>
            </div>
            <ListGroup>
              <ListGroupItem>WELCOME BACK, NOAH!</ListGroupItem>
              <ListGroupItem>
                <p>
                  <div>@Pizza.Monster23</div>
                  <div>Online</div>
                </p>
              </ListGroupItem>
              <ListGroupItem>
                <p>
                  <div>NOAH VILLANUEVA</div>
                  <div>63 FRIENDS</div>
                </p>
              </ListGroupItem>
              <ListGroupItem>
                <p>
                  <div>STUDENT | SUSAN S. ANTHONY MIDDLE SCHOOL</div>
                  <div>SAN FRANCISCO, CALIFORNIA</div>
                </p>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </div>
        <div style={{ marginTop: "150px" }}>
          <Card
            className="testcard"
            style={{ width: "350px", height: "524px", borderRadius: 8 }}
          >
            <CardHeader className="cardheader6" as="h5" align="left">
              CONTACT US
            </CardHeader>
            <ListGroup>
              <ListGroupItem align="left">
                <img height="30" width="30" src="images/v443_23128.png" />{" "}
                &nbsp;ALTER LEARNING CONNECT
              </ListGroupItem>
              <ListGroupItem align="left">
                <i class="far fa-building"></i> &nbsp; MAILING ADDRESS <br />
                2748 Ganges PI, Davis, CA 95616
              </ListGroupItem>
              <ListGroupItem align="left">
                <i class="far fa-envelope"></i> &nbsp; EMAIL <br />
                Support@AlterLearning.com
              </ListGroupItem>
              <ListGroupItem align="left">
                <i class="fas fa-phone-alt"></i> &nbsp; PHONE <br />
                (530)601-8275
              </ListGroupItem>
              <ListGroupItem align="left">
                <i class="fab fa-instagram"></i> &nbsp; INSTAGRAM
                <br />
                @AlterLearning
              </ListGroupItem>
              <ListGroupItem align="left">
                <i class="fab fa-facebook-f"></i> &nbsp; FACEBOOK <br />
                @AlterLearning
              </ListGroupItem>
              <ListGroupItem align="left">
                <i class="fab fa-linkedin-in"></i> &nbsp; LINKEDIN <br />
                @AlterLearning
              </ListGroupItem>
              <ListGroupItem align="left">
                <i class="fab fa-twitter"></i> &nbsp; TWITTER <br />
                @AlterLearning
              </ListGroupItem>
              <ListGroupItem align="left">
                <i class="far fa-question-circle"></i> &nbsp; FAQ <br />
                Frequently Asked Questions
              </ListGroupItem>
            </ListGroup>
          </Card>
        </div>
      </div>
    );
  }
}

export default RightCounter;
