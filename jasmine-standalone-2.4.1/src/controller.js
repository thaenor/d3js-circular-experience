app.controller = {};

app.controller.storeData = function(data) {
    app.model = {};
    app.model.revenue = new Model
    ( data.mockObject.revenue.name,
      data.mockObject.revenue.number,
      data.mockObject.revenue.smartphone,
      data.mockObject.revenue.smartphonePercentage,
      data.mockObject.revenue.tablet,
      data.mockObject.revenue.tabletPercentage
    );

    app.model.impressions = new Model
    ( data.mockObject.impressions.name,
      data.mockObject.impressions.number,
      data.mockObject.impressions.smartphone,
      data.mockObject.impressions.smartphonePercentage,
      data.mockObject.impressions.tablet,
      data.mockObject.impressions.tabletPercentage
    );

    app.model.visits = new Model
    ( data.mockObject.visits.name,
      data.mockObject.visits.number,
      data.mockObject.visits.smartphone,
      data.mockObject.visits.smartphonePercentage,
      data.mockObject.visits.tablet,
      data.mockObject.visits.tabletPercentage
    );
}

app.controller.callView = function(r,v,i) {
    app.view.render(r,v,i);
}
