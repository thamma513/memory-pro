import React, { Component, Fragment } from "react";
import img from "../../img.json";

class Memory extends Component {
    state = {
        img: [],
        clicked:[],
        score: 0,
        highscore: 0

    }

    
  componentDidMount() {
    this.setState({img});
  }
 
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

    render() {
        return (
        <Fragment>
            <div className="jumbotron">
            <h2>score: {this.state.score} </h2>
            <h2>this is where the highscore goes:0</h2>
            </div>
                <div className="container text-center">
                    <div className="row sm-4">
                        {this.state.img.map(img => <div onClick={this.handleIncrement} key={img.img}><img src={img.img} alt="Img" className="img" /></div>)}
                    </div>
                </div>
        </Fragment>
        );
    }
}

export default Memory;