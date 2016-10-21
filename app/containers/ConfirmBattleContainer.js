var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            isLoading: true,
            playerInfo: []
        };
    },

    // triggered before the component gets rendered for the
    // first time
    componentWillMount: function () {
        console.log('componentWillMount');
    },

    // triggered after comp was mounted
    componentDidMount: function () {
        var query = this.props.location.query;
        console.log('componentDidMount');
        // fetch info from GH and update the state with the promise
        // after the helper gets the data with API call
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then(function (players) {
                this.setState({
                    isLoading: false,
                    playerInfo: [players[0], players[1]]
                });
            }.bind(this));
            // binds the context of the outer 'this' so that this.setState
            // executes properly
    },

    // triggered every time a component receives new props
    componentWillReceiveProps: function () {
        console.log('componentWillReceiveProps');
    },

    // once we switch to a different route this will be triggered
    componentWillUnmount: function () {
        console.log('componentWillUnmount');
    },

    render: function () {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playerInfo={this.state.playerInfo} />
        );
    }
});

module.exports = ConfirmBattleContainer;