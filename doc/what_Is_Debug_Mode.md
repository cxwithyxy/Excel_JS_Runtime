## DEBUG_MODE模式

---

#### 为何会有DEBUG_MODE模式

DEBUG_MODE模式中允许使用一些调试用的函数，并以 **debug server** 作为信息输出载体。

下面是可以在 DEBUG_MODE模式 下使用的函数：

###### console.log函数

```
console.log(argu1)

返回: null

参数: argu1 任意内容，可以是字符串、数字、数组、甚至是其他奇奇怪怪的对象。

debug server显示如下：

----- console.log time:[1] -----
argu1


```

##### 关于错误提示

在 DEBUG_MODE模式 下，错误会在 **debug server** 中输入。

不在 DEBUG_MODE模式 下时， 错误被 **alert** 弹出。

---


#### 如何启动


###### 启动xlsm的DEBUG_MODE模式

把文件重命名为带有 __.DEBUG_MODE.__ 即可启动。

如：把 __A加B等于C.xlsm__ 改成 __A加B等于C.DEBUG_MODE.xlsm__ 。

###### 启动 debug server 配合 DEBUG_MODE模式使用

0. 启动终端（cmd）
0. cd 进 debug_Server 目录
0. 输入命令：node debug.js

---

#### 如何使用

执行任何 DEBUG_MODE模式 下使用的函数，便可以在 **debug server** 的窗口看见对应的输出

---

#### 如何关闭

把文件名删除 __.DEBUG_MODE.__ 字符 即可。 

如：把 __A加B等于C.DEBUG_MODE.xlsm__ 改成 __A加B等于C.xlsm__ 。

至于 **debug server** 你想关就可以关了。