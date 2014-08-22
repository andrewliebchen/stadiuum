Session.setDefault('addingStory', false);

Template.current.story = function() {
  return Stories.find({isCurrent: true}, {sort: {'priority': -1}});
};


Template.backlog.story = function() {
  return Stories.find({isCurrent: false}, {sort: {'priority': -1}});
};


Template.storyItem.avatarUrl = function() {
  return Gravatar.imageUrl(Meteor.user().profile.github.email);
};

Template.storyItem.events({
  'click .mtr_upvote-story' : function() {
    Meteor.call('upvoteStory', this._id);
  },

  'click .mtr_toggle-loe' : function(event) {
    var story = Stories.findOne(this._id); // Does this get fixed with subscribe?
    var selectedLoe = $(event.target).data('loe');
    var averageLoe = (story.totalLoe + selectedLoe) / (story.loeUpdates + 1)
    Meteor.call('updateLoe', this._id, {
      selectedLoe: selectedLoe,
      averageLoe: averageLoe
    });
  },

  'click .mtr_move-story' : function() {
    Meteor.call('moveStory', this._id);
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
      Meteor.call('addStory', newStory, function(error, id) {
        if(error) {
          console.log(error);
        }
      });
      storyTitle.value = '';
    }
  }
});