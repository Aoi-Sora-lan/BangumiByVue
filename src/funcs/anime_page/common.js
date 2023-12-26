import axios from "axios";
import interfaces from "../anime_interfaces";

export default {
  get_characters_from_data(data){
    let character_data_list = [];
    let length = data.length;
    console.log(length);
    for(let i = 0; i < length; i++){
      if(i>=5) break;
      let character_data = {};
      character_data.image_url = data[i].images.grid;
      character_data.id = data[i].id;
      character_data.character_name = data[i].name;
      character_data.person_name = data[i].actors[0].name;
      character_data.character_relation = data[i].relation;
      character_data.actor_img= data[i].actors[0].images.grid;
      character_data_list.push(character_data);
    }
    return character_data_list;
  }
}

