var USER_DATA = {
  name: 'Aleks Gorbenko',
  username: 'aleksgorbenko',
  image: 'https://avatars0.githubusercontent.com/u/14005824?v=3&s=466'
};


var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
    render: function () {
      return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
    }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
    render: function() {
      return <div>{this.props.name}</div>
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileLink username={this.props.user.username} />
        <ProfileName name={this.props.user.name} />
      </div>
    )
  }
});

ReactDOM.render(
    <Avatar user={USER_DATA}/>,
    document.getElementById('app')
);