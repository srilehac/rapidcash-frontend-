import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        admin:function(){
            this.transitionToRoute('admin');
        },

        employee:function(){
            this.transitionToRoute('employee');
        }
    }
});
