Meteor.publish('tasks', function() {
  return Items.find({type: 'task', 'status.isFinished': null});
});

Meteor.publish('ideas', function() {
  return Items.find({type: 'idea'});
});
