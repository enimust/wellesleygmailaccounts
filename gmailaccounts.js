
if (Meteor.isClient){

 Template.body.helpers({
   firstName: function(){
    var user = Meteor.user(); 
    if (user) {
      return user.services.google.given_name;    
    } 
   },
   
   profileURL: function() {
    var user = Meteor.user(); 
    if (user) {
      return user.services.google.picture; 
    } 
 }
});
  
  Template.allUsers.helpers({
    
    // method .find() is using "projection" to get only the fields we need
    users: function(){
      return Meteor.users.find({}, {"services.google.name": 1, 
                             "services.google.picture": 1,
                             "services.google.email" : 1});
    },
    
    username: function(){
      return this.services.google.name;
    },
    
    photoURL: function(){
      return this.services.google.picture;
    }
  })
  
}

