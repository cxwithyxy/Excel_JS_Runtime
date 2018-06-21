(function ()
{
    CX_Define(
        [
            "before_RequireJS.js",
            "CX_RequireJS.js"
        ],
        function ()
        {
            ExcelResult = Number(ExcelArgu[0])*Math.random();
            // start
            console.log("CX_Define");
            console.log(typeof define);
            console.log(typeof require);

            define(
                "a_Test",
                [],
                function ()
                {
                    console.log("def a_Test");
                    return "def req";
                }
            );
            require(['a_Test'], function( a ) {
                console.log(a);
            });


            // end
            return "t1";
        }
    )
})()
    
