Session.setDefault('addingStory', false);

Template.stories.story = function() {
  return Stories.find({}, {sort: {'priority': -1}});
};

Template.storyItem.avatarUrl = function() {
  return Gravatar.imageUrl(Meteor.user().profile.github.email);
}

Template.storyItem.events({
  'click .mrt_upvote-story' : function(event, template) {
    Meteor.call('upvoteStory', this._id);
  }
});

Template.newStory.events({
  'click #mrt_addStory' : function(event, template) {
    var storyTitle = template.find('#mrt_newStoryTitle');
    console.log(storyTitle.value);

    var newStory = {
      title: storyTitle.value,
      time:  Date.now()
    };

    if(storyTitle.value != '') {
      Meteor.call('addStory', newStory, function(err, id) {
        if(err) {
          console.log(err);
        }
      });
      storyTitle.value = '';
    }
  }
});
