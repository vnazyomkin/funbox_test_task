import React, {Component} from 'react';

import classes from './App.module.css';
import Card from './Components/Card';
import food from './store';

class App extends Component {

  state = { 
    0: {
        count: 3,
        selected: false,
    },
    1:{
      count: 1,
      selected: false,
    },
    2:{
      count: 0,
      selected: false,
    }
  }

  clickCardHandler = id => {
    if (this.state[id].count > 0) {
      this.setState({
        ...this.state,
        [id]: {
          ...this.state[id],
          selected: !this.state[id].selected,
        }
      });
    }
  }

  render() {
    const Cards = food.map( (card, id) => (
      <Card 
        {...card}
        count={this.state[id].count} 
        selected={this.state[id].selected}
        id={id}
        key={id} 
        click={this.clickCardHandler}/>
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
