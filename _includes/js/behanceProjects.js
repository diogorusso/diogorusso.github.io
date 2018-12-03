      // www.behance.net/userName
      var userName = 'diogorusso';
      // this is your behance APIkey — figure out how to set this up at » URL TO COME
      var apiKey   = 'u2xLfubnIo63U4uyd7pJkRINJtG9ofFk';
      var pageResults = 6;
      var pageNumber = 1;

      // this url will provide a feed of content for the site based on your userName and apiKey.
      var url = 'https://api.behance.net/v2/users/' + userName + '/projects/?api_key=' + apiKey +'&per_page='+pageResults+'&page='+pageNumber+'&callback=?';

      // log url in console to make sure that things are working so far.
      // you can view this log output in console in developer tools in your browser.
      console.log('connected to ' + url + '.');
      // this is where the actual magic happens.
      // $.getJSON is a jquery command that asks for JSON from a url and then lets you run functions on it.
      $.getJSON(url, function(data) {
        console.log(data);
        //mustache for project list/grid
        var template = $('#project-cards').html();
        var info = Mustache.to_html(template, data);
        $('#behance-magix').html(info);        
      });

      