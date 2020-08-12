var $select = $('#course_id');

$.getJSON('https://script.googleusercontent.com/macros/echo?user_content_key=Gcmo1oxlM4nlKXLUoGfkrwnDj64RgvXiEfpw3TccjQS5MjOezilz3BWUCrRec2CHoULTlAGT3yBczxa7gRLtRl_9xcYk5gi0m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC09Nb0QZ6ca_LU0vmo6mSiQ7SyFG3CgdL9-1Vgcha-TAYaAGhh-9xNG-9rMNEZHQRElvdDletx0&lib=MlJcTt87ug5f_XmzO-tnIbN3yFe7Nfhi6',function(data)){
  $select.html('');

  for(var i= 0; i< data['course_id'].length; i++){
    $select.append('<option id ="' + data['course_id'][i]['course_name'] + '">' +data['course_id'][i]['course_name'] + '/')

  }
});
