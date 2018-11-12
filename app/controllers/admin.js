import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        Submit: function () {
            var id=this.get('id');
            console.log(id);
            var name=this.get('name');
            console.log(name);
            var value=this.get('value');
            console.log(value);
          
            var dataString = {
              "id" : id,
              "name" : name,
              "value" :value,

            };

        console.log(JSON.stringify(dataString));
        console.log(id);
        console.log(name);
        console.log(value);
            
        return $.ajax({
            url:'http://localhost:4200/admin',
            type: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': "token"
            },
            contentType: 'application/json',
            data: JSON.stringify(dataString),
            success: function(response) {
            console.log((response));
            var message = response.message
            console.log("message",message)
            var token=response.token
            mycontroller.set('token',token)
            }
        })
            
                }
              
            
            }
        
    
        });
    
    
    

