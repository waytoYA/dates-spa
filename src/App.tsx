import React, { useContext, useEffect, useState } from 'react';
import { Date } from '.';
import InfoBlock from './components/InfoBlock';
import MainBlock from './components/MainBlock';


const App = () => {

  const {HistoryDate} = useContext(Date)

  const [date, setDate] = useState(HistoryDate.selectedDate)
  const startYear = date.startYear
  const endYear = date.endYear
  const number = date.number
  const name = date.name

  // Изменение основной информации
  const editSelected = (value: boolean, strictValue = null) => {
    const n = value ? 1 : -1;

    if (number + n < 7 && number + n > 0) {
      HistoryDate.setSelectedDate(strictValue || number + n)

      if (!strictValue){
        //Animation
        let block = document.body.querySelector(`.circle__point${strictValue || number + n}`)?.children[0]! as HTMLElement;
        
        block.click()
      }
    }

    setDate(HistoryDate.selectedDate)
  }

  return (
    <div className='container'>

      <div className='line-horizontal'></div>
      <div className='line-vertical'></div>

      <MainBlock
        startYear={startYear}
        endYear={endYear}
        number={number}
        name={name}
        move={editSelected}
      />

      <InfoBlock
        news={date.news}
      />

    </div>
  );
}

export default App;
