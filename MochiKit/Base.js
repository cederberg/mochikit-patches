/**
 * Dual-licensed under the MIT License & the Academic Free License v. 2.1.
 * See the file LICENSE for more information.
 *
 * (c) 2007-2008 by Per Cederberg & Dynabyte AB (www.dynabyte.se)
 * All rights reserved.
 */

// Check for loaded MochiKit
if (typeof(MochiKit) == "undefined") {
    throw new ReferenceError("MochiKit must be loaded before loading this script");
}

// Check for loaded MochiKit.Base
if (typeof(MochiKit.Base) == "undefined") {
    throw new ReferenceError("MochiKit.Base must be loaded before loading this script");
}

/**
 * Checks if the specified value corresponds to false. This function
 * will equate false, undefined, null, 0, "", [], "false" and "null"
 * with a boolean false value.
 *
 * @param {Object} value the value to check
 *
 * @return {Boolean} true if the value corresponds to false, or
 *         false otherwise
 */
MochiKit.Base.isFalse = function(value) {
    return value == false || value == null || value == 0 ||
           value.length === 0 || value == "false" || value == "null";
}

/**
 * Returns the first function argument that is not undefined.
 *
 * @param {Object} [...] the values to check
 *
 * @return {Object} the first non-undefined argument, or
 *         undefined if all arguments were undefined 
 */
MochiKit.Base.defaultValue = function(/* ... */) {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof(arguments[i]) != "undefined") {
            return arguments[i];
        }
    }
    return undefined;
}

/**
 * Creates a dictionary object from a list of keys and values. It
 * can be used either as a reverse of items(), or as a reverse of
 * keys() and values(). That is, either the function take a single
 * list where each element contains both key and value, or it takes
 * two separate lists, one with keys and the other with values. If
 * a key is specified twice, only the last value will be used.
 *
 * @code dict([['a', 1], ['b', 2]]) --> { a: 1, b: 2 }
 *       dict(['a','b'], [1, 2]) --> { a: 1, b: 2 }
 *
 * @param {Array} itemsOrKeys the list of items or keys
 * @param {Array} [values] the optional list of values
 *
 * @return {Object} a dictionary object with all the keys set to the
 *         corresponding value
 */
MochiKit.Base.dict = function(itemsOrKeys, values) {
    var o = {};
    if (!MochiKit.Base.isArrayLike(itemsOrKeys)) {
        throw new TypeError("First argument must be array-like");
    }
    if (MochiKit.Base.isArrayLike(values) && itemsOrKeys.length !== values.length) {
        throw new TypeError("Both arrays must be of same length");
    }
    for (var i = 0; i < itemsOrKeys.length; i++) {
        var k = itemsOrKeys[i];
        if (k === null || k === undefined) {
            throw new TypeError("Key at index " + i + " is null or undefined");
        } else if (MochiKit.Base.isArrayLike(k)) {
            o[k[0]] = k[1];
        } else if (MochiKit.Base.isArrayLike(values)) {
            o[k] = values[i];
        } else {
            o[k] = values;
        }
    }
    return o;
}

/**
 * Creates a new object by copying keys and values from another
 * object. A list of key names (or an object whose property names
 * will be used as keys) must be specified as an argument. The
 * returned object will only contain properties that were defined in
 * the source object, keeping the source object values. The source
 * object will be left unmodified.
 *
 * @param {Object} src the source object to select values from
 * @param {Array/Object} keys the list of keys to select, or an
 *            object with the keys to select
 *
 * @return {Object} a new object containing the matching keys and
 *             values found in the source object
 */
MochiKit.Base.select = function(src, keys) {
    var res = {};
    if (!MochiKit.Base.isArrayLike(keys)) {
        keys = MochiKit.Base.keys(keys);
    }
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        if (k in src) {
            res[k] = src[k];
        }
    }
    return res;
}

/**
 * Filters an object by removing a list of keys. A list of key names
 * (or an object whose property names will be used as keys) must be
 * specified as an argument. A new object containing the source
 * object values for the specified keys will be returned. The source
 * object will be modified by removing all the specified keys.
 *
 * @param {Object} src the source object to select and modify
 * @param {Array/Object} keys the list of keys to remove, or an
 *            object with the keys to remove
 *
 * @return {Object} a new object containing the matching keys and
 *             values found in the source object
 */
MochiKit.Base.mask = function(src, keys) {
    var res = {};
    if (!MochiKit.Base.isArrayLike(keys)) {
        keys = MochiKit.Base.keys(keys);
    }
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        if (k in src) {
            res[k] = src[k];
            delete src[k];
        }
    }
    return res;
}

/**
 * Returns a truncated copy of a string or an array. If the string
 * or array is shorter than the specified maximum length, the object
 * will be returned unmodified. If an optional tail string or array
 * is specified, additional elements will be removed from the object
 * to append it to the end.
 *
 * @param {String/Array} obj the string or array to truncate
 * @param {Number} maxLength the maximum length
 * @param {String/Array} tail the optional tail to use on truncation
 *
 * @return {String/Array} the truncated string or array
 */
