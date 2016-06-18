describe("d3 dashboard", function () {
  var sut, result;

  beforeEach(function () {
    sut = app;
  });

  describe("main app namespace must be defined", function () {
    it("calling mock webservice, storing data with callback", function () {
      sut.service.load('/src/mock.json', function(xhr) {
        sut.controller.storeData(JSON.parse(xhr.response));
      });
      expect(sut).toBeDefined();
    });

    it("validating version", function(){
      expect(sut.version).toBeGreaterThan(0);
    });
  });

  describe("d3 namespace must be defined, this way we know the library is included", function () {
    it("testing d3 integration",function(){
      result = d3;
      expect(result).toBeDefined();
    });
  });

  describe("MVC defintions test", function () {
    it("Model is a class defined through ES2015 standards", function () {
      result = app;
      console.log(result);
    });
  });


  afterEach(function () {
  });
});
