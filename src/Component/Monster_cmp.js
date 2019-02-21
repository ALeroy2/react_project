import Monster from '../JS/Monster';
import * as React from "react";

export default class Monster_cmp extends React.Component{
    constructor(props){
        super(props);
        var mon = new Monster({name:"Pierre",
            life:200,
            attack:10,
            defense:2,
            image:"https://cdn.discordapp.com/attachments/547037631322783757/547080433175887872/664573925_small.png"});
        this.state = {
            monster: mon
        }
    }

    render(){
        return(
            <div>
            <h1>My Monster: {this.state.monster.name}</h1>
            <p> pv:{this.state.monster.life}</p>
            <p> hp:{this.state.monster.attack}</p>
            <p> att:{this.state.monster.defense}</p>
            <img src={this.state.monster.image}/>
            </div>
        );

    }
}


