export class Account {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deposit(_amount: number): number {
    throw new Error("Not implemented");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  withdraw(_amount: number): number {
    throw new Error("Not implemented");
  }

  printStatement(): string {
    throw new Error("Not implemented");
  }
}
