var React = require('react');
var transparentBg = require('../styles').transparentBg;
var PropTypes = React.PropTypes;

function Prompt(props) {
    return (
        <div className="jumbotron col-sm-10 col-sm-offset-1 text-center"
            style={transparentBg}>
            <h1>{props.header}</h1>
            <div className="col-sm-12 col-md-6 col-md-offset-3">
                <form onSubmit={props.onSubmitUser}>
                    <div className="form-group">
                        <input
                            className="form-control col-xs-12"
                            placeholder="Github Username"
                            onChange={props.onUpdateUser}
                            value={props.username}
                            type="text" />
                    </div>
                    <div className="form-group col-sm-8 col-sm-offset-2">
                        <button
                            className="btn btn-block btn-danger"
                            type="submit">
                            Continue
                            </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

Prompt.propTypes = {
    header: PropTypes.string.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
};

module.exports = Prompt;