# Banking Kata

## Credits

Inspired by [Kata Log](https://kata-log.rocks/banking-kata) and [Sandro Mancuso](https://github.com/sandromancuso/Bank-kata)

## Your Task

Your bank is tired of its mainframe COBOL accounting software and they hired both of you for a greenfield project in Typescript - what a happy coincidence your favorite programming language!  
Your task is to show them that your TDD-fu and your new-age programming language can cope with good ole’ COBOL!

## Requirements

Write a class `Account` that offers the following methods: `deposit(number): number`, `withdraw(number): number`, `printStatement(): string`

An example statement would be:

```
Date            Amount      Balance
24/12/2015      500.00      500.00
23/08/2016      -100.00     400.00
```

A possible acceptance criteria:

```
Given a client makes a deposit of 1000 on 10/01/2012
And a deposit of 2000 on 13/01/2012
And a withdrawal of 500 on 14/01/2012
When she prints her bank statement
Then she would see:

Date            Amount      Balance
14/01/2012      -500.00     2500.00
13/01/2012      2000.00     3000.00
10/01/2012      1000.00     1000.00
```
