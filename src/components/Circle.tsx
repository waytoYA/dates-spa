import React from 'react';



class Circle extends React.Component {
  move: (value: boolean, strictValue: number | null) => void;

  constructor(props: any) {
    super(props)
    this.move = props.move

  }

  // Поворот круга
  rotateCircle(point: number, allPoints: NodeListOf<HTMLElement>): void {

    const circle = document.body.querySelector<HTMLElement>('.circle')!;
  
    let selectBlock = document.body.querySelector<HTMLElement>('.circle__block--active')!;
    let selectPoint = Number(selectBlock.id.split('-')[1]) 
    
    let gradRotate = ((point - selectPoint) * 60)
  
    // this is not the best solution :(
    let lastRotate = +(circle.style.transform.split('rotate(')[1]?.split('deg)')[0]) || 0
    circle.style.transform = `rotate(${lastRotate + gradRotate}deg)`;
  
    
    allPoints.forEach(item => {
      item.style.transform = `rotate(${360 - (lastRotate + gradRotate)}deg)`;
    })
  
  }
  
  // Изменение активного элемента
  // и обновление основной информации
  editPoint(allPoints: NodeListOf<HTMLElement>, point: HTMLElement): void {
    allPoints.forEach(point => {
      point.classList.remove('circle__block--active')
    })
  
    point.classList.add('circle__block--active')

    this.move(false, Number(point.innerHTML))
  }

  // Ставим элементы на места и
  // присваиваем им события нажатия
  componentDidMount(): void {

    const point1 = document.body.querySelector<HTMLElement>('.circle__point1')!;
    const point2 = document.body.querySelector<HTMLElement>('.circle__point2')!;
    const point3 = document.body.querySelector<HTMLElement>('.circle__point3')!;
    const point4 = document.body.querySelector<HTMLElement>('.circle__point4')!;
    const point5 = document.body.querySelector<HTMLElement>('.circle__point5')!;
    const point6 = document.body.querySelector<HTMLElement>('.circle__point6')!;


    const WIDTH = 530
    const R = WIDTH / 2; // 265
    const PI = Math.PI
    const toRad = (grad: number): number => grad * PI / 180;

    // x = r * cos(t) + h
    // y = r * sin(t) + k

    // point 1
    point3.style.left = R * Math.cos(toRad(60)) + R + 'px';
    point3.style.top =  R - R * Math.sin(toRad(60)) + 'px';

    // point 2
    point2.style.left = R * Math.cos(toRad(120))+ R - 8 + 'px';
    point2.style.top =  R - R * Math.sin(toRad(120)) + 'px';

    // point 3
    point1.style.left = R * Math.cos(toRad(180)) + R - 4 + 'px';
    point1.style.top = R * Math.sin(toRad(180)) + R + 'px';

    // point 4
    point6.style.left = R * Math.cos(toRad(240)) + R + 'px';
    point6.style.top = R - R * Math.sin(toRad(240)) + 'px';

    // point 5
    point5.style.left = R * Math.cos(toRad(300)) + R - 6 + 'px';
    point5.style.top = R - R * Math.sin(toRad(300)) + 'px';

    // point 6
    point4.style.left = R * Math.cos(toRad(360)) + R - 4 + 'px';
    point4.style.top = R * Math.sin(toRad(360)) + R + 'px';

    const allPoints = document.body.querySelectorAll<HTMLElement>('.circle__block')!;

    allPoints.forEach((point) => {
      let num = Number(point.id.split('-')[1])
      point.addEventListener('click', () => {this.rotateCircle(num, allPoints)})
      point.addEventListener('click', () => {this.editPoint(allPoints, point)})
    })

  }

render() {
    return (
        <div className='circle'>

            <div className='circle__point3 circle__point'>
              <div className='circle__block circle__block--active' id='n-1'>
                3
              </div>
            </div>
          
            <div className='circle__point2 circle__point'>
              <div className='circle__block' id='n-2'>
                2
              </div>
            </div>
          
            <div className='circle__point1 circle__point'>
              <div className='circle__block' id='n-3'>
                1
              </div>
            </div>
          
            <div className='circle__point6 circle__point'>
              <div className='circle__block' id='n-4'>
                6
              </div>
            </div>
          
            <div className='circle__point5 circle__point'>
              <div className='circle__block' id='n-5'>
                5
              </div>
            </div>
          
            <div className='circle__point4 circle__point'>
              <div className='circle__block' id='n-6'>
                4
              </div>
            </div>
          
        </div>
    );
  }
}

export default Circle;
