//Code included inside $( document ).ready() 
//will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
$(document).ready(function(){
    $('#search').click(function(){
      var term=$('#txt').val();
      var url='https://en.wikipedia.org/w/api.php?action=opensearch&search='+ term +'&callback=?';
      //$('#test').html(url);
      $.ajax({
        type:"GET",
          url:url,
        async:false,
        dataType:"json",
        //async:false = Code paused. (Other code waiting for this to finish.)
        //async:true = Code continued. (Nothing gets paused. Other code is not waiting.)
        
        success: function(data){
          //console.log(data[1][1]);
          for(var i=0;i<data[1].length;i++){
            var link=data[3][i];
            //$('#test').html(link);
            $('#list').append('<li><a href="'+link+'" target="blank">'+data[1][i]+'<p>'+data[2][i]+'</p></a></li>');
          }
        }
        
      });
    });
  });