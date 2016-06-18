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
  require(['view'],function(){
      app.view.render(r,v,i);
  })
}

app.controller.addCommas = function(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}

app.controller.getNumbers = function(){
  let numbersArray = [
    app.controller.addCommas(app.model.revenue._number+"€"),
    app.controller.addCommas(app.model.impressions._number),
    app.controller.addCommas(app.model.visits._number)
  ];
  return numbersArray;
}

app.controller.getRevenueDetails = function(){
  return [
    /*{index:1, value: */app.model.revenue._smartphonePercentage,
    /*{index:2, value: */app.controller.addCommas(app.model.revenue._smartphone),
    /*{index:3, value: */app.model.revenue._tabletPercentage,
    /*{index:4, value: */app.controller.addCommas(app.model.revenue._tablet)
  ];
}

app.controller.getImpressionsDetails = function(){
  return [
    /*{index:5, value: */app.model.impressions._smartphonePercentage,
    /*{index:6, value: */app.controller.addCommas(app.model.impressions._smartphone),
    /*{index:7, value: */app.model.impressions._tabletPercentage,
    /*{index:8, value: */app.controller.addCommas(app.model.impressions._tablet)
  ];
}

app.controller.getVisitsDetails = function(){
  return [
    /*{index:9, value: */app.model.visits._smartphonePercentage,
    /*{index:10, value:*/app.controller.addCommas(app.model.visits._smartphone),
    /*{index:11, value:*/app.model.visits._tabletPercentage,
    /*{index:12, value:*/app.controller.addCommas(app.model.visits._tablet)
  ];
}
