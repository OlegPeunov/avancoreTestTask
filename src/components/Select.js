import React from 'react';


function Select(props) {

  function getOption(e){
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index]
    props.setChosenEl(el.id)
  }

  return (
    <form className="component">
      <h2 className="component__name">Select</h2>
      <select id="select" className="component__select" onChange={getOption} >
        {props.sortedInitialData.map((el)=>{
          
          return(
            <option key={el.entryPointDocument} id={el.entryPointDocument} selected={el.entryPointDocument===props.chosenEl? true : false} >{el.description}</option>  
          )
        })}
      </select> 

    </form>

  );
}

export default Select;