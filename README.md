# cdk-aspects-removal-policy

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> Apply RemovalPolicy using aws-cdk aspects.

## Install

```bash
npm i -D cdk-aspects-removal-policy
```

## Usage

```ts
import { App, Aspects, RemovalPolicy } from 'aws-cdk-lib';
import { ApplyRemovalPolicy } from 'cdk-aspects-removal-policy';
import { StatelessStack } from './YourStatelessStack';
import { StatefulStack } from './YourStatefulStack';

const app = new App();
const statefulStack = new StatefulStack(app, 'StatefulStack');
const statelessStack = new StatelessStack(app, 'StatelessStack');

// Apply RemovalPolicy.
Aspects.of(statefulStack).add(new ApplyRemovalPolicy(RemovalPolicy.RETAIN));
Aspects.of(statelessStack).add(new ApplyRemovalPolicy(RemovalPolicy.DESTROY));

app.synth();
```

[build-img]: https://github.com/masahirompp/cdk-aspects-removal-policy/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/masahirompp/cdk-aspects-removal-policy/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/cdk-aspects-removal-policy
[downloads-url]: https://www.npmtrends.com/cdk-aspects-removal-policy
[npm-img]: https://img.shields.io/npm/v/cdk-aspects-removal-policy
[npm-url]: https://www.npmjs.com/package/cdk-aspects-removal-policy
[issues-img]: https://img.shields.io/github/issues/masahirompp/cdk-aspects-removal-policy
[issues-url]: https://github.com/masahirompp/cdk-aspects-removal-policy/issues
[codecov-img]: https://codecov.io/gh/masahirompp/cdk-aspects-removal-policy/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/masahirompp/cdk-aspects-removal-policy
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
