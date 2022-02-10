import React from "react";


function Grid(props) {
  
  return (
    <form className="component">
      <h2 className="component__name">Grid</h2>
      <div className="component__grid">
        {props.sortedInitialData.map((el)=>{
          return(
            <div className={`component__table-element ${el.entryPointDocument===props.chosenEl? 'component__table-element_type-chosen': '' }`}>
              <div style={{height: '40px', border:"solid 1px grey"}}id={el.entryPointDocument} key={el.entryPointDocument} onClick={props.setttingElementFunction}>
                {el.description}</div></div>
          )
        })}
      </div>
    </form>
  );
}

export default Grid;