   var main = function(){};
   var getDetail = function(){
        var twitter_username = $('#twitter_id').val();
        console.log(twitter_username);
         if(twitter_username == ''){

            $('#results').html("<h3>Please enter Twitter user name</h3>");

         } else {

            $('#results').html("<h3>please wait</h3>");     
        $.ajax({
              url: "http://twitcher.steer.me/user/"+twitter_username+"?key=aqneegnh", //aqneegnh
              data: {
                 format: 'json'
              },
              error: function() {
                 $('#results').html('<h3>You have entered wrong user name<h3>');
              },
              dataType: 'json',
              success: function(data) {
                console.log(data);
                $('#results').html('<p>'+data.name+"</p><p>"+data.description+'</p>'+"</p><p>Followers "+data.followers_count+'  Friends '+data.friends_count+'</p>');
              },
              type: 'GET'
           });
        }
      return false;

   };

$('#get').click(getDetail);
 
$(document).ready(main);
