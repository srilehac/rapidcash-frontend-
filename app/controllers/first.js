import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        admin:function(){
            this.transitionToRoute('admin');
        },

        employee:function(){

                //this.set('type',name)
                var employeeId=this.get('employeeId');
                this.set("employeeId",employeeId);
                console.log("employeeId",employeeId)
        
               
                if ( employeeId === null  ) {
                 // swal("please fill details for login");
                 swal("Something Went Wrong", "please fill required details before posting ideas", "error");
             } else {
                 let {
                   employeeId,
                  
                 
                 } = this.getProperties('employeeId');
                 console.log(employeeId);
                
               
               }
                var transactionstring={
                 "email": employeeId,
                }
                console.log("transactionstring",(transactionstring));
             //    var mycontroller=this
        
                return $.ajax({  
                 url:'http://localhost:8081/register',
                 type: 'POST',
                 headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json',
               },
                 contentType: 'application/json',
                 data: JSON.stringify(transactionstring),
                 success: function(Response) {
                 console.log(JSON.stringify(Response));
                 var employeeId = Response.result;
                 console.log('employeeId', employeeId);
                 //swal(''+result+'');
                 
                 }
             })  

            
        },

        employee : function() {
            this.transitionToRoute('employee');
              }
    }
});
