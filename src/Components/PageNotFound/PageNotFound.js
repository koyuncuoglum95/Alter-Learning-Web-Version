import React from 'react';
import "./page_not_found.css";
import PageNotFoundImg from "../PageNotFound/404_error_page.png";


const PageNotFound = () => {
  return (
    <div className="page_not_found_container">

      <div className="inner_page_not_found_container">
        <img src={PageNotFoundImg} alt="" />
      </div>

      <div className="page_not_found_text_box">
        <h3>Page not found</h3>
      </div>

    </div>
  )
}


export default PageNotFound;
