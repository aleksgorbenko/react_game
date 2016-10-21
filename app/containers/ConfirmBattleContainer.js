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
            playersInfo: []
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
                // console.log(players);
                this.setState({
                    isLoading: false,
                    playersInfo: [players[0], players[1]]
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
    handleInitiateBattle: function () {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        });
    },

    render: function () {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playersInfo={this.state.playersInfo}
                onInitiateBattle={this.handleInitiateBattle} />
        );
    }
});

module.exports = ConfirmBattleContainer;