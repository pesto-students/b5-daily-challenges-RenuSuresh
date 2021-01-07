import { map, filter, invert, merge, all, some } from "./objectUtils";

// write your own test cases

describe("object invert function", () => {
  test("simple obj", () => {
    const obj = { a: 65, b: 66, c: 67 };
    const expectation = { 65: "a", 66: "b", 67: "c" };
    expect(invert(obj)).toEqual(expectation);
  });
  test("with function in obj", () => {
    const greet = () => {
      return "hi";
    };
    const obj = {
      a: 65,
      b: 66,
      c: 67,
      greet,
    };
    const expectation = {
      65: "a",
      66: "b",
      67: "c",
      greet,
    };
    expect(invert(obj)).toEqual(expectation);
  });
  test("with an array in obj value", () => {
    const obj = {
      a: 65,
      b: 66,
      c: 67,
      d: [1, 2, 3],
    };
    const expectation = {
      65: "a",
      66: "b",
      67: "c",
      "1,2,3": "d",
    };
    expect(invert(obj)).toEqual(expectation);
  });
});

describe("object merge function", () => {
  const greet = () => {
    return "hi";
  };
  test("simple merge obj", () => {
    const obj1 = { a: 65, b: 66, c: 67 };
    const obj2 = { d: 68, e: 69 };

    const expectation = { a: 65, b: 66, c: 67, d: 68, e: 69 };
    expect(merge(obj1, obj2)).toEqual(expectation);
  });

  test("with an array in obj value", () => {
    const obj1 = { a: 65, b: 66, c: 67 };
    const obj2 = { d: 68, e: [1, 2, 3, 4] };

    const expectation = { a: 65, b: 66, c: 67, d: 68, e: [1, 2, 3, 4] };
    expect(merge(obj1, obj2)).toEqual(expectation);
  });

  test("with function in obj", () => {
    const obj1 = { a: 65, b: 66, c: 67 };
    const obj2 = { d: 68, e: [1, 2, 3, 4], greet };
    const expectation = { a: 65, b: 66, c: 67, d: 68, e: [1, 2, 3, 4], greet };
    expect(merge(obj1, obj2)).toEqual(expectation);
  });
});

describe("filter object function", () => {
  test("value greater than 2", () => {
    const obj = { a: 1, b: 66, c: 67 };
    const expectation = { b: 66, c: 67 };
    expect(filter(obj, ([key, value]) => value > 2)).toEqual(expectation);
  });

  test("value is number", () => {
    const obj = { a: "someString", b: 66, c: "67" };
    const expectation = { b: 66, c: "67" };
    expect(filter(obj, ([key, value]) => !isNaN(value))).toEqual(expectation);
  });
});

describe("filter object function", () => {
  test("value greater than 2", () => {
    const obj = { a: 1, b: 66, c: 67 };
    const expectation = { b: 66, c: 67 };
    expect(filter(obj, ([key, value]) => value > 2)).toEqual(expectation);
  });

  test("value is number", () => {
    const obj = { a: "someString", b: 66, c: "67" };
    const expectation = { b: 66, c: "67" };
    expect(filter(obj, ([key, value]) => !isNaN(value))).toEqual(expectation);
  });

  it("should throw an error", () => {
    const obj = undefined;
    const greet = () => "hi";
    expect(() => {
      filter(obj, greet);
    }).toThrow();
  });
});

describe("map object function", () => {
  it("should double the number", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const expectation = { a: 2, b: 4, c: 6 };
    expect(map(obj, ([key, value]) => [key, value * 2])).toEqual(expectation);
  });
  it("should double the number and capitalize key", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const expectation = { A: 2, B: 4, C: 6 };
    expect(map(obj, ([key, value]) => [key.toUpperCase(), value * 2])).toEqual(
      expectation
    );
  });

  it("should throw an error", () => {
    const obj = undefined;
    const greet = () => "hi";
    expect(() => {
      map(obj, greet);
    }).toThrow();
  });
});

describe("some object function", () => {
  test("if any value greater than 2 present", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const expectation = true;
    expect(some(obj, (key, value) => value > 2)).toEqual(expectation);
  });
  test("some keys are string", () => {
    const greet = () => "hi";

    const obj = { a: 1, b: 2, c: 3, greet };
    const expectation = true;
    expect(some(obj, (key, value) => typeof key == "string")).toEqual(
      expectation
    );
  });

  it("should throw an error", () => {
    const obj = null;
    const greet = () => "hi";
    expect(() => {
      some(obj, greet);
    }).toThrow();
  });
});
describe("All object function", () => {
  test("if all value greater than 2 present", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const expectation = false;
    expect(all(obj, (key, value) => value > 2)).toEqual(expectation);
  });
  test("all keys are string", () => {
    const greet = () => "hi";

    const obj = { a: 1, b: 2, c: 3, greet };
    const expectation = true;
    expect(all(obj, (key, value) => typeof key == "string")).toEqual(
      expectation
    );
  });

  it("should throw an error", () => {
    const obj = null;
    const greet = () => "hi";
    expect(() => {
      all(obj, greet);
    }).toThrow();
  });
});
