$(document).ready(function(){

    $(document).on('keyup' , '#name' , function (){
        $('#name').css('border' , 'none')
    })
    $(document).on('keyup' , '#email' , function (){
     $('#email').css('border' , 'none')
    })
    $(document).on('keyup' , '#subject' , function (){
       $('#subject').css('border' , 'none')
    })
    $(document).on('keyup' , '#message' , function (){
       $('#message').css('border' , 'none')

    })


    $('#send').on('click', function(){
        var name = $('#name').val(),
            email = $('#email').val(),
            subject = $('#subject').val(),
            message = $('#message').val();


            if (name !== '' && email !== '' && subject !== '' && message !== '') {
               
            }else{

                if(name == ''){
                        $('#name').css('border' , '1px solid red')
                }else {
                        $('#name').css('border' , 'none')
                }
                if(email == ''){
                         $('#email').css('border' , '1px solid red')
                }else {
                        $('#email').css('border' , 'none')
                }
                if(subject == ''){
                        $('#subject').css('border' , '1px solid red')
                }else {
                         $('#subject').css('border' , 'none')
                }
                if(message == ''){
                        $('#message').css('border' , '1px solid red')
                }else {
                        $('#message').css('border' , 'none')
                 }

                Swal.fire({
                    type: 'error',
                    text: 'fill the blank to send a message'
                  })
            }

       

    })
   
  
})