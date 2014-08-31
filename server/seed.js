Meteor.startup(function () {
  Tasks.remove({});
  Ideas.remove({});

  if(Tasks.find().count() === 0) {
    Tasks.insert({
      type:       'story',
      title:      "As a developer, I'd like to add stories to a current section, so that I can know what stories people are working on",
      totalLoe:   0,
      averageLoe: 0,
      loeUpdates: 0,
      isCurrent:  true,
      createdAt:  Date.now(),
      status: {
        isNotStarted: true
      }
    });

    Tasks.insert({
      type:       'story',
      title:      "As a developer, I'd like to be able to add dividers between stories, so that I can plan sprints however I want",
      totalLoe:   0,
      averageLoe: 0,
      loeUpdates: 0,
      isCurrent:  false,
      createdAt:  Date.now(),
      status: {
        isNotStarted: true
      }
    });

    Tasks.insert({
      type:       'story',
      title:      "As a developer, I'd like to be able to drag and drop stories to reorder them, so that I can add and remove stories from sections I want",
      totalLoe:   0,
      averageLoe: 0,
      loeUpdates: 0,
      isCurrent:  false,
      createdAt:  Date.now(),
      status: {
        isNotStarted: true
      }
    });

    Tasks.insert({
      type:       'story',
      title:      "As a developer, I'd like to be able to sort the list of stories in different ways, so I can get different views of my queue",
      totalLoe:   0,
      averageLoe: 0,
      loeUpdates: 0,
      isCurrent:  false,
      createdAt:  Date.now(),
      status: {
        isNotStarted: true
      }
    });
  };
});
