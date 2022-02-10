import React from 'react';
import initialData from '../list.json';
import Select from './Select';
import Radio from './Radio';
import Table from './Table';
import Grid from './Grid';
import NewValue from './NewValue';


function App() {

  const copiedInitialData = initialData.concat()
  const [sortedInitialData, setSortedInitialData] = React.useState([...copiedInitialData])
  const [chosenEl, setChosenEl] = React.useState('')
  

  function sortData(){
    sortedInitialData.sort(function(a, b){
      if(a.description.toLocaleLowerCase() && b.description.toLocaleLowerCase() === 'итоговые значения' ){ return -1;}
      if(a.description.toLocaleLowerCase() < b.description.toLocaleLowerCase() && a.description.toLocaleLowerCase() !== 'итоговые значения' ) { return -1; }
      if(a.description.toLocaleLowerCase() > b.description.toLocaleLowerCase() ) { return 1; }
      return 0;
    })   
  }
   
  function setttingElement(evt){
    setChosenEl(evt.target.id)
  }

  function updaveValues(val){
    setSortedInitialData([...sortedInitialData, {...val} ])
  }

  sortData()

  return (
    <div className="app">
      <Select sortedInitialData={sortedInitialData} chosenEl={chosenEl} setChosenEl={setChosenEl}/>
      <Radio sortedInitialData={sortedInitialData} chosenEl={chosenEl} setttingElementFunction={setttingElement}/>
      <Table sortedInitialData={sortedInitialData} chosenEl={chosenEl} setttingElementFunction={setttingElement} />              
      <Grid sortedInitialData={sortedInitialData} chosenEl={chosenEl} setttingElementFunction={setttingElement} />              
      <NewValue updaveValues={updaveValues}/>         
    </div>
  );
}

export default App;
