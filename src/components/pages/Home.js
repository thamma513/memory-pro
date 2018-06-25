import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    state = {

    }
    render () {
        return (
            <Fragment>
            <h2>Test Your memory!!</h2>
            <p> You may only select an image once. If you select an image a second time you lose!</p>
            <p>Click the link to get started
            <Link to="/memory">Memory Game</Link>
            </p>
            </Fragment>
        );
    }
}

export default Home;