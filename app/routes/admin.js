import Route from '@ember/routing/route';

export default Route.extend({
   
        //var query = this.get('message');
        //console.log(query,"query");
        Supply:function(){

            this.transitionToRoute('employee');
       
        }
});
