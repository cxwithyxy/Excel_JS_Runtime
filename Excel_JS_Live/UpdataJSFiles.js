function updataJSFromNetWork(_path)
{
    var jscontent = getJSInNetwork(jsNetworkURL, _path);
    if(jscontent.length > 0){
        setJSInExcel(_path, jscontent);
    }
}

function getJsUpdataList()
{
    var lll = [];
    var BASESheet = ThisWorkbook.Worksheets("BASE_CODE_LIB");
    var index = 1;

    while(true){
        var jsPath = BASESheet.Range("A" + index).value;
        if(typeof jsPath == typeof UDFUDF || jsPath == ""){
            break;
        }
        lll.push(jsPath);
        index ++;
    };
    return lll;
}

var jsNetworkURL = "http://127.0.0.1:8080/";
var jsUpdataList = getJsUpdataList();

for(var i in jsUpdataList){
    updataJSFromNetWork(jsUpdataList[i]);
}
