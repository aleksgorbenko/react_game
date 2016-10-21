var React = require('react');
var transparentBg = require('../styles').transparentBg;

function ConfirmBattle (props){
    return props.isLoading === true
        ? <p>Loading...</p>
        : <p>Confirm Battle!</p>;

};

module.exports = ConfirmBattle;