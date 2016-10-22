var React = require('react');
var Results = require('../components/Results');

var ResultsContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function() {
        return {
            isLoading: true,
            scores: []
        };
    },

    render: function () {
        return (
            <Results isLoading={this.props.isLoading} scores={this.props.scores}/>
        );
    }
});

module.exports = ResultsContainer;