import axios from "axios";


export default {
  fast_axios_get(url, func){
    axios.get(url, {
        'User-Agent': 'AoiSora/BangumiByVue (https://github.com/Aoi-Sora-lan/BangumiByVue)',
      }).then(({ data }) => {
      func(data);
    })
  },
  fast_axios_post(url,post_data,func){
    axios.post(url,post_data,{'User-Agent': 'AoiSora/BangumiByVue (https://github.com/Aoi-Sora-lan/BangumiByVue)'
    }).then(({data})=> {
        func(data);
      }
    )
  },
  get_subject(subject_id,func) {
    this.fast_axios_get('https://api.bgm.tv/v0/subjects/' + subject_id.toString(),func);
  },
  get_episodes(subject_id,func) {
    this.fast_axios_get('https://api.bgm.tv/v0/episodes?subject_id='+subject_id.toString()+'&type=0&limit=100&offset=0',func);
  },
  get_characters(subject_id,func){
    this.fast_axios_get('https://api.bgm.tv/v0/subjects/'+subject_id.toString()+'/characters',func);
  },
  get_character(character_id,func){
    this.fast_axios_get('https://api.bgm.tv/v0/characters/'+character_id.toString(),func);
  },
  get_episode(episode_id,func){
    this.fast_axios_get('https://api.bgm.tv/v0/episodes/'+episode_id.toString(),func)
  },
  search_normal(keyword,type,start,func){
    this.fast_axios_get('https://api.bgm.tv/search/subject/'+encodeURI(keyword)+'?type='+type+'&responseGroup=small&start='+start+'&max_results=10',func);
  }
}

