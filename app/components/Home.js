var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;
var MainContainer = require('./MainContainer');

function Home() {
    return (
        <MainContainer>
            <h1>Github Battle</h1>
            <p className='lead'>Fight between Github Accounts</p>
            <Link to='/playerOne'>
                <button type='button'
                        className='btn btn-lg btn-danger'>
                        Battle!
                </button>
            </Link>
        </MainContainer>
    );
}

module.exports = Home;