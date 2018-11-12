import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        Submit:function(){  
        console.log("115")
        var email = this.get('email');
        console.log(email);
        var password = this.get('password');
        console.log(password);

        if (email === null || email === undefined || email === "" || password === null || password === undefined || password === "") {
            // swal("please fill details for login");
            swal("Something Went Wrong", "please fill details for login!", "error");
        } else {
       console.log(email);
       console.log(password);
       var dataString = {
       "email": email,
       "password": password,
       
       }
  
    };
        console.log(JSON.stringify(dataString));
        console.log(email);
        console.log(password);
        return $.ajax({
        url:'http://localhost:4200/login',
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
        
        }
    
         })
       }

    }
});
