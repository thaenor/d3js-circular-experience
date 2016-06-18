//the namespace for the view will function similarly to a class
app.view = {};
//artifacts will serve as storage for the rendered elements in case they need to be acessible in the future
app.view.artifacts = {};
app.view.constants = {};
app.view.constants.green = "rgb(139,212,67)";
app.view.constants.blue = "rgb(112,201,231)";
app.view.constants.yellow = "rgb(241,169,39)";
app.view.constants.lightGrey = "rgb(174,174,174)";

//function to render text elements in the canvas. Used for the titles in the center of the circle
//the lables "smartphone" and "tablet" as well as the numbers in the center of the circle
app.view.renderTextLabels = function(x,y,textlabel,color,size){
  let appendingLabels = app.view.artifacts.canvas.append("text")
                        .attr("x",x)
                        .attr("y",y)
                        .attr("font-family","sans-serif")
                        .attr("font-size",size)
                        .attr("fill",color)
                        .text(textlabel);
  return appendingLabels;
}

//function to render the circles
app.view.renderCircle = function(x,y,strokeColor){
  let circle = app.view.artifacts.canvas.append("circle")
                .attr("cx",x)
                .attr("cy",y)
                .attr("r",75)
                .attr("stroke",strokeColor)
                .attr("stroke-width","10")
                .attr("fill","white");
  return circle;
}

app.view.renderDonut = function(x,y,strokeColor,radius, angle){
  //let group = app.view.artifacts.canvas.append("g").attr("transform","translate("+x+","+y+")");

  let arc = d3.svg.arc()
  .innerRadius(radius)
  .outerRadius(radius-10)
  .startAngle(0)
  .endAngle(angle);

  app.view.artifacts.canvas.append("svg:path").attr("d",arc).attr("fill",strokeColor).attr("transform","translate("+x+","+y+")");

  //app.view.artifacts.canvas.append("path").attr("d",arc);
}

//function to render the number details (percentage and prices)
//I've used a specific function to handle the position of the elements
app.view.renderDetails = function(x,nArray){
  let subtitles = app.view.artifacts.canvas.selectAll("text")
                        .data(nArray, function(d){return d;})
                        .enter()
                          .append("text")
                          .attr("x", function(d,i){
                            switch (i) {
                              case 0:
                                return x-140;
                              case 1:
                                return x-110;
                              case 2:
                                return x+50;
                              case 3:
                                return x+80;
                            }
                          })
                          .attr("y",250+120)
                          .attr("font-family","sans-serif")
                          .attr("font-size","12px")
                          .attr("fill", function(d,i){ if(i%2!=0) {return app.view.constants.lightGrey} else {return "black"} })
                          .text(function(d,i){
                            if(i%2 == 0) {return d+"%"}
                            else {return d+"€"}
                          });
  let linePath = [
    {x:x-140, y:250+130},
    {x:x+130, y:250+130}];
  app.view.renderLine(linePath,app.view.constants.lightGrey)
};

//function to plot lines
app.view.renderLine = function(pathinfo,color){
  if(typeof color === typeof undefined){ color = "steelblue"}
  // Specify the function for generating path data
  let d3line2 = d3.svg.line()
                  .x(function(d){return d.x;})
                  .y(function(d){return d.y;})
                  .interpolate("linear");
                  // "linear" for piecewise linear segments
  // Creating path using data in pathinfo and path data generator
  // d3line.
  let line = app.view.artifacts.canvas.append("svg:path")
      .attr("d", d3line2(pathinfo))
      .style("stroke-width", 2)
      .style("stroke", color)
      .style("fill", "none");
  return line;
};

