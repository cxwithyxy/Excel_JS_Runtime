CXAMD = {};
CXAMD.allModuleLoaded = {};
CXAMD.basePath = CXJavaScriptRuner.getBasePath();
CXAMD.net_Url = "http://127.0.0.1:8080/";
CXAMD.net_Mode = (function ()
{
    return ThisWorkbook.Name.indexOf(".NET_MODE.") != -1;
})();

define = function (_moduleList, _f){
    var moduleLoadedInThisTime = [];
    for(i in _moduleList){
        var theFilePath = _moduleList[i];
        if(typeof CXAMD.allModuleLoaded[theFilePath] == typeof UDFUDF){
            var jsFileData = "";
            if (CXAMD.net_Mode) {
                jsFileData = getJSInNetwork(CXAMD.net_Url, theFilePath);;
            }
            if(jsFileData.length < 1){
                jsFileData = getJSInExcel(theFilePath);
            }
            CXAMD.allModuleLoaded[theFilePath] = eval(jsFileData);
        }
        moduleLoadedInThisTime.push(CXAMD.allModuleLoaded[theFilePath]);
    }
    return _f.apply(this, moduleLoadedInThisTime);
};
define.amd = true;