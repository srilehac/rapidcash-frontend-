import Controller from '@ember/controller';
export default Controller.extend({
   /* actions:{
        Supply: function () {
            var mycontroller=this
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
            url:'http://localhost:8081/admin',
            type: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                //'x-access-token': "token"
            },
            contentType: 'application/json',
            data: JSON.stringify(dataString),
            success: function(response) {
            console.log((response));
            //var message = response.message
            //console.log("message",message)
            var result=response.result
            mycontroller.set('result',result)
            }
        })
            
                }
              
            
            }*/
  
       actions:{
               Supply:function(){
               //this.set('type',name)
               var id=this.get('id');
               this.set("id",id);
               console.log("id",id)

               var name=this.get('name');
               this.set("name",name);
               console.log("name",name)

               var value=this.get('value');
               this.set("value",value);
               console.log("value", value)

              
               if ( id === null || name=== undefined||  value=== undefined ) {
                // swal("please fill details for login");
                swal("Something Went Wrong", "please fill required details before posting ideas", "error");
            } else {
                let {
                  id,
                  name,
                  value,
                } = this.getProperties('id', 'name','value');
                console.log(id);
                console.log(name);
                console.log(value);
              }
               var transactionstring={
                "id":id,
                "name":name,
                "value":value,
               }
               console.log("transactionstring",(transactionstring));
            //    var mycontroller=this
 
               return $.ajax({  
                url:'http://localhost:8081/admin',
                type: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
                contentType: 'application/json',
                data: JSON.stringify(transactionstring),
                success: function(Response) {
                console.log(JSON.stringify(Response));
                var result = Response.result;
                //swal(''+result+'');
                console.log('result',result);
                //this.transitionToRoute('employee');
                }
            })  
               this.transitionToRoute('employee');
           },
  
       }
    

    });
