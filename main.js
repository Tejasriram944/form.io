// console.log('hello world');

$(document).ready(function (){
    $('.submit').click(function(event){
        // event.preventDefault();
        // console.log('event is prevented')

        var email=$('.email').val();
        var subject=$('.subject').val();
        var message=$('.message').val();
        var statusElement=$('.status');
        statusElement.empty();

        if(email.length > 4 && email.includes('@') && email.includes('.')){
            statusElement.append('<p>email is valid</p>');
        }else{
            event.preventDefault();
            statusElement.append('<p>email is not valid</p>');
        }

        if(subject.length >= 2 ){
            statusElement.append('<p>subject is valid</p>');
        }else{
            event.preventDefault();
            statusElement.append('<p>subject is not valid</p>');
        }

        if(message.length >= 8 ){
            statusElement.append('<p>message is valid</p>');
        }else{
            event.preventDefault();
            statusElement.append('<p>message is not valid</p>');
        }
    })
})