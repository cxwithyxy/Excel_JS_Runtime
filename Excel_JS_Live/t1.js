(function ()
{
    CX_Define(
        [
            "before_RequireJS.js",
            "CX_RequireJS.js",
            "rt1.js"
        ],
        function ()
        {
            ExcelResult = Number(ExcelArgu[0])*Math.random();
            // start
            console.log("CX_Define");
            console.log(typeof define_Req);
            console.log(typeof require_req);

            define_Req(
                "a_Test",
                [],
                function ()
                {
                    console.log("def a_Test");
                    return "def req";
                }
            );
            require_req(['rt1'], function( a_Test ) {
                console.log(a_Test);
            });


            // end
            return "t1";
        }
    )
})()
    
