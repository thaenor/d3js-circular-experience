#D3.js dashboard exercise

this project was created to explore and study the features of d3.js and unit testing of jasmine.

the structure is as follows:

* jasmine folder will contain a copy of the code within jasmine testing system
** the copy within jasmine doesn't use require js due to compatibility issues
** to run the tests simply open SpecRunner.html (or start a simple http server from it)
* project is the bare bones source code
** to run the project simply open index.html or start a simple http server.

A simple http server is required (even though there is no server side code) because some browsers
block the usage of ajax requests on the file system. This would cause the json file to fail to load.

This project uses ES2015, canvas and svg features and due to the lack of compatibility libraries
it might not work on outdated browsers. It was tested on Google Chrome Version 51.0.2704.84

the goal was to reproduce this:
![intended result](http://i.imgur.com/ZN2kzIh.png)

*Known issues*
The "40%" and "60%" aren't displaying on the "impressions" label. This is due to a [d3.js issue regarding multiple elements in selections](https://github.com/d3/d3/issues/997#ref-commit-60f3eb9). This could be fixed using the latest alfa or [restructuring the data](http://stackoverflow.com/questions/37885144/duplicate-values-and-overlapping-selectalls-in-d3/37891699#37891699) changing the array to a key-pair dictionary, for example.
