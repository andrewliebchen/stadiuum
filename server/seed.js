Meteor.startup(function () {
  Stories.remove({});

  if(Stories.find().count() === 0) {
    Stories.insert({
      type:       'story',
      title:      "As a developer, I'd like to add stories to a current section, so that I can know what stories people are working on",
      totalLoe:   0,
      averageLoe: 0,
      loeUpdates: 0,
      isCurrent:  true,
      status: {
        notStarted: true
      },
      time:   Date.now()
    });

    Stories.insert({
      type:       'story',
      title:      "As a developer, I'd like to be able to add dividers between stories, so that I can plan sprints however I want",
      totalLoe:   0,
      averageLoe: 0,
      loeUpdates: 0,
      isCurrent:  false,
      status: {
        notStarted: true
      },
      time:   Date.now()
    });

    Stories.insert({
      type:       'story',
      title:      "As a developer, I'd like to be able to drag and drop stories to reorder them, so that I can add and remove stories from sections I want",
      totalLoe:   0,
      averageLoe: 0,
      loeUpdates: 0,
      isCurrent:  false,
      status: {
        notStarted: true
      },
      time:   Date.now()
    });

    Stories.insert({
      type:       'story',
      title:      "As a developer, I'd like to be able to sort the list of stories in different ways, so I can get different views of my queue",
      totalLoe:   0,
      averageLoe: 0,
      loeUpdates: 0,
      isCurrent:  false,
      status: {
        notStarted: true
      },
      time:   Date.now()
    });
  };
});
