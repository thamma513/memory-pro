import React, { Component } from "react";
import img from "../../img.json";

class Memory extends Component {
    state = {
        img: []

    }

    
  componentDidMount() {
    this.setState({img});
  }

    render() {
        return (
            <div className="container text-center">
                <div className="row sm-4">
                    {this.state.img.map(img => <div key={img.img}><img src={img.img} alt="Img" className="img" /></div>)}
                </div>
            </div>
        );
    }
}

export default Memory;