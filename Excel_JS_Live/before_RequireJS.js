CX_Define(
    [],
    function ()
    {
        importScripts = function (theFilePath)
        {
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
                    case "https":
                        jsFileData = netGet(theFilePath);
                        break;
                    default:
                        var err_Text = "Unknow Protocol 【" + path_Protocol + "】 when loadding 【" + theFilePath + "】";
                        console.error(theFilePath, err_Text);
                        throw err_Text;
                }

            }else{
                if (CXAMD.net_Mode) {
                    jsFileData = getJSInNetwork(CXAMD.net_Url, theFilePath);
                }
                if(jsFileData.length < 1){
                    jsFileData = getJSInExcel(theFilePath);
                    if (jsFileData === false) {
                        var err_Text = "No Found 【" + theFilePath + "】";
                        console.error(theFilePath, err_Text);
                        throw err_Text;
                    }
                }
            }
            try{
                eval(jsFileData);
            }catch(e){
                console.error(theFilePath, e);
                throw e;
            }
        }
    }
)