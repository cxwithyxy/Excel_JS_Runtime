CXAMD = {};
CXAMD.allModuleLoaded = {};
CXAMD.basePath = CXJavaScriptRuner.getBasePath();
CXAMD.net_Url = "http://127.0.0.1:8080/";
CXAMD.net_Mode = (function ()
{
    return ThisWorkbook.Name.indexOf(".NET_MODE.") != -1;
})();

CXAMD.debug_Mode = (function ()
{
    return ThisWorkbook.Name.indexOf(".DEBUG_MODE.") != -1;
})();

CXAMD.debug_Server_Url = 'http://127.0.0.1:8081/';

console = {call_Time:0};

console.log = function (data)
{
    if(!CXAMD.debug_Mode){
        return;
    }
    console.call_Time ++;
    var output = "";
    try{
        output = data.toString();
    }catch(e){
        output = typeof data;
    }
    switch(output){
        case "[object Object]":
            output += "\nMay be a javascript object";
            break;
        case "object":
            output += "\nMay be a VBA object";
            break;
    }
    var main_Body = "" +
        "----- console.log time:[" + console.call_Time + "] -----\n" +
        output +
        "\n";
    netPost(CXAMD.debug_Server_Url, main_Body);
}

CXAMD.get_Path_Protocol = function (_path)
{
    if(_path.indexOf("://") != -1){
        return _path.split("://")[0].toLowerCase();
    }
    return false;
}

CXAMD.read_Js_File = function (_path)
{
    _path = _path.split("://")[1];
    _path = CXJavaScriptRuner.getBasePath() + "/" + _path;
    var fWR = CXJavaScriptRuner.getFileWR();
    return fWR.readFile(_path);
}

CXAMD.get_Module = function (theFilePath)
{
    if(typeof CXAMD.allModuleLoaded[theFilePath] == typeof UDFUDF){
        var jsFileData = "";

        var path_Protocol = CXAMD.get_Path_Protocol(theFilePath);
        if(path_Protocol !== false){
            switch(path_Protocol){
                case "file":
                    jsFileData = CXAMD.read_Js_File(theFilePath);
                    break;
                case "http":
                    jsFileData = netGet(theFilePath);
                    break;
                default:
                    alert("Unknow Protocol 【" + path_Protocol + "】 when loadding 【" + theFilePath + "】");
            }

        }else{
            if (CXAMD.net_Mode) {
                jsFileData = getJSInNetwork(CXAMD.net_Url, theFilePath);
            }
            if(jsFileData.length < 1){
                jsFileData = getJSInExcel(theFilePath);
                if (jsFileData === false) {
                    alert("No Found 【" + theFilePath + "】");
                }
            }
        }

        CXAMD.allModuleLoaded[theFilePath] = CXAMD.runtime_In_Obj(this, jsFileData) || null;
    }
    return CXAMD.allModuleLoaded[theFilePath];
};

CXAMD.runtime_In_Obj = function (inObj, funS)
{
    return eval(
        "(function (){"+
            "return function (a){" +
                "eval_Global = null;" +
                "with(a){"+
                    funS +
                "}"+
                "return eval_Global;" +
            "}"+
        "})();"
    )(inObj);
};

CXAMD.get_Func_Content = function (fg)
{
    var temp = fg.toString().split("{");
    temp.shift();
    temp = temp.join("{").split("}");
    temp.pop();
    return temp.join("}");
};

CXAMD.get_Func_Argument = function (fg)
{
    var temp = fg.toString().split("(");
    temp.shift();
    temp = temp.join("(").split(")");
    return temp[0].replace(new RegExp(" ","g"),"").split(",")
};

CXAMD.get_Module_Name_By_Path = function (_path)
{
    var temp = _path.split(".");
    temp.pop();
    return temp.join("_").split("/").pop();
};

define = function (_moduleList, _f){
    var pre_Set_var = CXAMD.get_Func_Argument(_f);
    var runtime_Obj = {};
    for(i in _moduleList){
        var theFilePath = _moduleList[i];
        var module_Obj = CXAMD.get_Module(theFilePath);
        var module_Name = CXAMD.get_Module_Name_By_Path(theFilePath);
        runtime_Obj[module_Name] = module_Obj;
        runtime_Obj[pre_Set_var[i]] = module_Obj;
    }
    eval_Global = CXAMD.runtime_In_Obj(runtime_Obj, CXAMD.get_Func_Content(_f));
    return eval_Global;
};
define.amd = {};