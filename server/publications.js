Meteor.publish('stories', function() {
  return Stories.find({});
});

Meteor.publish('tags', function() {
  return Tags.find({});
});
