Meteor.methods({
  addStory : function(options) {
    Stories.insert({
      type:       'story',
      title:      options.title,
      totalLoe:   0,
      averageLoe: 0,
      loeUpdates: 0,
      createdAt:  options.time
    });
  },

  updateStateAt : function(options) {
    Stories.update(options.id, {$set: {updateStateAt: options.updateStateAt}});
  },

  upvoteStory : function(storyId) {
    Stories.update(storyId, {$inc: {priority: 1}});
  },

  updateLoe : function(storyId, args) {
    Stories.update(storyId, {$inc: {
      totalLoe: args.selectedLoe,
      loeUpdates: 1
    }, $set: {averageLoe: args.averageLoe}});
  },

  startStory : function(storyId) {
    Stories.update(storyId, {$set: {status: {isStarted: true, isNotStarted: false, isStopped: false}}});
  },

  stopStory : function(storyId) {
    Stories.update(storyId, {$set: {status: {isStopped: true, isStarted: false}}});
  },

  finishStory : function(storyId) {
    Stories.update(storyId, {$set: {status: {isFinished: true, isStarted: false}}});
  },

  addTagToStory : function(tagContent) {
    var newTagId = Tags.insert({
      tagName: tagContent.tagName,
      storyId: tagContent.storyId
    });
    Stories.update(tagContent.storyId, {$set: {tagName: tagContent.tagName, tagId: newTagId}});
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
