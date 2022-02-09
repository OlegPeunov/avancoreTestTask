import React from 'react';
import initialData from '../list.json';
import Select from './Select';
import Radio from './Radio';
import Table from './Table';



function App() {

  const sortedInitialData = initialData.concat()
  const [chosenEl, setChosenEl] = React.useState('')

  function sortData(){
    sortedInitialData.sort(function(a, b){
      if(a.description < b.description && a.description !== 'Итоговые значения') { return -1; }
      if(a.description > b.description) { return 1; }
      return 0;
    })
  }
  
  sortData()
 

  function setttingElement(evt){
    setChosenEl(evt.target.id)
  }


  return (
    <div className="app">
      <Select sortedInitialData={sortedInitialData} chosenEl={chosenEl} setttingElementFunction={setttingElement} setChosenEl={setChosenEl}/>
      <Radio sortedInitialData={sortedInitialData} chosenEl={chosenEl} setttingElementFunction={setttingElement}/>
      <Table sortedInitialData={sortedInitialData} chosenEl={chosenEl} setttingElementFunction={setttingElement} />              
      
    </div>
  );
}

export default App;
