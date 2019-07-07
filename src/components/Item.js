import React, { Component } from 'react';
import { Items } from '../assets/ItemSets';
import { Link } from 'react-router-dom';
import './Items.css';

export class Item extends Component {
    constructor(props){
        super(props);
        let id = this.props.id;
        this.state = {
            name: Items[id].name,
            image: Items[id].image,
            stat: Items[id].stat,
            index: this.props.index
        };
    }
    alternateColor = (index) => {
        return { backgroundColor: index % 2 ? '#f5f5f5' : '#ebebeb' };
    }
    render() {
        const s = this.state;
        const linkTo = '/items/' + this.props.id;
        return (
            <Link to={linkTo} className="item-component--holder" style={ this.alternateColor(s.index) }>
                <img src={s.image} alt={s.name + " image"} />
                <div className="item-component--name">{ s.name }</div>
                <div className="item-component--stat">{ s.stat }</div>
            </Link>
        );
    }
}

export default Item;