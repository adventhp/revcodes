### Install
`npm i revcodes`

### Usage
`const revcodes = require('revcodes')`;

### API
**getAll**

`revcodes.getAll()`

Returns all rev codes as an array of objects

**getOne** 

`revcodes.getOne('1000')` or `revcodes.getOne(1000)`

Returns a single rev code by id

**getMany**

`revcodes.getMany(['100', '101', '200', '205'])`

Returns an array of rev codes for each id passed.

## Introduction

This repo will serve as a list of revcodes that can be incorporated into medical billing software.

All code id's are in string format. If you pass a number, it will be converted to a string and padded with 0 until the length of the string is 4.

### Contributors

Please fork this repo and submit a PR for any corrections.
