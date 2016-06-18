describe("d3 dashboard", function () {
  let sut, result;

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
    it("testing d3 integration",function () {
      result = d3;
      expect(result).toBeDefined();
    });
  });

  it("test for comma separated values", function () {
    result = app.controller.addCommas(2000000);
    expect(result).toBe("2.000.000");
  });

  afterEach(function () {
  });
});
