var axios = require('axios');
var config = require('../../config');

var id = config.clientID;
var sec = config.secret;
var param = '?client_id=' + id + '&client_secret=' + sec;

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param);
};

function getRepos(username) {
    return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}

function getTotalStars(repos) {
    // calculate all stars that user has
    return repos.data.reduce(function (prev, curr) {
        return prev + curr.stargazers_count;
    }, 0);
};

function getPlayersData(player) {
    return getRepos(player.login)
        .then(getTotalStars)
        .then(function (totalStars) {
            console.log(player);
            console.log('we are here');
            return {
                followers: player.followers,
                totalStars: totalStars,
                login: player.login,
                following: player.following
            };
        });
};

function calculateScores(players) {
    console.log(players[0]);
    return [
        players[0].followers * 3 + players[0].totalStars +
        players[0].login.length * players[0].following,

        players[1].followers * 3 + players[1].totalStars +
        players[1].login.length * players[1].following
    ];
};


var helpers = {
    getPlayersInfo: function (players) {
        return axios.all(players.map(function (username) {
            return getUserInfo(username);
        })).then(function (info) {
            return info.map(function (user) {
                return user.data;
            });
        }).catch(function (err) {
            console.warn('Error in getPlayersInfo', err);
        });
    },
    battle: function (players) {
        var playerOneData = getPlayersData(players[0]);
        var playerTwoData = getPlayersData(players[1]);

        return axios.all([playerOneData, playerTwoData])
            .then(calculateScores)
            .catch(function (err) {
                console.warn('Error in githubHelpers: ' + err);
            });
    }
};

module.exports = helpers;