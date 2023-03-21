import React from "react";
import { BiEditAlt, BiWallet } from "react-icons/bi";
import { BsHouseDoor, BsShop } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";
import { HiOutlinePhoto } from "react-icons/hi2";
import { RiDeleteBinLine, RiAccountBoxLine, RiMoneyDollarBoxLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc"
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
        <div className="leftcards">
          <Card
            className="testcard"
            style={{ width: "750px", height: "2086px", borderRadius: 8 }}
          >
            <CardHeader as="h5" align="left">
              MANAGE ACCOUNT
            </CardHeader>
            <CardBody className="cardBody">
              <div className="account-settings">
                <div>
                  <h3>MANAGE ACCOUNTS</h3>
                  <h4 style={{ color: '#F08013' }}><RiAccountBoxLine />EDIT ACCOUNT</h4>
                </div>
                <div>
                  <h5 className="edit-title">EMAIL</h5>
                </div>
                <div className="edit-setting">
                  <h5>NoahVee31@gmail.com</h5>
                  <button>
                    <BiEditAlt size={18} />
                    EDIT
                  </button>
                </div>
                <div>
                  <h5 className="edit-title">PASSWORD</h5>
                </div>
                <div className="edit-setting">
                  <h5>NEW PASSWORD</h5>
                  <button>
                    <BiEditAlt size={18} />
                    EDIT
                  </button>
                </div>
                <div className="edit-setting">
                  <h5>CONFIRM PASSWORD</h5>
                  <button>
                    <BiEditAlt size={18} />
                    EDIT
                  </button>
                </div>
                <div>
                  <h5 style={{ color: '#F08013' }}><VscAccount />EDIT PROFILE</h5>
                </div>
                <div>
                  <h5 className="edit-title">NAME</h5>
                </div>
                <div className="edit-setting">
                  <h5>NOAH VILLANUEVA</h5>
                  <button>
                    <BiEditAlt size={18} />
                    EDIT
                  </button>
                </div>
                <div>
                  <h5 className="edit-title">USER NAME</h5>
                </div>
                <div className="edit-setting">
                  <h5>@Pizza.Monster23</h5>
                  <button>
                    <BiEditAlt size={18} />
                    EDIT
                  </button>
                </div>
                <div className="photos-container">
                  <h5>PROFILE PHOTO</h5>
                  <button className="edit-button"><HiOutlinePhoto size={16} />EDIT PHOTO</button>
                  <button className="delete-button"><RiDeleteBinLine size={16} />DELETE PHOTO</button>
                </div>
                <div className="photos-container">
                  <h5>BACKGROUND PHOTO</h5>
                  <button className="edit-button"><HiOutlinePhoto size={16} />EDIT PHOTO</button>
                  <button className="delete-button"><RiDeleteBinLine size={16} />DELETE PHOTO</button>
                </div>
                <div>
                  <h5 className="edit-title">SCHOOL</h5>
                </div>
                <div>
                  <h5>SUSAN B. ANTHONY MIDDLE SCHOOL</h5>
                </div>
                <div>
                  <h5>STUDENT</h5>
                </div>
                <div>
                  <h5 style={{ color: '#F08013' }}><FaRegBuilding />MY ADRESS</h5>
                </div>
                <div className="edit-setting">
                  <h5>1048 MAPLE Ave. San Francisco Ca, 94112</h5>
                  <button>
                    <BiEditAlt size={18} />
                    EDIT
                  </button>
                </div>
                <div>
                  <button className="add-button">
                    <FaRegBuilding />
                    ADD NEW ADDRESS
                  </button>
                </div>
                <div>
                  <h5 style={{ color: '#F08013' }}><BiWallet />MY PAYMENT METHOD</h5>
                </div>
                <div className="edit-setting">
                  <h6>xxxx-xxxx-xxxx-7553 08/23</h6>
                  <button>
                    <BiEditAlt size={18} />
                    EDIT
                  </button>
                </div>
                <div>
                  <button className="add-button">
                    <BiWallet />
                    ADD NEW CARD
                  </button>
                </div>
                <div>
                  <h5 style={{ color: '#F08013' }}><RiMoneyDollarBoxLine />MY PAST ORDERS</h5>
                </div>
                <div>
                  <h6>
                    Gene-X Evolutions ($30.00)(Ca State Tax 7.5%)(Alter State
                    Tax $32.25)(Purchase 01.04.22 Card ending in 7553 08/23)
                  </h6>
                  <h6>
                    Gene-X Evolutions ($30.00)(Ca State Tax 7.5%)(Alter State
                    Tax $32.25)(Purchase 01.04.22 Card ending in 7553 08/23)
                  </h6>
                  <h6>
                    Gene-X Evolutions ($30.00)(Ca State Tax 7.5%)(Alter State
                    Tax $32.25)(Purchase 01.04.22 Card ending in 7553 08/23)
                  </h6>
                  <h5 style={{ color: '#73B6F7' }}>MORE ORDERS</h5>
                </div>
                <div>
                  <h5 style={{ color: '#F08013' }}>CONTACT US</h5>
                </div>
                <div>
                  <h4>
                    Having an issue with a past order, or need assistance? Our
                    representatives are here to help 24/7! Please reach out by
                    email, phone, or social media bellow!
                  </h4>
                </div>
                <div>
                  <h5>ALTER LEARNING CONNECT</h5>
                </div>
                <div>
                  <h6>MAILING ADDRESS | </h6>
                  <h7>2748 Conges pt. Davis. CA 866/6</h7>
                </div>
                <div>
                  <h6>EMAIL | </h6>
                  <h7>Support@AlterLearning.com</h7>
                </div>
                <div>
                  <h6>PHONE | </h6>
                  <h7>(580)608-8275</h7>
                </div>
                <div>
                  <h6>INSTAGRAM | </h6>
                  <h7>@AlterLearning</h7>
                </div>
                <div>
                  <h6>FACEBOOK | </h6>
                  <h7>@AlterLearning</h7>
                </div>
                <div>
                  <h6>LINKEDIN | </h6>
                  <h7>@AlterLearning</h7>
                </div>
                <div>
                  <h6>TWITTER | </h6>
                  <h7>@AlterLearning</h7>
                </div>
                <div>
                  <h6>FAQ |</h6>
                  <h7>Frequently Asked Questions</h7>
                </div>
                <div>
                  <button className="redirect-button">
                    <BsHouseDoor size={18} />
                    BACK TO HOME
                  </button>
                  <button className="redirect-button">
                    <BsShop size={18} />
                    BACK TO MARKET
                  </button>
                  <button className="redirect-button">
                    <AiOutlineFire size={18} />
                    BACK TO GAMES
                  </button>
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
