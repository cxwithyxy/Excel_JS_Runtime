VERSION 1.0 CLASS
BEGIN
  MultiUse = -1  'True
END
Attribute VB_Name = "CXJavaScriptRuner"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = False
Attribute VB_Exposed = False
Dim FWR As New CXFileWR
Function createFS()
    Set createFS = CreateObject("Scripting.FileSystemObject")
End Function

Function CreateObjectInJS(libname)
    Set CreateObjectInJS = CreateObject(libname)
End Function

Function doEventInVb()
    DoEvents
End Function
Function runJS(jsCode, ExcelArgu)
    Set X = CreateObject("SCRIPTCONTROL")
    X.Language = "JAVASCRIPT"
    X.ADDCODE "function CXJavaScriptBaseFuncion(Application, CXJavaScriptRuner, ExcelArgu){ExcelResult = null;with(Application){" & addInitToJsCode(jsCode) & ";return ExcelResult};};"
    a = X.CODEOBJECT.CXJavaScriptBaseFuncion(Application, Me, ExcelArgu)
    runJS = a
End Function

Function getFileWR()
   Set getFileWR = FWR
End Function

Function addInitToJsCode(code)
    addInitToJsCode = ThisWorkbook.Worksheets("BASE_CODE_LIB").Range("B1") & code
End Function

Function runJsFile(filePath, ExcelArgu)
    evalstr = "define(['" & filePath & "'],function (){})"
    runJsFile = runJS("eval(" & evalstr & ");", ExcelArgu)
End Function

Function alert(word)
    MsgBox (word)
End Function

Function getBasePath()
    getBasePath = ThisWorkbook.path
End Function

