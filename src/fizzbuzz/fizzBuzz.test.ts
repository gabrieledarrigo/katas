import { fizzBuzz } from "./fizzBuzz";

describe("fizzBuzz", () => {
  it("returns the number as a string when it is not divisible by 3 or 5", () => {
    const result = fizzBuzz(1);

    expect(result).toBe("1");
  });

  it("returns 'Fizz' when the number is divisible by 3", () => {
    const result = fizzBuzz(3);

    expect(result).toBe("Fizz");
  });

  it("returns 'Buzz' when the number is divisible by 5", () => {
    const result = fizzBuzz(5);

    expect(result).toBe("Buzz");
  });

  it("returns 'FizzBuzz' when the number is divisible by both 3 and 5", () => {
    const result = fizzBuzz(15);

    expect(result).toBe("FizzBuzz");
  });
});
