import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        wallet:function(){
            this.transitionToRoute('wallet');
        },

                /*employee:function(){
                var mycontroller=this
                
                 return $.ajax({   
                 url:'http://localhost:8081/employeedetail',
                 type: 'Get',
                 headers: {
                   //'Accept'      : 'application/json',
                   //'Content-Type': 'application/json',
                     'employeeId'  : 'id'
               },
               contentType: 'application/json',
               data: JSON.stringify(transactionstring),
               success: function(Response) {
               console.log(JSON.stringify(Response));
               var result = Response.result;
               console.log('result', result);
               //swal(''+result+'');
               
                 }
               })
                
            }*/
        }
    
    });
    