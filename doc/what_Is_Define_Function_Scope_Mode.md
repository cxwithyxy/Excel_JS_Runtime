## define函数的作用域模式

---

#### 为何会有作用域模式

在非作用域模式下时，代码如下

```
define(
    ["t2.js", "t3.js", "t4.js"],
    function (t2, t3, t4)
    {
        return t2 + t3 + t4;
    }
)
```

在 __作用域模式__ 下时，代码如下

```
define(
    ["t2.js", "t3.js", "t4.js"],
    function (t2)
    {
        return t2 + t3 + t4;
    }
)
```

可见在 __作用域模式__ 下时能节省在第二参数函数的回调参数的设置，在引入大量文件的时候能够节省一些代码。