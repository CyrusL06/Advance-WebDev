    import React from "react";
    import emojipedia from "../emojipedia";

    // this is the code for repeated component
    function Entry(props){
        return(
            <dl className="dictionary">
        <div className="term">
          <dt>
            {/* Emoji  */}
            <span className="emoji" role="img" aria-label={props.emoji}>
              {props.emoji}
            </span>
            {/* Emoji name */}
            <span>{props.name}</span>
          </dt>
          {/* meaning */}
          <dd>{props.meaning}</dd>
        </div>
           </dl>
        );
    }

    export default Entry;