MochiKit.Base.truncate = function(obj, maxLength, tail) {
    if (obj != null && typeof(obj) != "string" && !MochiKit.Base.isArrayLike(obj)) {
        obj = obj.toString();
    }
    if (obj == null || obj.length <= maxLength) {
        return obj;
    }
    if (typeof(tail) == "string" || MochiKit.Base.isArrayLike(tail)) {
        obj = obj.slice(0, maxLength - tail.length);
        if (typeof(obj) == "string") {
            return obj + tail;
        } else {
            return MochiKit.Base.extend(obj, tail);
        }
    } else {
        return obj.slice(0, maxLength);
    }
}

/**
 * Returns the name of a function. This is often useful for debugging
 * or logging purposes. If the function is anonymous or the
 * JavaScript environment doesn't provide function <code>name</code>
 * properties, any registered function name or undefined will be
 * returned.
 *
 * @param {Function} func the function to name
 *
 * @return {String} the function name, or undefined if not available
 *
 * @see MochiKit.Base.registerFunctionNames
 */
MochiKit.Base.functionName = function(func) {
    if (func == null) {
        return null;
    } else if (func.name != null && func.name != "") {
        return func.name;
    } else {
        return func.NAME;
    }
}

/**
 * Registers function names for debugging or logging. This is useful
 * when using anonymous functions or inside JavaScript environments
 * that do not provide function <code>name</code> properties. This
 * function will add the specified name as a new <code>NAME</code>
 * property to any function that doesn't already have a name. This
 * function will also process any properties or prototype properties
 * recursively adding names like <code>name.[property name]</code>.
 *
 * @param {Object} obj the function or object to register
 * @param {String} name the function or object (class) name
 * @param {Array} [stack] the object stack to avoid circular recursion
 *
 * @see MochiKit.Base.functionName
 */
MochiKit.Base.registerFunctionNames = function(obj, name, stack) {
   if (typeof(obj) === "function" &&
       (obj.name == null || obj.name == "") &&
       typeof(obj.NAME) === "undefined") {
       obj.NAME = name;
   }
   stack = stack || [];
   if (obj != null && name != null &&
       (typeof(obj) === "object" || typeof(obj) === "function") &&
       obj !== Object.prototype && obj !== Function.prototype &&
       typeof(obj.nodeType) !== "number" &&
       MochiKit.Base.findIdentical(stack, obj) < 0) {

       stack.push(obj);
       for (var prop in obj) {
           var str = name + "." + prop;
           MochiKit.Base.registerFunctionNames(obj[prop], str, stack);
       }
       var str = name + ".prototype";
       MochiKit.Base.registerFunctionNames(obj.prototype, str, stack);
       stack.pop();
   }
}

/**
 * Returns the current execution stack trace. The stack trace is an
 * array of function names with the innermost function at the lowest
 * index (0). Due to limitations in the JavaScript API:s, the stack
 * trace will be cut if recursion is detected. The stack trace will
 * also be cut if the call depth exceeds the maximum depth or if any
 * function in the chain has an injected stack trace.
 *
 * @param {Number} [maxDepth] the maximum call depth, defaults to 20
 *
 * @return {Array} the stack trace array of function names
 *
 * @see MochiKit.Base.functionName
 * @see MochiKit.Base.injectStackTrace
 */
MochiKit.Base.stackTrace = function(maxDepth) {
    var func = arguments.callee.caller;
    var visited = [];
    var res = [];
    maxDepth = maxDepth || 20;
    while (func != null) {
        if (MochiKit.Base.findIdentical(visited, func) >= 0) {
            res.push("...recursion...");
            break;
        }
        if (func.$stackTrace != null) {
            res = res.concat(func.$stackTrace);
            break;
        }
        var name = MochiKit.Base.functionName(func);
        if (name === null) {
            // Skip stack trace when null (but not when undefined)
        } else {
            res.push(name || "<anonymous>");
        }
        visited.push(func);
        if (visited.length >= maxDepth) {
            res.push("...");
            break;
        }
        func = func.caller;
    }
    return res;
}

/**
 * Injects a stack trace for a function. This method is useful for
 * creating a fake stack trace in anonymous or callback functions. A
 * null value can be used to clear any previously injected stack
 * trace for the calling function.
 *
 * @param {Array} stackTrace the stack trace, or null to clear
 * @param {Function} [func] the function to modify, or null for the
 *            currently executing function (i.e. the caller)
 */
MochiKit.Base.injectStackTrace = function(stackTrace, func) {
    func = func || arguments.callee.caller;
    if (func != null) {
        if (stackTrace) {
            func.$stackTrace = stackTrace;
        } else {
            delete func.$stackTrace;
        }
    }
}
