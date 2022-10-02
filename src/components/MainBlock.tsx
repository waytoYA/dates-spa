import React, { useEffect, useState } from 'react';
import { gsap  } from "gsap";
import Circle from './Circle';
import MainBlock__toggle from './MainBlock__toggle';

export interface IMainBlock {
  startYear?: number;
  endYear?: number;
  number: number;
  name?: string;
  move: (value: boolean) => void;
}

const MainBlock = ({startYear, endYear, number, name, move}: IMainBlock) => {

  const funcMove = {
    move: move,
  }

  // only for animation numbers
  useEffect(() => {
    
    const item = document.querySelector(".mainBlock__date--start");
    const item2 = document.querySelector(".mainBlock__date--end");

    gsap.from(item, {
      textContent: oldStartYear,
      duration: 0.5,
      ease: "power1.in",
      snap: { textContent: 1 },
    });

    gsap.from(item2, {
      textContent: oldEndYear,
      duration: 0.5,
      ease: "power1.in",
      snap: { textContent: 1 },
    });

    setOldStartYear(startYear)
    setOldEndYear(endYear)
  }, [startYear, endYear])

  const [oldStartYear, setOldStartYear] = useState(startYear)
  const [oldEndYear, setOldEndYear] = useState(endYear)


  return (
    <section className='mainBlock'>

      <Circle
        {...funcMove}
      />

      <div className='mainBlock__title'>Исторические даты</div>

      <div className='mainBlock__date'>
        <div className='mainBlock__date--start'>{startYear}</div>
        <div className='mainBlock__date--end'>{endYear}</div>
      </div>

      <div className='mainBlock__nameDate'>
          {name}
      </div>

      <MainBlock__toggle
        number={number}
        move={move}
      />
      
    </section>
  );
}

export default MainBlock;
