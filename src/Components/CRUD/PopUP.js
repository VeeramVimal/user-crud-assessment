import React from "react";
import "../Style/Styles.css";
import FontAwesome from "react-fontawesome";
const PopUp = ({content, handleClose}) => {
  return (
    
    <div className = "popup_page"  
     style={{
      position: 'fixed',
      background: "#00000050",
      width: "100%",
      height: "100vh",
      top: 0,
      left: 0,
      display: "flex",
      justifycontent: "center",
      alignitems: "center",
      overflow: "auto", /* Enable scroll if needed */
    }}>
      <div className = "pop_size">
      <FontAwesome className="fas fa-times-circle exit_icon fs-2 mt-2" onClick={handleClose}> </FontAwesome>
        {content}
      </div>
    </div>
  );
};

export default PopUp;
