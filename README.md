# nepali_metric Package

**This package includes nepali digit to word conversion, nepali area conversion, nepali length conversion.**

[![npm version](https://badge.fury.io/js/nepali_metrics.svg)](https://badge.fury.io/js/nepali_metrics)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the package, use the following command:

```bash
npm install nepali_metric
```

## Usage

To use the package, use the following code

_For the Area conversion to all available units_
| Unit | Unit | Unit |
|------|------|------|
| 'khetmuri' | 'bigha' | 'kattha' |
| 'dhur' | 'ropani' | 'aana' |
| 'paisa' | 'daam' | 'sq.feet' |
| 'sq.meter' | | |

```js
const { convertFromTheMetricArea } = require("nepali_metrics");
console.log(convertFromTheMetricArea(1, "bigha")); // Outputs all units availabe.
```

_For the specific Area Conversion_

```js
const { specificConvertFromTheMetricArea } = require("nepali_metrics");
// specificConvertFromTheMetricArea(value, <data unit>, <target unit>)
console.log(specificConvertFromTheMetricArea(10, "kattha", "ropani"));
```

_For the nepali digit to word conversion_

### Upto _महासंख_

```js
const { digitToWord } = require("nepali_metrics");
console.log(digitToWord(999999));
```
