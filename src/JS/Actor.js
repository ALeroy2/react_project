class Actor {
  constructor (options){
    this.name = options.name;
    this.image = options.image;
    this.life = options.life;
    this.attack = options.attack;
    this.defence = options.defence
  }
  fight(options){
    options.target.life = options.target.life -( this.attack - options.target.defence);
  }
}

export default Actor;
