Session.setDefault('addingStory', false);

Template.stories.story = function() {
  return Stories.find({});
};

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
