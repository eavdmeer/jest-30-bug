# jest-30-bug
Minimal code set to demonstrate jest v30 bug

## Steps to reproduce
- Use a system running MacOS 15.5 on ARM.
- Clone this repostitory: git clone 'https://github.com/eavdmeer/jest-30-bug/'.
- Run 'npm install'.
- Run 'npm test'.

## What happens

Initial run of npm fails with error output:
```
$ npm test

> jest-30-bug@1.0.0 test
> jest --env node --passWithNoTests

[napi-postinstall@0.3.0] Trying to install package "@unrs/resolver-binding-darwin-arm64" using npm
● Validation Error:

  Module /Users/qy69gz/Developer/jest-30-bug/node_modules/jest-circus/build/runner.js in the testRunner option was not found.
         <rootDir> is: /Users/qy69gz/Developer/jest-30-bug

  Configuration Documentation:
  https://jestjs.io/docs/configuration
```

## What should happen
There should be output showing a successful test:
```
$ npm test

> jest-30-bug@1.0.0 test
> jest --env node --passWithNoTests

 PASS  ./index.test.js
  add tester
    ✓ add two numbers (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.147 s, estimated 1 s
Ran all test suites.
```

## Workaround
Running `npm test` a second time (and any subsequent times) produces the correct result. However, running it from any kind of subshell (like Apache ant) will have it fail every single time.

Manually adding a devDependency for `@unrs/resolver-binding-darwin-arm64` **before** running `npm install`, will make `npm test` run correctly immediately after install.

## What happens
