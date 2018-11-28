import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        Submit:function(){
        //this.set('type',name)
        var email=this.get('email');
        this.set("email",email);
        console.log("email",email)

        var password=this.get('password');
        this.set("password",password);
        console.log("password",password)

        if ( email === null || password === undefined ) {
         // swal("please fill details for login");
         swal("Something Went Wrong", "please fill required details before posting ideas", "error");
     } else {
         let {
           email,
           password,
         
         } = this.getProperties('email', 'password');
         console.log(email);
         console.log(password);
       
       }
        var transactionstring={
         "email": email,
         "password": password,
      
        }
        console.log("transactionstring",(transactionstring));
     //    var mycontroller=this

        return $.ajax({  
         url:'http://localhost:8081/login',
         type: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
       },
         contentType: 'application/json',
         data: JSON.stringify(transactionstring),
         success: function(Response) {
         console.log(JSON.stringify(Response));
         var message = Response.message;
         console.log('message', message);
         var employeeId = Response.employeeId;
         console.log('employeeId', employeeId);
         //swal(''+result+'');
         
         }
     })  
        
        }, 

        Submit : function() {
            this.transitionToRoute('first');
              }
    }
});
