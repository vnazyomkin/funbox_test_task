import React from 'react';

import classes from './Card.module.css'

const card = (props) => (
    <section className={classes.Border}>
       <div className={classes.Card}>
            <p className={classes.Additional}>Сказачное заморское яство</p>
            <h2 className={classes.Name}>Нямушка</h2>
            <h4 className={classes.Taste}>{props.taste}</h4>
            <p className={classes.Additional}>{`${props.weight*20} порций`}</p>
            <p className={classes.Additional}>{props.action}</p>
            <div className={classes.Cat}></div>
       </div>
    </section>
);

export default card;