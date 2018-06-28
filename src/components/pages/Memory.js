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
            <div>
            <h4>Images for '{this.state.img.img}':</h4>
            <ul className="list-group search-results">
                    {this.state.img.map(img => <li className="list-group-item" key={img.img}><img src={img.img} alt="Img" className="img-thumbnail" /></li>)}
            </ul>
            </div>
        );
    }
}

export default Memory;