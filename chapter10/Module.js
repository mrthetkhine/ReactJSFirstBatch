"use strict";
const modules = {};
function require(moduleName)
{
    return modules[moduleName];
}
modules['set'] = (function() //IIFE
{
    const exports = {};
    exports.BitSet  = class BitSet{

    };
    return exports;
}());