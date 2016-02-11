'use strict';

(function() {

class MainController {

  constructor($http, $sce) {
    this.$http = $http;
    this.awesomeThings = [];

    // $http.get('/api/things').then(response => {
    //   this.awesomeThings = response.data;
    // });
    var soundFileURL = 'https://github.com/CyberAgent/boombox.js/blob/gh-pages/demo/media/sound.m4a?raw=true';
    this.config = {
              sources: [
            {src: $sce.trustAsResourceUrl(soundFileURL), type: 'audio/mp4'}
        ],
              theme: {
        url: 'http://www.videogular.com/styles/themes/default/latest/videogular.css'
              }
          };
    this.API = null;
  }

  onPlayerReady(API) {
    this.API = API;
  }

  playSound(){
    this.API.play();
    this.API.seekTime(0);

  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('rettsystemApp')
  .controller('MainController', MainController);

})();
