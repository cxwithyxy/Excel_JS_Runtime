## NET_MODE模式

---

#### 为何会有NET_MODE模式

以往要执行JS时，需要先按 __Ctrl+Shift+R__ （把JS代码导入xlsm文件中），才能执行JS。但往往因为JS代码太多或者文件太大，因此每次进行 __Ctrl+Shift+R__ 便会有几秒的卡顿。

而NET_MODE模式，能通过HTTP请求读取JS代码并执行，甚至不需要把需要的JS名写在 __BASE_CODE_LIB__ 中。在调试的时候，就不再需要 __Ctrl+Shift+R__ ，就避免卡顿，能愉快地进行调试和开发了。

当然，开发完后要给别人使用时，要记得把需要的JS名写在 __BASE_CODE_LIB__ ，再执行 __Ctrl+Shift+R__ 导入JS代码到 __BASE_CODE_LIB__ ，最后关闭NET_MODE模式。


#### 如何启动

把文件重命名为带有 __.NET_MODE.__ 即可启动。

如：把 __A加B等于C.xlsm__ 改成 __A加B等于C.NET_MODE.xlsm__ 。

#### 如何使用

在NET_MODE模式下时，修改任意JS代码，然后按 __Ctrl+Shift+W__ 进行重新计算（如浏览器的刷新），此时修改后的JS代码便能执行了。

#### 如何关闭

把文件名删除 __.NET_MODE.__ 字符 即可。 

如：把 __A加B等于C.NET_MODE.xlsm__ 改成 __A加B等于C.xlsm__ 。