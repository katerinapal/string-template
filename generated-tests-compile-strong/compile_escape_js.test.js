describe("../evaluationProjects/string-template/escape.js:3:1:6:1", () => {
  test("invoc-loc:79:56:79:68-test:0", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/string-template/compile.js:4:1:4:35
    var escape = require("../escape.js");

    var arg0 = "Hello 
    ";

    var actualResult = escape(arg0);
    var expectedResult = "Hello \\u2028";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:81:52:81:69-test:1", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/string-template/compile.js:4:1:4:35
    var escape = require("../escape.js");
    var arg0 = "0";
    var actualResult = escape(arg0);
    var expectedResult = "0";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:79:56:79:68-test:2", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/string-template/compile.js:4:1:4:35
    var escape = require("../escape.js");
    var arg0 = ", how are you?";
    var actualResult = escape(arg0);
    var expectedResult = ", how are you?";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:79:56:79:68-test:3", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/string-template/compile.js:4:1:4:35
    var escape = require("../escape.js");

    var arg0 = "Hello 
    ";

    var actualResult = escape(arg0);
    var expectedResult = "Hello \\u2029";
    expect(expectedResult).toBe(actualResult);
  });
});

