BASE_INIT_CONFIG = {};
BASE_INIT_CONFIG.js_Saving_In_Excel = {
    cell_Content_Length : 32000,
    max_Cell_Length : 10,
    except: ["BASE_INIT.js", "CXAMD.js"]
};

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
            var return_Value = "";
            var save_Index = 2;
            while(true){
                var str = BASESheet.Range(cells(index, save_Index).Address(0, 0)).value2;
                if(!str){
                    break;
                }
                save_Index ++;
                return_Value += str;
            }
            return return_Value.replace(new RegExp("_等于号_","g"), "=");
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
            if(BASE_INIT_CONFIG.js_Saving_In_Excel.except.join("_CX_").indexOf(_path) != -1){
                BASESheet.Range("B" + index).value2 = _jsContent;
                return true;
            }
            _jsContent = _jsContent.replace(new RegExp("=","g"), "_等于号_");
            var save_Index = 2;
            var split_Length = BASE_INIT_CONFIG.js_Saving_In_Excel.cell_Content_Length;
            for(var i = 0, len = _jsContent.length / split_Length; i < len; i++) {
                var need_Str = _jsContent.substr(0,split_Length);
                BASESheet.Range(cells(index, save_Index).Address(0, 0)).value2 = need_Str;
                CXJavaScriptRuner.doEventInVb();
                save_Index++;
                _jsContent = _jsContent.substr(split_Length);
            }
            BASESheet.Range(cells(index, save_Index).Address(0, 0) + ":" + cells(index, BASE_INIT_CONFIG.js_Saving_In_Excel.max_Cell_Length).Address(0, 0)).clear();
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