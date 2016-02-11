'use strict';

(function() {

class MainController {

  constructor($http, $sce) {
    this.$http = $http;
    this.awesomeThings = [];

    // $http.get('/api/things').then(response => {
    //   this.awesomeThings = response.data;
    // });
    this.config = {
              sources: [
            {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/audios/videogular.mp3"), type: "audio/mpeg"},
            {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/audios/videogular.ogg"), type: "audio/ogg"}
        ],
              theme: {
        url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
              }
          };
    this.API = null;
  }
  onPlayerReady = function(API) {
    this.API = API;
  };

  playSound(){
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
