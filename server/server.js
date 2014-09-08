// Tasks.insert({
//   title:      'Item title',
//   isCurrent:  false,
//   priority:   0,
//   totalLoe:   0,
//   averageLoe: 0,
//   loeUpdates: 0,
//   createdAt:  options.time,
//   parentId: id,
//   status: {
//     isNotStarted: true,
//     isStarted: false,
//     isStopped: false,
//     isFinished: false
//   }
// });

Meteor.methods({
  addTask : function(options) {
    Tasks.insert({
      title:      options.title,
      totalLoe:   0,
      averageLoe: 0,
      loeUpdates: 0,
      createdAt:  options.time,
      parentId:   options.parentId,
      isCurrent:  false,
      status: {
        inDevelopment: false,
        isNotStarted:  false
      }
    });
  },

  updateStateAt : function(options) {
    Tasks.update(options.id, {$set: {updateStateAt: options.updateStateAt}});
  },

  upvoteTask : function(itemId) {
    Tasks.update(itemId, {$inc: {priority: 1}});
  },

  updateLoe : function(taskId, args) {
    Tasks.update(taskId, {$inc: {
      totalLoe: args.selectedLoe,
      loeUpdates: 1
    }, $set: {averageLoe: args.averageLoe}});
  },

  startTask : function(taskId) {
    Tasks.update(taskId, {$set: {status: {isStarted: true, isNotStarted: false, isStopped: false}}});
  },

  stopTask : function(taskId) {
    Tasks.update(taskId, {$set: {status: {isStopped: true, isStarted: false}}});
  },

  finishTask : function(taskId) {
    Tasks.update(taskId, {$set: {status: {isFinished: true, isStarted: false}}});
  }

  // addTagToTask : function(tagContent) {
  //   var newTagId = Tags.insert({
  //     tag: tagContent.tagName,
  //     taskId: tagContent.taskId
  //   });
  //   Tasks.update(tagContent.taskId, {$set: {tagName: tagContent.tagName, tagId: newTagId}});
  // }
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
