import React from 'react';


function Table(props) {

  return (
    <form className="component">
      <h2 className="component__name">Table</h2>
      <table border="1" >
        <tbody>
        {props.sortedInitialData.map((el)=>{
          return(
            <tr height="40" key={el.entryPointDocument}><td id={el.entryPointDocument} key={el.entryPointDocument} onClick={props.setttingElementFunction} 
            className={`component__table-element ${el.entryPointDocument===props.chosenEl? 'component__table-element_type-chosen': '' }`}>{el.description}</td></tr>
          )
        })}
        </tbody>
      </table>

    </form>

  );
}

export default Table;