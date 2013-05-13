describe("FizzBuzz", function() {
  var fizzbuzz = new FizzBuzz();
  var array = fizzbuzz.loop();

  it("should return an array of 100 values", function() {
    expect(array.length).toEqual(100);
  });
  
  it("should have 1 on index 0", function() {
    expect(array[0]).toEqual(1);
  });
  
  it("should have 'Fizz' on index 2", function() {
    expect(array[2]).toEqual("Fizz");
  });
  
  it("should have 'Buzz' on index 4", function() {
    expect(array[4]).toEqual("Buzz");
  });
  
  it("should have 'FizzBuzz' on index 14", function() {
    expect(array[14]).toEqual("FizzBuzz");
  });
});
describe("FizzBuzz (with refactored code)", function() {
  var fizzbuzz = new FizzBuzz();
  var array = fizzbuzz.loop2();

  it("should return an array of 100 values", function() {
    expect(array.length).toEqual(100);
  });
  
  it("should have 1 on index 0", function() {
    expect(array[0]).toEqual(1);
  });
  
  it("should have 'Fizz' on index 2", function() {
    expect(array[2]).toEqual("Fizz");
  });
  
  it("should have 'Buzz' on index 4", function() {
    expect(array[4]).toEqual("Buzz");
  });
  
  it("should have 'FizzBuzz' on index 14", function() {
    expect(array[14]).toEqual("FizzBuzz");
  });
});