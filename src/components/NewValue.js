import React from "react";


function NewValue(props) {

  const inputRef = React.useRef()
  const [newVal, setNewVal] = React.useState({})

  function addNewValue(evt){
    setNewVal({...newVal, "description": evt.target.value, "entryPointDocument": `evt.target.value ${new Date()}`})
  
  }

  function submitNewVal(evt){
    evt.preventDefault();
    inputRef.current.value=''
    props.updaveValues(newVal)
  }


  
  return (
    <form className="component" onSubmit={submitNewVal}>
      <h2 className="component__name">Добавьте новое значение</h2>
      <input type="text" minLength="2" ref={inputRef} onChange={addNewValue}/>

 
    </form>
  );
}

export default NewValue;