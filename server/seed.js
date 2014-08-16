Meteor.startup(function () {
  Stories.remove({});

  if(Stories.find().count() === 0) {
    Stories.insert({
      title:      'Nice work, dood!',
      totalLoe:   0,
      averageLoe: 0,
      loeUpdates: 0,
      time:   Date.now()
    });
  };
});
