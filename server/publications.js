Meteor.publish('tasks', function() {
  return Tasks.find({});
});

Meteor.publish('tags', function() {
  return Tags.find({});
});
