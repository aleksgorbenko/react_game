var React = require('react');
var transparentBg = require('../styles').transparentBg;
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function () {
        return {
            username: ''
        };
    },
    // listens for change state on input and sets the username
    // getting the input value
    handleUpdateUser: function (e) {
        this.setState({
            username: e.target.value
        });
    },
    // saves the first username and makes it empty again
    // ready for the second input
    handleSubmitUser: function (e) {
        e.preventDefault();
        var username = this.state.username;
        this.setState({
            username: ''
        });

        if (this.props.routeParams.playerOne) {
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            });
        } else {
            this.context.router.push('/playerTwo/' + this.state.username);
        }
    },
    render: function () {
        // console.log(this)
        return (
            <Prompt
                onSubmitUser={this.handleSubmitUser}
                onUpdateUser={this.handleUpdateUser}
                header={this.props.route.header}
                username={this.state.username} />
        );
    }
});

module.exports = PromptContainer;