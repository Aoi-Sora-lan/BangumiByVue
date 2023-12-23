import axios from "axios";


export default {
  fast_axios(url,func){
    axios.get(url,
      {
        'User-Agent': 'AoiSora/BangumiByVue (https://github.com/Aoi-Sora-lan/BangumiByVue)',
      }).then(({ data }) => {
      func(data);
    })
  },
  get_subject(subject_id,func) {
    this.fast_axios('https://api.bgm.tv/v0/subjects/' + subject_id.toString(),func);
  },
  get_episodes(subject_id,func) {
    this.fast_axios('https://api.bgm.tv/v0/episodes?subject_id='+subject_id.toString()+'&type=0&limit=100&offset=0',func);
  },
  get_characters(subject_id,func){
    this.fast_axios('https://api.bgm.tv/v0/subjects/'+subject_id.toString()+'/characters',func);
  },
  get_character(character_id,func){
    this.fast_axios('https://api.bgm.tv/v0/characters/'+character_id.toString(),func);
  }
}

