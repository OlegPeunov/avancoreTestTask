import React from "react";


function Table(props) {
  
  return (
    <form className="component">
      <h2 className="component__name">Radio</h2>
      <div className="component__radio-container">
        {props.sortedInitialData.map((el)=>{
          return(
            <div onClick={props.setttingElementFunction} className="component__radio-element"  key={el.entryPointDocument}  >
              <input  type="radio" checked={el.entryPointDocument===props.chosenEl? true : false} id={el.entryPointDocument} name="contact" onChange={e => {}}/>
              <label id={el.entryPointDocument} data-title={el.description} className="component__radio-text" for={el.entryPointDocument}>{el.description}</label>
            </div>
          )
        })}
      </div>

    </form>

  );
}

export default Table;