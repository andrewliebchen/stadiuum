Meteor.methods({
  addStory : function(options) {
    Stories.insert({
      type:       'story',
      title:      options.title,
      totalLoe:   0,
      averageLoe: 0,
      loeUpdates: 0,
      time:       options.time
    });
  },

  upvoteStory : function(storyId) {
    Stories.update(storyId, {$inc: {priority: 1}});
  },

  moveStory : function(storyId) {
    Stories.update(storyId, {$set: {isCurrent: !this.isCurrent}})
  },

  updateLoe : function(storyId, args) {
    Stories.update(storyId, {$inc: {
      'totalLoe': args.selectedLoe,
      'loeUpdates': 1
    }, $set: {'averageLoe': args.averageLoe}});
  }
});

// Create a profile for new users
Accounts.onCreateUser(function(options, user) {
  if (options.profile) {
    user.profile = options.profile;
  };

  user.profile.github = {};
  user.profile.github.accessToken = user.services.github.accessToken;
  user.profile.github.email = user.services.github.email;
  user.profile.github.username = user.services.github.username;

  return user;
});