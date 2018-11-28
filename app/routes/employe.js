import Route from '@ember/routing/route';

export default Route.extend({

    model(){
       
                    //employee:function(){
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
                    
                }
            //}
  

});
