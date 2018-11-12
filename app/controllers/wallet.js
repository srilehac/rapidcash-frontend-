import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        wallet:function(){
            var mycontroller=this
            
             return $.ajax({   
             url:'http://localhost:4200/wallet',
             type: 'Get',
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
               'x-access-token': "token"
           },
             success: function(response) {
             console.log(JSON.stringify(response));
             var message = response.message;
             mycontroller.set('message',message)
             var token=response.token
             mycontroller.set('token',token)
             swal(message, "Thank you", "success");
             console.log("token>>>>>>>>>>" + token);  
             console.log("message>>>>>>>>>>" + message);  
             }
           })
            
        }
    }

});
