import Player from '../JS/Player';
import * as React from "react";

export default class Palyer_cmp extends React.Component{
    constructor(props){
        super(props);
        var play = new Player({name:"Aloïs",
            life:10000,
            attack:100,
            defense:8,
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Arnold_Schwarzenegger_1974.jpg/220px-Arnold_Schwarzenegger_1974.jpg"});
        this.state = {
            player: play
        }
    }

    render(){
        return(
            <div>
            <h1>Le plus beau: {this.state.player.name}</h1>
            <p> pv:{this.state.player.life}</p>
            <p> hp:{this.state.player.attack}</p>
            <p> att:{this.state.player.defense}</p>
            <img src={this.state.player.image}/>
            </div>
        );

    }
}
