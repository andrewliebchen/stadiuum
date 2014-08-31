Template.upvote.events({
  'click .mtr_upvote' : function() {
    Meteor.call('upvoteItem', this._id);
  }
});
