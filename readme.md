# D3.js dashboard exercise #

this project was created to explore and study the features of d3.js and unit testing of jasmine.
**development time: 1 week**

the structure is as follows:
* jasmine folder will contain a copy of the code within jasmine testing system
    - the copy within jasmine doesn't use require js due to compatibility issues
    - to run the tests simply open SpecRunner.html (or start a simple http server from it)
    - [live version](https://thaenor.github.io/d3js-circular-experience/jasmine-standalone-2.4.1/SpecRunner.html) - **only tested on Chrome**

* project folder is the bare bones source code
    - to run the project simply open index.html or start a simple http server.
    - [live version](https://thaenor.github.io/d3js-circular-experience/project) - **only tested on Chrome**

![live version (as seen on Chrome)](http://i.imgur.com/cFU2acK.png)

*A simple http server is required (even though there is no server side code) because some browsers
block the usage of ajax requests on the file system. This would cause the json file to fail to load.*

## libraries used ##
- [require.js](requirejs.org)
- [d3](https://d3js.org/)
- [jasmine 2.4](http://jasmine.github.io/) (for unit testing)

This project uses ES2015 and svg features. It doesn't rely on any other librarie like angular or jQuery in order for a faster and lighter code.
for this reason it lacks in polyfills and fallbacks for svg usage. It might not work on outdated browsers. It was tested on [*Google Chrome Version 51.0.2704.84*](https://www.google.com/chrome)

the goal was to reproduce this graphic:
![intended result](http://i.imgur.com/ZN2kzIh.png)

## Known issues ##

- The "40%" and "60%" aren't displaying on the "impressions" label.
    - This is due to a [d3.js issue regarding multiple elements in selections](https://github.com/d3/d3/issues/997#ref-commit-60f3eb9).
    - It could be fixed using the latest alfa or [restructuring the data](http://stackoverflow.com/questions/37885144/duplicate-values-and-overlapping-selectalls-in-d3/37891699#37891699) changing the array to a key-pair dictionary, for example.

## Jasmine tests ##

![live version (as seen on Chrome)](http://i.imgur.com/5U5gLvV.png)

A few cases are tested through jasmine
- mock webservice (reaching a json file via ajax)
- version validation
- d3 library incorporation
- utility function to create comma separated values (e.g 2000 becomes 2.000)

NOTE: the source code used in the jasmine test engine is slightly different, it doesn't rely on require js. This happens because both libraries would require some tempering in order to work together. the javascript files are manually included in jasmine but the logic works just the same. (it can even render the svg figures within the test engine)
