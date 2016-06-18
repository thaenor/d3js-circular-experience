var app = {};
app.version= 0.1;
require(['lib/d3/d3','service', 'controller', 'model'], function(d3){
  app.service.load('mock.json', function(xhr) {
    app.controller.storeData(JSON.parse(xhr.response));
    app.controller.callView(app.model.revenue, app.model.impressions, app.model.visits);
  })
});
