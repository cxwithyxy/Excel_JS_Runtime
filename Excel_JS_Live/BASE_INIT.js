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

netGet = function (url)
{
    var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
    while(xmlhttp.readystate != 4){
      CXJavaScriptRuner.doEventInVb();
    }
    return xmlhttp.responseText;
};

getJSInNetwork = function (_url, _path)
{
    return netGet(_url + _path + "?v=" + Math.random());
};

setJSInExcel = function (_path,_jsContent)
{
    var BASESheet = ThisWorkbook.Worksheets("BASE_CODE_LIB");
    var index = 1;
    while(true){
        var jsPath = BASESheet.Range("A" + index).value;
        if(typeof jsPath == typeof UDFUDF || jsPath == ""){
            break;
        }
        if(jsPath == _path){
            BASESheet.Range("B" + index).value2 = _jsContent;
            return true;
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
        if(b.length > 1){
            b.pop();
            a[i] = b;
        }
    }
    ExcelArgu = a;
})();

eval(getJSInExcel("CXAMD.js"));