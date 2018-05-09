## 开发示例

---

#### 目标

下面以创建一个“把A列项与B列项相加的结果在C列项”的表格为例，命名为《A加B等于C.xlsm》

表格如下:

|A|B|C|
| :----: | :----: | :----: |
|3|2|5|
|2|2|4|
|40|1|41|

#### 步骤

0. 把 __base.xlsm__ 复制粘贴到你要放的位置，并把粘贴出来的base.xlsm副本命名为 __A加B等于C.xlsm__

0. 在任意位置建立文件夹，并在文件夹内建立js文件 __plusAToB.js__

0. 打开代码编辑器（sublime或者atom或者什么都可以），对 __plusAToB.js__ 进行编辑，输入以下代码：
```
ExcelResult = Number(ExcelArgu[0]) + Number(ExcelArgu[1]);
```

0. 打开CMD进入 __plusAToB.js__ 所在的文件夹，执行命令 __http-server__ 启动 http-server，CMD窗口便显示如下：
```
Starting up http-server, serving ./
Available on:
  http://172.27.35.27:8080
  http://192.168.174.1:8080
  http://192.168.159.1:8080
  http://192.168.137.1:8080
  http://127.
  0.
  0.1:8080
Hit CTRL-C to stop the server
```
可在浏览器访问 http://127.0.0.1:8080/plusAToB.js ，若出现步骤3中的代码，即表示成功运行http-server

0. 打开 __A加B等于C.xlsm__ ，excel软件提示是否启用宏的时候，选择 __是__

0. 切换至 __BASE_CODE_LIB__ 工作表，在单元格 __A4__ 输入内容 __plusAToB.js__

0. 摁下快捷键 __Ctrl+Shift+R__ 后，单元格 __B4__ 便出现步骤3中的代码，表示plusAToB.js的代码成功写入xlsm中

0. 切换至 __Sheet1__ 工作表，在单元格 __A1__ 输入内容 __3__，在单元格 __B1__ 输入内容 __2__

0. 在单元格 __C1__ 输入内容 __=runJS("plusAToB.js",A1,B1)__ ，回车后，__C1__ 便显示 A1+B1的值 则 __5__

0. 在单元格 __A2__ 输入内容 __2__，在单元格 __B2__ 输入内容 __2__

0. 在单元格 __C2__ 输入内容 __=runJS("plusAToB.js",A2,B2)__ ，回车后，__C2__ 便显示 A2+B2的值 则 __4__

0. 在单元格 __A3__ 输入内容 __40__，在单元格 __B3__ 输入内容 __1__

0. 在单元格 __C3__ 输入内容 __=runJS("plusAToB.js",A3,B3)__ ，回车后，__C3__ 便显示 A3+B3的值 则 __41__

## 关于 BASE_CODE_LIB 工作表

0. __BASE_CODE_LIB__ 工作表 是用于存放js代码的，任何js代码要执行，都必须被存储在这里。

0. 快捷键 __Ctrl+Shift+R__ 是调用vba函数（宏）__UpdataJSFiles__，该vba函数将会执行 __UpdataJSFiles.js__

## 关于 js 编程说明

0. 由于vba调用的js引擎是windows系统COM组件的“Microsoft Script Control”，所支持的js特性较少，因此js的规范要参考IE6的js规范

0. 在js中 __ExcelResult__ 作为单元格的返回值，默认是0，可以被设置成其他

0. 在js中 __ExcelArgu__ 是 runJS函数所传递的参数，具体说明如下：
```
    在 runJS("plusAToB.js",A1,B1) 中
    ExcelArgu[0] 为 单元格A1的值
    ExcelArgu[1] 为 单元格B1的值
```

0. 在js中，可以通过amd规范的define函数进行其他js的调用
```
// yewuxiezuo-zhixingshouceLib.js 文件
define(
    [],
    function ()
    {
        var obj = {
            getMarkIndex: function (dataIDs, _searchNum)
            {
                var len = dataIDs.length;
                for(var i = 0 ;i < len; i ++){
                    if(_searchNum == dataIDs[i]){
                        return i;
                    }
                }
            },
            getMarkName: function (numData, manData, _searchNum)
            {
                return manData[this.getMarkIndex(numData, _searchNum)];
            }
        };
        return obj;
    }
)
```
```
// 文件yewuxiezuo-idToManl.js
define(
    ["yewuxiezuo-zhixingshouceLib.js"],
    function (zhixingshouceLib)
    {
        var numData = ExcelArgu[0];
        var manData = ExcelArgu[1];
        ExcelResult = zhixingshouceLib.getMarkName(numData, manData, ExcelArgu[2]);
    }
)
```

## 注意事项

0. 在 __BASE_CODE_LIB__ 工作表的A列中，从A1到A列中最后一个出现内容的单元格，中间不能出现出现任何没有内容的单元格

0. 由于js错误处理尚未有解决方案，因此展示无法提示js哪里出现错误，__请认真写代码仔细审查__

## 关于NET_MODE模式

[什么是NET_MODE模式](what_Is_Net_Mode.md)