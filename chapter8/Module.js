window.Module = window.Module || (function(){
    console.log("Module Initialied");

    function privateMethod()
    {
        console.log("Private method");
    }
    function api()
    {
        privateMethod();
        console.log("API called");
    }
    return {
        api : api
    };
})();
//console.log("MyModule code ",Module);