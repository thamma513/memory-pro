import React, { Component, Fragment } from "react";
import img from "../../img.json";
import Tech from "../Tech";

class Memory extends Component {
    state = {
        img: [],
        clicked: [],
        score: 0,
        highscore: 0

    }
    shuffleImages = array => {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
    
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    
  componentDidMount() {
    const shuffledArr = this.shuffleImages(img)

    this.setState({
        img: shuffledArr,
        clicked: [],
        score: 0
    })
  }
  componentDidUpdate() {
      console.log(this.state);
  }

  handleClick = id => {
      console.log(id);
      if (this.state.clicked.includes(id)){
        this.setState({
            img,
            score:0,
            highscore: this.state.score,
            clicked:[],
            winOrLose: "Nice try you lose!"
        })
      } else{
          let clickedArrCopy= this.state.clicked.slice();
          clickedArrCopy.push(id);
          let imgCopy= this.state.img.slice()
          this.setState({
            img:this.shuffleImages(imgCopy),
            score:this.state.score + 1,
            highscore: this.state.score +1,
            clicked: clickedArrCopy,
            winOrLose:"Correct"
          })
      }
    }



  

    render() {
        return (
        <Fragment>
            <div className="jumbotron">
            <h2>score: {this.state.score} </h2>
            <h2>highscore: {this.state.highscore}</h2>
            </div>
                <div className="container text-center">
                    <div className="row sm-4">
                        {this.state.img.map(img => {
                            return (
                            <Tech 
                            id={img.id} 
                            src={img.img}
                            handleClick={this.handleClick}
                            />
                            );
                        })
                        }
                    
                    </div>
                </div>
        </Fragment>
        );
    }
}

export default Memory;