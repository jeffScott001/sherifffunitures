import React from "react";

function Model(props) {
  


  function closeModel(e){
  //   e.target.parentElement.parentElement.parentElement.classList.remove('inactive')
  //  e.target.parentElement.parentElement.parentElement.classList.add('active')
  // e.target.parentElement.parentElement.parentElement.className = 'model inactive'
  props.openModel('feedbackmodel')

  }

  
    if(props.status) {
      if(props.id == 'feedbackmodel') {
      return (
      <div className="model">
      <div className="feedbackmodel">
        <div className="feedbackcard">
          <p className="closebtn" onClick={closeModel}>X</p>
        <h4>Feedbacks</h4>

          <div className="feedbacks">
            <div>
              <p className="username"><small>Anonymous</small></p>
              <p className="userfeedback"></p>
              <p className="date"><small>25th, Dec 1993</small></p>
            </div> 
          </div>
          <div className="feedbackformcontainer">
            <form className="feedbackform">
              <textarea className="feedbackinput" type="text" placeholder="type text..."></textarea>
              <div>
                <input className="regioninput" type="text" placeholder="region... eg. Nairobi"/>
                <input className="cellinput" type="text" placeholder="Cell eg. +254012345678"/>
              </div>
              
              <input type="submit" className="submitbtn" value="Submit"/>
            </form>
          </div>
    </div>
  </div>
</div>
  )
      } else if (props.id == "Livingroom furnitures") {
        return(
        <div className="model">
          <div className="items">
            {props.furnitures.livingroom.map((furniture, index)=> (
              <div><img key={index} src={furniture}/></div>
            ))}

          </div>
       </div>
        )}
    } else {
      return null
    }


}

export default Model;
