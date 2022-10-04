import React from 'react';
import { IMainBlock } from './MainBlock';

const MainBlock__toggle = ({number, move}: IMainBlock) => {

  // div onClick - не самый лучший выбор.
  // Но здесь эта реализация необходима

  return (

      <div className='mainBlock__toggle'>
          <div className='mainBlock__toggle__numbers'>0{number}/06</div>
          
          <div className='mainBlock__toggle__buttons'>
            <div 
              className={`mainBlock__toggle__button buttonLeft ${number == 1 && 'mainBlock__toggle__button--inactive'}` }
              onClick={() => move(false)}
            ></div>
            <div 
              className={`mainBlock__toggle__button buttonRight ${number == 6 && 'mainBlock__toggle__button--inactive'}`}
              onClick={() => move(true)}
            ></div>
          </div>

      </div>

  );
}

export default MainBlock__toggle;
