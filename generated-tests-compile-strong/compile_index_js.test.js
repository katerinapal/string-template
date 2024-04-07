describe("../evaluationProjects/string-template/index.js:5:1:36:1", () => {
  test("invoc-loc:79:30:79:69-test:0", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/string-template/compile.js:1:1:1:33
    var template = require("../index.js");
    var arg0 = "\"{0}\"";
    var arg1 = "Hello \\u2028";
    var actualResult = template(arg0, arg1);
    var expectedResult = "\"Hello \\u2028\"";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:81:30:81:70-test:1", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/string-template/compile.js:1:1:1:33
    var template = require("../index.js");
    var arg0 = "(result = args.hasOwnProperty(\"{0}\") ? args[\"{0}\"] : null, \n        (result === null || result === undefined) ? \"\" : result)";
    var arg1 = "0";
    var actualResult = template(arg0, arg1);
    var expectedResult = "(result = args.hasOwnProperty(\"0\") ? args[\"0\"] : null, \n        (result === null || result === undefined) ? \"\" : result)";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:79:30:79:69-test:2", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/string-template/compile.js:1:1:1:33
    var template = require("../index.js");
    var arg0 = "\"{0}\"";
    var arg1 = ", how are you?";
    var actualResult = template(arg0, arg1);
    var expectedResult = "\", how are you?\"";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:86:30:86:67-test:3", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/string-template/compile.js:1:1:1:33
    var template = require("../index.js");
    var arg0 = "    var args\n    var result\n    if (arguments.length === 1 && typeof arguments[0] === \"object\") {\n        args = arguments[0]\n    } else {\n        args = arguments    }\n\n    if (!args || !(\"hasOwnProperty\" in args)) {\n       args = {}\n    }\n\n    return {0}";
    var arg1 = "\"Hello \\u2028\" +\n    (result = args.hasOwnProperty(\"0\") ? args[\"0\"] : null, \n        (result === null || result === undefined) ? \"\" : result) +\n    \", how are you?\"";
    var actualResult = template(arg0, arg1);
    var expectedResult = "    var args\n    var result\n    if (arguments.length === 1 && typeof arguments[0] === \"object\") {\n        args = arguments[0]\n    } else {\n        args = arguments    }\n\n    if (!args || !(\"hasOwnProperty\" in args)) {\n       args = {}\n    }\n\n    return \"Hello \\u2028\" +\n    (result = args.hasOwnProperty(\"0\") ? args[\"0\"] : null, \n        (result === null || result === undefined) ? \"\" : result) +\n    \", how are you?\"";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:79:30:79:69-test:4", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/string-template/compile.js:1:1:1:33
    var template = require("../index.js");
    var arg0 = "\"{0}\"";
    var arg1 = "Hello \\u2029";
    var actualResult = template(arg0, arg1);
    var expectedResult = "\"Hello \\u2029\"";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:86:30:86:67-test:5", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/string-template/compile.js:1:1:1:33
    var template = require("../index.js");
    var arg0 = "    var args\n    var result\n    if (arguments.length === 1 && typeof arguments[0] === \"object\") {\n        args = arguments[0]\n    } else {\n        args = arguments    }\n\n    if (!args || !(\"hasOwnProperty\" in args)) {\n       args = {}\n    }\n\n    return {0}";
    var arg1 = "\"Hello \\u2029\" +\n    (result = args.hasOwnProperty(\"0\") ? args[\"0\"] : null, \n        (result === null || result === undefined) ? \"\" : result) +\n    \", how are you?\"";
    var actualResult = template(arg0, arg1);
    var expectedResult = "    var args\n    var result\n    if (arguments.length === 1 && typeof arguments[0] === \"object\") {\n        args = arguments[0]\n    } else {\n        args = arguments    }\n\n    if (!args || !(\"hasOwnProperty\" in args)) {\n       args = {}\n    }\n\n    return \"Hello \\u2029\" +\n    (result = args.hasOwnProperty(\"0\") ? args[\"0\"] : null, \n        (result === null || result === undefined) ? \"\" : result) +\n    \", how are you?\"";
    expect(expectedResult).toBe(actualResult);
  });
});

