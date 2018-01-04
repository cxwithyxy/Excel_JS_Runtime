CXAMD = {};
CXAMD.allModuleLoaded = {};
CXAMD.basePath = CXJavaScriptRuner.getBasePath();
define = function (_moduleList, _f){
    var moduleLoadedInThisTime = [];
    for(i in _moduleList){
        var theFilePath = _moduleList[i];
        if(typeof CXAMD.allModuleLoaded[theFilePath] == typeof UDFUDF){
            var jsFileData = CXJavaScriptRuner.readFile(theFilePath);
            CXAMD.allModuleLoaded[theFilePath] = eval(jsFileData);
        }
        moduleLoadedInThisTime.push(CXAMD.allModuleLoaded[theFilePath]);
    }
    return _f.apply(this, moduleLoadedInThisTime);
};
define.amd = true;