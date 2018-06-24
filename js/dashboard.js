      // Initialize Firebase

      var database = firebase.database();

      // https://firebase.google.com/docs/database/web/read-and-write
      var ref = firebase.database().ref('responses/user1');

      ref.orderByChild("timestamp").startAt("Sun Jun 24 2018 08:14:03 GMT+0800 (+08)").on("child_added", function(snapshot) {
        console.log(snapshot.val());
        $("#user1_list").append("<p>" + name_val + "</p><p> " + id_val + "</p><br>");
      });


      // ref.on('value', function(snapshot) {
      //   // updateStarCount(postElement, snapshot.val());
      //   console.log('starCountRef received', snapshot.val());
      // });