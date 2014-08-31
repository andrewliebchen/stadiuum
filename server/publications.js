Meteor.publish('tasks', function() {
  return Tasks.find({});
});

Meteor.publish('ideas', function() {
  return Ideas.find({});
});
