# VueJS Bug Reproduction

## KeepAlive include/exclude parameters do not work as expected for asynchronously loaded router views [#7533](https://github.com/vuejs/core/issues/7533)

### Steps to reproduce
In the example repo, there are 3 router links that switch between 3 asynchronously loaded route components - Home, About, Contact. Keep-alive is used to wrap the loaded router view components. Each component contains an input bound to an internal state variable in order to establish state changes for each component.

### What is expected?
Case 1: Keep-Alive is used without parameters
- The state for each component should be maintained between router view changes.

Case 2: Keep-Alive is used with parameter: :include="['about']"
- The state for the About component should be maintained between router view changes.
- The state for the other 2 components should be reset between router view changes.

Case 3: Keep-Alive is used with parameter: :exclude="['about']"
- The state for the About component should be reset between router view changes.
- The state for the other 2 components should be maintained between router view changes.

### What is actually happening?
Case 1: Works as expected.

Case 2: The state is reset for all components

Case 3: The state is maintained for all components

### System Info
```
System:
    OS: Windows 10 10.0.19045
    CPU: (8) x64 Intel(R) Core(TM) i7-3770 CPU @ 3.40GHz
    Memory: 15.87 GB / 31.96 GB
  Binaries:
    Node: 16.14.0 - C:\Program Files\nodejs\node.EXE
    npm: 9.2.0 - C:\Program Files\nodejs\npm.CMD
  Browsers:
    Chrome: 108.0.5359.125
    Edge: Spartan (44.19041.1266.0), Chromium (108.0.1462.76)
    Internet Explorer: 11.0.19041.1566
  npmPackages:
    vue: ^3.2.45 => 3.2.45
```

### Additional comments
This may be related to issue [#3529](https://github.com/vuejs/core/issues/3529)
