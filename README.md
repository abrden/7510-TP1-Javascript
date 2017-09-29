# Simple Logic Interpreter [![Build Status](https://travis-ci.org/abrden/7510-TP1-Javascript.svg?branch=master)](https://travis-ci.org/abrden/7510-TP1-Javascript)

A Javascript library designed to serve as a logic interpreter.

## Prerequisites

- node v6.10.0 or greater
- npm v3.10.10 or greater

## Install
```
$ npm install
```

## Tests
```
$ npm test
```

## Usage
Clone the project
```
$ git clone https://github.com/abrden/7510-TP1-Javascript.git
$ cd 7510-TP1-Javascript/
```
Write your database a file (there's some examples [here](https://github.com/abrden/7510-TP1-Javascript/tree/master/test/files)) and run the interpreter with it's path.
For example:
```
$ .. test/files/number_database.txt
```
Make any query
```
add(2,2,1)
(SLI) false
```
Malformed queries return nil
```
Hi!
(SLI)
```
Press 'q' to exit.
```
q
(SLI) Exiting
```

## License