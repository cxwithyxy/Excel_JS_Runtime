## 引入JS文件

---

#### 引入JS文件的基础方法

通过 define 函数定义模块，在 define 函数的第一个参数中以数组形式传入要引入的js文件路径。

__注:__ 下称 define 函数的第一个参数为: 引入JS文件的数组，即 __JS_FP__

下面是目前所支持的 define 用法，和AMD规范有所不同，目前尚未实现所有AMD规范。

```
define([],function (){});
```

如要引入 t2.js，应该如下写

```
define(
    ["t2.js"],
    function (t2)
    {
        return "t1";
    }
)
```

当然 t2.js 必须通过 define 函数进行定义

t2.js 如下

```
    define(
        [],
        function ()
        {
            return "I am t2";
        }
    )
```

若要引入多个js文件，应该如下写：

```
define(
    [
        "t2.js",
        "t3.js",
        "t4.js"
    ],
    function (t2, ttt, tttt)
    {
        return "t1";
    }
)
```

#### 当 JS文件 在 base.xlsm 中的 BASE_CODE_LIB 时

在 __JS_FP__ 中添加js在BASE_CODE_LIB中的A列内容即可

如 a.js 在BASE_CODE_LIB的A列为 /test/a.js ，则如下：

```
    define(
        ["/test/a.js"],
        function (a)
        {
            return "t1";
        }
    )
```

#### 当 JS文件 作为.js文件在 base.xlsm 外时

在 __JS_FP__ 中添加该js位于 base.xlsm 的相对路径

若目录结构如下

```
workplace
│  base.xlsm
│
└─tXXX
        t2.js
```

代码如下:

```
    define(
        ["file://tXXX/t2.js"],
        function (a)
        {
            return "t1";
        }
    )
```

#### 当 JS文件 在服务器上时

在 __JS_FP__ 中添加该js的URL即可

```
    define(
        [
            "http://www.tt.com/t2.js",
            "https://www.tt.com/t3.js"
        ],
        function (a, t3)
        {
            return "t1";
        }
    )
```