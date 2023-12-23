import axios from "axios";
import interfaces from "../anime_interfaces";

export default {
  search_page(name) {
    axios.get('https://www.agedm.org/search?query=' + name.toString()).then(({ data }) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const list = doc.getElementById('cata_video_list').children[0];
      let href = list.children[0].children[0].children[0].children[0].children[0].getAttribute('href').toString();
      let web_address = (href + '/2/1').replace("detail", "play");
      console.log(web_address);
      this.open_page(web_address);
    })
  },
  open_page(web_address) {
    axios.get(web_address).then(({ data }) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const iframe = doc.querySelector('iframe');
      console.log(iframe);
      this.video_src = iframe.getAttribute("src");
      console.log(this.video_src);
    })
  },
  get_characters_from_data(data){
    let character_data_list = [];
    let length = data.length;
    console.log(length);
    for(let i = 0; i < length; i++){
      if(i>=5) break;
      let character_data = {};
      character_data.image_url = data[i].images.small;
      character_data.character_name = data[i].name;
      character_data.person_name = data[i].actors[0].name;
      character_data_list.push(character_data);
    }
    return character_data_list;
  }
}

