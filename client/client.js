Session.setDefault('addingStory', false);

Template.stories.story = function() {
  return Stories.find({}, {sort: {'priority': -1}});
};

Template.storyItem.avatarUrl = function() {
  return Gravatar.imageUrl(Meteor.user().profile.github.email);
}

Template.storyItem.events({
  'click .mtr_upvote-story' : function(event, template) {
    Meteor.call('upvoteStory', this._id);
  },

  'click .mtr_toggle-loe' : function(event, template) {
    var story = Stories.findOne(this._id); // Does this get fixed with subscribe?
    var selectedLoe = $(event.target).data('loe');
    var averageLoe = (story.totalLoe + selectedLoe) / (story.loeUpdates + 1)
    Meteor.call('updateLoe', this._id, {
      selectedLoe: selectedLoe,
      averageLoe: averageLoe
    });
  }
});

Template.newStory.events({
  'click #mtr_addStory' : function(event, template) {
    var storyTitle = template.find('#mtr_newStoryTitle');
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
