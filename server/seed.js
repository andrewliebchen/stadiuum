Meteor.startup(function () {
  if(Ideas.find().count() === 0) {
    Ideas.insert({
      tag:  'stories',
      description: 'Users should be able to create implementable stories from ideas. Stories could be displayed with the idea. Progress on the stories should somehow roll up to the idea',
      time:   Date.now()
    });
  };
});
