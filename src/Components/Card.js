import React from 'react';

import classes from './Card.module.css'

const card = (props) => {
    const text = props.count > 0 ? <p className={classes.Text}>Чего сидишь? Порадуй котэ, <a className={classes.link}>купи</a></p> : <p className={classes.Empty}>Печалька, {props.taste} закончился</p>;

    const borderClasses = [classes.Border];
    const roundClasses = [classes.Round];
    const cardClasses = [classes.Card];

    if (props.count < 1) {
        borderClasses.push(classes.Border__empty);
        roundClasses.push(classes.Round__empty);
        cardClasses.push(classes.blur);
    }
    if (props.selected) {
        borderClasses.push(classes.Border__selected);
        roundClasses.push(classes.Round__selected);
    }

    return (
        <section>
            <div className={borderClasses.join(' ')} onClick={(id) => props.select(props.id)}>
                <div className={cardClasses.join(' ')}>
                        <p className={classes.Additional}>Сказачное заморское яство</p>
                        <h2 className={classes.Name}>Нямушка</h2>
                        <h4 className={classes.Taste}>{props.taste}</h4>
                        <p className={classes.Additional}>{`${props.weight*20} порций`}</p>
                        <p className={classes.Additional}>{props.action}</p>
                        <p className={classes.Additional}>{props.comment}</p>
                        <div className={classes.Cat}>
                            <div className={roundClasses.join(' ')}>
                                <span className={classes.Weight}>{props.weight}</span>
                                <span className={classes.Kg}>кг</span>
                            </div>
                        </div>
                </div>
        </div>
        {text}
        </section>
    );
};

export default card;