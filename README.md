# Test-helper-file-picker

This repo demonstrate the issue I faced when writing a test helper for ember-cli-file-picker. You find the test helper [here](https://github.com/jelhan/ember-cli-file-picker-helper-demo/blob/master/tests/helpers/upload-file.js).

Tests failing caused by ember run loop:
```
not ok 1 PhantomJS 2.1 - Acceptance | file: visiting /file
    ---
        actual: >
            false
        expected: >
            true
        stack: >
            http://localhost:7357/assets/test-support.js:3955:18
            exception@http://localhost:7357/assets/vendor.js:49922:9
            onerrorDefault@http://localhost:7357/assets/vendor.js:42047:33
            trigger@http://localhost:7357/assets/vendor.js:64107:19
            http://localhost:7357/assets/vendor.js:65356:40
            invoke@http://localhost:7357/assets/vendor.js:10906:20
            flush@http://localhost:7357/assets/vendor.js:10970:17
            flush@http://localhost:7357/assets/vendor.js:10771:22
            end@http://localhost:7357/assets/vendor.js:11149:30
            run@http://localhost:7357/assets/vendor.js:11271:21
            run@http://localhost:7357/assets/vendor.js:31168:32
            http://localhost:7357/assets/vendor.js:50137:36
        message: >
            TypeError: FileConstructor is not a constructor (evaluating 'new File(content, name, {})')
        Log: |

```
I would appreciate any help.
