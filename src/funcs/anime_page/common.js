import axios from "axios";

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
  }
}