//helper function to add comma separators to numbers
function addCommas(nStr) {
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

/******************************************************************************/
//main render function
app.view.render = function(revenue, impressions, visits) {
  //A simple test to prove data is coming from the controller
  d3.select("body").append("p").text("Good news everyone! "+revenue._number);

  //declaring the base svg canvas element
  app.view.artifacts.canvas = d3.select("body")
                .append("svg")
                .attr("width",1500)
                .attr("height",800);
  //let circleList= []; //I will store the created elements in an array in the event I may need them in the future
  let xcoord = 250, ycoord = 250; //center of the first circle
  let colorArray = [app.view.constants.green, app.view.constants.blue, app.view.constants.yellow];

  //rendering the 3 circles
  //for(let i=0; i<3; i++){
  //  circleList[i] = app.view.renderCircle(xcoord,ycoord,colorArray[i]);
  //  xcoord += 330;
  //}

  //rendering the number in the center of the circle
  let centerTextArr = [addCommas(revenue._number+"€"), addCommas(impressions._number), addCommas(visits._number)];
  let centerText = [];
  xcoord = 200; ycoord = 270;
  //this for loop drew the labels correctly but with some offset because of the size of the content
  /*for(let i=0; i<3; i++){
    centerText[i] = app.view.renderTextLabels(xcoord,ycoord,centerTextArr[i],"black","20px");
    xcoord += 350;
  }*/
  //As such, for a more pleasant visual result I'm setting the coordinates manually
  centerText[0] = app.view.renderTextLabels(210,270,centerTextArr[0],"black","20px");
  centerText[1] = app.view.renderTextLabels(540,270,centerTextArr[1],"black","20px");
  centerText[2] = app.view.renderTextLabels(860,270,centerTextArr[2],"black","20px");

  //drawing the title text "revenue", "impressions" and "visits"
  app.view.renderTextLabels(210,230,revenue._name,app.view.constants.lightGrey,"18px");
  app.view.renderTextLabels(200+320,230,impressions._name,app.view.constants.lightGrey,"18px");
  app.view.renderTextLabels(210+340+340,230,visits._name,app.view.constants.lightGrey,"18px");

  xcoord = 120; ycoord=350;
  let subLabels = [];
  for (var i = 0; i < 6; i++) {
    if(i%2 == 0){ subLabels[i] = app.view.renderTextLabels(xcoord,ycoord,"Tablet","black","15px"); xcoord += 180}
    else { subLabels[i] = app.view.renderTextLabels(xcoord,ycoord,"Smartphone","black","15px"); xcoord += 150;}
  }

  //coloring labels
  subLabels[0].attr("fill",app.view.constants.green);
  subLabels[1].attr("fill","rgb(64,103,21)");
  subLabels[2].attr("fill",app.view.constants.blue);
  subLabels[3].attr("fill","rgb(49,85,101)");
  subLabels[4].attr("fill",app.view.constants.yellow);
  subLabels[5].attr("fill","rgb(190,90,23)");

  //adddind details beneath the arcs,tablet and smartphone percentages
  let data = [revenue._smartphonePercentage, addCommas(revenue._smartphone), revenue._tabletPercentage, addCommas(revenue._tablet)];
  app.view.renderDetails(260,data);
  data = [impressions._smartphonePercentage, addCommas(impressions._smartphone), impressions._tabletPercentage, addCommas(impressions._tablet)];
  app.view.renderDetails(240+340,data);
  data = [visits._smartphonePercentage, addCommas(visits._smartphone), visits._tabletPercentage, addCommas(visits._tablet)];
  app.view.renderDetails(240+340+340,data);

  let pathinfo = [
    {x:190, y:290},
    {x:230, y:285},
    {x:240, y:270},
    {x:250, y:285},
    {x:260, y:270},
    {x:270, y:290},
    {x:280, y:275},
    {x:290, y:295},
    {x:300, y:260},
    {x:310, y:300},
    {x:320, y:260}
  ];
  let pathLines = [];
  for(let j=0; j<3; j++){
    for(let i=0; i<pathinfo.length; i++){
      j != 0 ? pathinfo[i].x += 330 :"";
    }
    pathLines[j] = app.view.renderLine(pathinfo,colorArray[j]);
  }

  app.view.renderDonut(250,250,app.view.constants.green,85,Math.PI*2);
  app.view.renderDonut(250,250,"rgb(64,103,21)",85,Math.PI*2-4);

  app.view.renderDonut(250+330,250,app.view.constants.blue,85,Math.PI*2);
  app.view.renderDonut(250+330,250,"rgb(49,85,101)",85,Math.PI+1);

  app.view.renderDonut(250+330+330,250,app.view.constants.yellow,85,Math.PI*2);
  app.view.renderDonut(250+330+330,250,"rgb(190,90,23)",85,Math.PI*2-5);
}//end app.view.render function
