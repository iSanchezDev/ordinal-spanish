# ordinal-spanish
English - Module to provide the Spanish ordinal letters following a numeral and gender.

Spanish - Módulo que permite la obtención de números ordinales mediante un número y el género.


## Installation 

```sh
$ npm install ordinal-spanish
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
