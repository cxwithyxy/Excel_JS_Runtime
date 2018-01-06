alert = function (_msg){
    CXJavaScriptRuner.alert(_msg.toString());
};

getJSInExcel = function (_path)
{
    var BASESheet = ThisWorkbook.Worksheets("BASE_CODE_LIB");
    var index = 1;
    while(true){
        var jsPath = BASESheet.Range("A" + index).value;
        if(typeof jsPath == typeof UDFUDF || jsPath == ""){
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

(function ()
{
    var a = ExcelArgu.split("__CX_MULTIPLE_ARGUMENTS__");
    a.pop();
    var len = a.length;
    for(var i = 0 ;i < len; i ++){
        var b = a[i].split("__CX_RANGE_VALUE__");
        b.pop();
        a[i] = b;
    }
    ExcelArgu = a;
})();

eval(getJSInExcel("CXAMD.js"));