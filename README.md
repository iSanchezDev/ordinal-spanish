# ordinal-spanish
Module to provide the Spanish ordinal letters following a numeral.

[![npm version](https://badge.fury.io/js/0.1.0.svg)](https://badge.fury.io/js/0.1.0)


## Installation 

```sh
$ npm install
```

## Usage
```
import ordinal from 'ordinal-spanish';

ordinal(number, gender); 
```

- *Numbers can be between `1 and 1000`*

- *Gender is assignable to `male` (default) or `female`.*

## Example
```
ordinal(785, 'female');

=> septingentésima octogésima quinta
```
