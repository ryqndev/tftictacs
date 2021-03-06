import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Items from './components/Items/Items';
import ItemStats from './components/Items/ItemStats';
import Units from './components/Units/Units';
import UnitStats from './components/Units/UnitStats';
import Traits from './components/Traits/Traits';
import TraitStats from './components/Traits/TraitStats';
import './App.css';

function App() {
    return (
        <div>
            <div className="app">
                <Route exact strict path='/' component={Home} />
                <Route exact path='/items' component={Items} />
                <Route exact path='/items/:item' component={ItemStats} />
                <Route exact path='/traits' component={Traits} />
                <Route exact path='/traits/:trait' component={TraitStats} />
                <Route exact path='/units' component={Units} />
                <Route exact path='/units/:unit' component={UnitStats} />
            </div>
        </div>
    );
}

export default App;
