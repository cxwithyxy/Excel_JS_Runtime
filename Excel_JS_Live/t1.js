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
            console.log("main start");

            // 当这里是main的HTML就行了 
            // define(
            //     "a_Test",
            //     ["./rt1.js"],
            //     function (rt1)
            //     {
            //         console.log("rt1 is " + rt1);
            //         console.log("def a_Test");
            //         return "def req";
            //     }
            // );

            require(['rt2'], function( a ) {
                console.log(a);
            });


            console.log("main end");
            // end
            return "t1";
        }
    )
})()
    
