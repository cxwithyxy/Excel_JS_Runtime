alert = function (_msg){
    CXJavaScriptRuner.alert(_msg.toString());
};

getJSInExcel = function (_path)
{
    var BASESheet = ThisWorkbook.Worksheets("BASE_CODE_LIB");
    var index = 1;
    while(true){
        var jsPath = BASESheet.Range("A" + index).value;
        if(jsPath == ""){
            break;
        }
        if(jsPath == _path){
            return BASESheet.Range("B" + index).value;
            break;
        }
        index ++;
    }
    return false;
};