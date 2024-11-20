## react-source-learn

### 简介

使用facebook/react作为上游仓库，在packages里面添加demo工程，构建工程，断点调试来学习react源码
对react源码做了几处更改，否则本地webpack打包会报错.后续如果react官方代码更新了也可以直接同步过来，不想每次都用npm link，切找不到代码在哪个具体的文件下

1.packages->react-reconciler/src/ReactFiberConfig.js

将  
```
throw new Error('This module must be shimmed by a specific renderer.');
```

更改为  
```
export * from './forks/ReactFiberConfig.dom'
```

2.packages->react-reconciler/src/Scheduler.js

将 
```export const log = Scheduler.log;
export const unstable_setDisableYieldValue =
  Scheduler.unstable_setDisableYieldValue;
```
  
更改为 
```  export const log = SchedulerMock.log;
export const unstable_setDisableYieldValue =
SchedulerMock.unstable_setDisableYieldValue;
``` 

并且在文件头部添加引用  `import * as SchedulerMock from 'scheduler/unstable_mock'`

3.packages->shared->ReactSharedInternals.js

将 
```import * as React from 'react';

const ReactSharedInternals =
  React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

export default ReactSharedInternals;
```

更改为 
```import tmp from 'react/src/ReactSharedInternalsClient.js';

const ReactSharedInternals =
tmp;

export default ReactSharedInternals;
```

---
### demo工程简介
react 使用了flow语法，偷懒也没有单独为这个项目写webpack的配置文件，就把之前的常规配置拿来然后添加了对flow语法的支持而已
```
new webpack.DefinePlugin({
        __DEV__: false,
        __EXPERIMENTAL__: true,
        __EXTENSION__: false,
        __PROFILE__: false,
        __TEST__: false,
        // TODO: Should this be feature tested somehow?
        __IS_CHROME__: false,
        __IS_FIREFOX__: false,
        __IS_EDGE__: false,
        __IS_NATIVE__: false,
        'process.env': Object.keys(process.env).reduce((env, key) => {
          env[key] = JSON.stringify(process.env[key]);
          return env;
        }, {}),
      }),
```

取自react 使用的构建工具rollup的配置中，可自行更改属性值，但是不能缺少

1.如果使用浏览器调试需要打开调试工具设置里面的允许源代码映射

2.如果使用vscode调试，需要自行填写启动配置，还在完善中

