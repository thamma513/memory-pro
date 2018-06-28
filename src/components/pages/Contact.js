import React, { Component, Fragment } from "react";

class Contact extends Component {
    state = {

    }
    render () {
        return (
            <Fragment>
            <h2>Check out my other projects!!</h2>
            <p>My Portfolio

            </p>
            <p>
            <a href={"https://github.com/thamma513"}><img src={"https://timelyapp.com/static/github-929da81acbe594532795b165d9dea184-38b56.png"} alt="Github" className="img" /></a>
            </p>
            <p>
                <a href={"https://www.linkedin.com/in/tyler-hamilton-01a636143/"}><img src={"http://www.findthatlogo.com/wp-content/uploads/2012/01/linked-in-logo.gif"} alt="Linkedin" className="img"/></a>
            </p>
            </Fragment>
        );
    }
}


export default Contact;