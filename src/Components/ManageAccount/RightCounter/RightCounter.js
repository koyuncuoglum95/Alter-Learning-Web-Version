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
import { MdOutlineComment } from 'react-icons/md';
import { BsCameraVideo, BsChatText, BsCreditCard } from 'react-icons/bs';
import { FiSettings, FiEdit2 } from 'react-icons/fi';
import { TfiBookmark } from 'react-icons/tfi';
import { AiOutlineShoppingCart, AiOutlineCamera } from 'react-icons/ai';
import { RiDeleteBinLine, RiMoneyDollarBoxLine, RiShoppingBasket2Line } from "react-icons/ri";
import "./RightCounter.css";

class RightCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="rightcards">
        <div>
          <Card
            className="testcard"
            style={{
              width: "110%",
              height: "403px",
              borderRadius: 8,
              marginLeft: "150px",
            }}
          >
            <CardHeader as="h5" className="cardheader1" align="left">
              MY PROFILE <i align="right" class="fas fa-cog"></i>
            </CardHeader>
            <div>
              <CardImg width="50px" height="100px" src="images/widget2.jpeg" />
              <div className="image" align="center">
                <img src="images/v443_23123.png" width="100" />
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
        <div>
          <Card
            className="testcard"
            style={{
              width: "110%",
              height: "478px",
              borderRadius: 8,
              marginLeft: "150px",
              marginTop: "100px"
            }}
          >
            <CardHeader as="h5" align="left">
              SHOPPING CART<AiOutlineShoppingCart size={ 16 } style={{ color: '#61CA3C' }}/>
            </CardHeader>
            <CardBody className='cardBody'>
              <h4>Vr Playgrounds ($30.00)<RiDeleteBinLine size={16} /></h4>
              <h4>Vr Playgrounds ($30.00)<RiDeleteBinLine size={16} /></h4>
              <h4>Vr Playgrounds ($30.00)<RiDeleteBinLine size={16} /></h4>
              <h4>Vr Playgrounds ($30.00)<RiDeleteBinLine size={16} /></h4>
              <div>
                <h4>Total: (x4) items ($120.00) (Ca State Tax 7.5%)</h4>
                <h4>(Ca State Tax $9.00)</h4>
                <h4>FINAL SALE: ($129.00)</h4>
              </div>
              <div>
                <h4>CARD ENDING IN ...7553 08/23</h4>
                <button className="edit-button"><BsCreditCard />EDIT</button>
              </div>
              <div>
                <button className="delete-button"><RiShoppingBasket2Line />CLEAR CART</button>
                <button className="add-button"><RiMoneyDollarBoxLine />BUY</button>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card
            className="testcard"
            style={{
              width: "110%",
              height: "382px",
              borderRadius: 8,
              marginLeft: "150px",
            }}
          >
            <CardHeader as="h5" align="left">
              MY STUFF
            </CardHeader>
            <CardBody className='cardBody'>
              <h4><TfiBookmark />MY BOOKMARKS<FiSettings /></h4>
              <h4><AiOutlineCamera />MY PICTURES<FiSettings /></h4>
              <h4><BsCameraVideo />MY VIDEOS<FiSettings /></h4>
              <h4><FiEdit2 />MY BLOGS<FiSettings /></h4>
              <h4><BsChatText />MY WIRES<FiSettings /></h4>
              <h4><MdOutlineComment />MY COMMENTS<FiSettings /></h4>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default RightCounter;
