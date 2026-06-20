import { Account } from "./Account";

describe("Account", () => {
  describe("deposit", () => {
    it("should throw", () => {
      const account = new Account();

      expect(() => account.deposit(100)).toThrow(Error);
    });
  });

  describe("withdraw", () => {
    it("should throw", () => {
      const account = new Account();

      expect(() => account.withdraw(100)).toThrow(Error);
    });
  });

  describe("printStatement", () => {
    it("should throw", () => {
      const account = new Account();

      expect(() => account.printStatement()).toThrow(Error);
    });
  });
});
