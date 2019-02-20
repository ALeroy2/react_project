import Monster from "../JS/Monster.js";
import Player from "../JS/Player.js";
//creation d'un monstre nom + image
var mon = new Monster({name:"Pierre",
                      life:200,
                      attack:10,
                      defence:2,
                      image:"https://cdn.discordapp.com/attachments/547037631322783757/547080433175887872/664573925_small.png"});

var play = new Player({
  name:"hero",
  life:300,
  attack:20,
  defence:0,
  image:null
});
//ajout à la page
var nom_mob = $('<p> name:'+mon.name+' life: '+mon.life+'</p>');
nom_mob.appendTo('#ok');

var img_mob = $('<img id="dynamic_img">');
img_mob.attr('src', mon.image);
img_mob.appendTo('#ok');

var nom_player =  $('<p> name:'+play.name+' life: '+play.life+'</p>');
nom_player.appendTo('#ok');

alert(play.life);
mon.fight({target:play});
alert(play.life);
