VERSION 1.0 CLASS
BEGIN
  MultiUse = -1  'True
END
Attribute VB_Name = "CXFileWR"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = False
Attribute VB_Exposed = False
Public Function getAllFileNameInDir(dirPath)
    Dim pathHandled As String
    Dim nameArray() As String
    Dim tempName As String
    Dim index As Integer
    index = 0
    pathHandled = filePathHandle(dirPath & "\*.*")
    Do While True
        If index = 0 Then
            tempName = dir(pathHandled)
        Else
            tempName = dir
        End If
        If tempName = "" Then
            Exit Do
        End If
        ReDim Preserve nameArray(index)
        nameArray(index) = tempName
        index = index + 1
    Loop
    getAllFileNameInDir = nameArray
End Function

Function dirForJs(Optional path As String)
    Dim returnName As String
    If path = "" Then
        returnName = dir
    Else
        returnName = dir(path)
    End If
    
    dirForJs = returnName
End Function



Function readFile(FileName)
  
  Set oStream = CreateObject("adodb.stream")
  oStream.Open
  oStream.Charset = "UTF-8"
  oStream.LoadFromFile FileName

  readFile = oStream.ReadText()

  oStream.Close
End Function
