# 下个大版本场景描述

场景分为两种，开发环境时的场景和运行环境时的场景：

1. 开发环境：指开发者对 xlsm 进行 javascript 开发
2. 运行环境：指使用者打开 xlsm 文件，并能够预期地执行代码



#### 对于开发环境

开发者打开 xlsm 后，通过某个命令直接启动 vs code 编辑器，便可以对 xlsm 里面的 javascript 进行编辑。

对比起上个版本：

1. 不再需要启动 http-server 来把 javascript 与 xlsm 进行同步
2. 不再需要在 excel 用使用 Ctrl + Shift + R 进行 javascript 来更新
3. 编辑后的 javascript 文件能够自动存入 xlsm 中



#### 对于运行环境

使用者在安装带vba宏的office或wps软件后，打开 xlsm 文件，即可正常使用。不需要再额外安装其他软件。