import React, {Component} from "react";
import logos from "../../logos.json";
import "./clicky.css";


class clicky extends Component  {
    render() {
        return (
            <div className="container">
            <logosGrid />
            </div>
        );
    }
        

}

class logosGrid extends Component {
    constructor(props) {
        super(props);

        this.state ={
            logos: logos,
            guessed: [],
            highscore:0

        };
    }
    shuffle() {
for (let i = 0; i<this.state.logos.length;i++){
    const j = Math.floor(Math.random()* (i + 1));
 [this.state.logos[i],this.state.logos[j]]=[this.state.logos[j],this.state.logos[i]];
}
    }

End() {
    if (this.state.highscore >= 10) {
        this.setState({highscore: this.state.logos, logos:logos, guessed:[]});
    }else {
        this.setState({logos:logos, guessed:[]});
    }
}

Checker(a) { 
    let choice= true;
    this.state.guessed.forEach((guess) => {
        if (choice === guess) {
            check = false;
        }
    });
    return check;
}
guessHandler = (current) => {
    let check = this.Checker(current);
    if(check) {
        this.shuffle();
        let array = this.state.guessed.slice();
        array.push(current);
        this.setState({logos: logos, guessed: array})
        }else if (!check){
            this.End();
        }
    }
}


