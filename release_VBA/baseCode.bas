Attribute VB_Name = "baseCode"
Function runJS(filePath, ParamArray argu())
    Dim JSRUNER As New CXJavaScriptRuner
    Dim b As String
    b = ""
    For i = 0 To UBound(argu)
        If TypeName(argu(i)) = "Range" Then
            c = ""
            For j = 1 To argu(i).Count
                c = c & argu(i)(j).Value & "__CX_RANGE_VALUE__"
            Next
            b = b & c & "__CX_MULTIPLE_ARGUMENTS__"
        Else
            b = b & argu(i) & "__CX_MULTIPLE_ARGUMENTS__"
        End If
    Next
    runJS = JSRUNER.runJsFile(filePath, b)
End Function


Sub UpdataJSFiles()
Attribute UpdataJSFiles.VB_ProcData.VB_Invoke_Func = "R\n14"
    
    runJS ("UpdataJSFiles.js")
    Application.CalculateFull
    
    
End Sub

Sub flashDisplay()
Attribute flashDisplay.VB_ProcData.VB_Invoke_Func = "W\n14"
    Application.CalculateFull
End Sub
