  $( document ).ready(function() {

    var fbToken = 'EAACEdEose0cBADATIH5goru8LrYaDZC3IYB9pChvzoLUXIAdavDeQkcxhDzZA4vF0cngeyzovIKwwPGaClFWP4GZCpAJALUpA662cZAq3pqEQ5VZBqcVlSlfhsLpFDdNq4nBbpl9Bmy7egvnoxtmhoImlBii4cNdYtmtTm9M2o1XJRIZCOgLrVuF2iXTlY8TJxro1zcOli7gZDZD';
    var personalInfoFields="fields=id,name,email,birthday,gender,education,first_name,hometown,middle_name,languages,last_name";


    function getFacebookPersonalInfo(){
        $.ajax('https://graph.facebook.com/me?'+personalInfoFields+'&access_token='+fbToken,{

                success : function(response){
                    console.log("personalInfo:"+response);
                    console.log(typeof(response));
                    $("#firstName").text(response.first_name);
                     $("#lastName").text(response.last_name); 
                     $("#middleName").text(response.middle_name);
                     $("#email").text(response.email);
                     $("#school").text(response.education[0].school.name);
                     $("#dob").text(response.birthday);
                     $("#home").text(response.hometown.name);
                    $("#gender").text(response.gender);

                },
                error: function(response) {
                    alert("error response"+JSON.stringify(response));
                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    function getFacebookFeedInfo() {
        $.ajax('https://graph.facebook.com/me/feed?access_token='+fbToken,{
                success: function(response) {
                         console.log("feedResponse:"+response);
                         response.data.forEach(function(data) {
                            if(data.message) {
                                  document.write('<p>'+"Message: "+data.message+'</p>')
                            }
                            if(data.story) {
                                    document.write('<p>'+"Story: "+data.story+'</p>')

                            }
                         });
                        


                },
                 error: function(response) {
                    alert("error response"+JSON.stringify(response));
                }
            }
        );// end ajax call

    } // end get facebook feedInfo

    $("#profileLink").on('click',getFacebookPersonalInfo);
    $("#feedLink").on('click',getFacebookFeedInfo);




  });