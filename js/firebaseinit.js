      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyCRFPNu6qMZY4sBou7ekFzecKfqBduHww0",
        authDomain: "raven-20655.firebaseapp.com",
        databaseURL: "https://raven-20655.firebaseio.com",
        projectId: "raven-20655",
        storageBucket: "raven-20655.appspot.com",
        messagingSenderId: "446034396814"
      };
      firebase.initializeApp(config);

      var database = firebase.database();
      function writeUserDataGeneral(userId, text) {
        firebase.database().ref('responses/' + userId).set({
          timestamp: new Date(),
          video: 'videoname',
          text: text
        });
      }

      function writeUserDataWithSentiment(userId, allData) {
        var res = Object.assign({
          timestamp: new Date(),
          video: 'videoname',
        }, allData);
        firebase.database().ref('responses/' + userId).set(res);
      }