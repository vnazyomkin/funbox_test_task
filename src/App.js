import React, {Component} from 'react';

import classes from './App.module.css';
import Card from './Components/Card';

class App extends Component {

  state = { 
    food: [
      {
        taste: 'с фуа-гра',
        weight: 0.5,
        action: 'мышь в подарок',
        count: 3,
        id:'Food001',
        selected: false,
      },
      {
        taste: 'с рыбой',
        weight: 2,
        action: '2 мыши в подарок',
        count: 1,
        id:'Food002',
        selected: false,
      },
      {
        taste: 'с курой',
        weight: 5,
        action: '2 мышей в подарок',
        comment: 'заказчик доволен',
        count: 0,
        id:'Food003',
        selected: false,
      }
    ],
  }

  selectCardHandler(id) {
      const index = this.state.food.findIndex( el => el.id === id );
      const card = {
        ...this.state.food[index],
        selected: true,
      }; 
      console.log(card);

  }

  render() {
    const Cards = this.state.food.map(card => (
      <Card 
        {...card} 
        key={card.id} 
        select={(id) => this.selectCardHandler(id)}/>
    ));
    return (
      <main className={classes.App}>
          <p className={classes.p}>Ты сегодня покормил кота?</p>
          <article className={classes.cats}>
            {Cards}
          </article>
      </main>
    );
  }
}

export default App;
