import axios from "axios";


export default {
  get_subject(subject_id,func) {
    axios.get('https://api.bgm.tv/v0/subjects/' + subject_id.toString(),
      {
        'User-Agent': 'AoiSora/BangumiByVue (https://github.com/Aoi-Sora-lan/BangumiByVue)',
      }).then(({ data }) => {
        console.log('https://api.bgm.tv/v0/subjects/' + subject_id.toString());
        console.log(data);
        console.log(data.infobox);
        func(data);
    })
  }
}

