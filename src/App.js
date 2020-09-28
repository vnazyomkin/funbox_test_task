import React, {Component} from 'react';

import classes from './App.module.css';
import Card from './Components/Card';

class App extends Component {
  state = { 
    food: [
      {
        taste: 'с фуагра',
        weight: 0.5,
        action: 'мышь в подарок',
      },
      {
        taste: 'с рыбой',
        weight: 2,
        action: '2 мыши в подарок',
      },
      {
        taste: 'с курой',
        weight: 5,
        action: '2 мышей в подарок',
        comment: 'заказчик доволен',
      }
    ],
  }
  render() {
    const Cards = this.state.food.map(card => (
      <Card {...card}/>
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
