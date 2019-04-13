# ordinal-spanish
Module to provide the Spanish ordinal letters following a numeral.


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
