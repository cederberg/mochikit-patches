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

// Check for loaded MochiKit.DOM
if (typeof(MochiKit.DOM) == "undefined") {
    throw new ReferenceError("MochiKit.DOM must be loaded before loading this script");
}

MochiKit.DOM.NS = {
    XHTML: "http://www.w3.org/1999/xhtml",
    XLINK: "http://www.w3.org/1999/xlink",
    SVG: "http://www.w3.org/2000/svg",
    XUL: "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
};
MochiKit.DOM.NS.HTML = [undefined, null, '', MochiKit.DOM.NS.XHTML];

/**
 * Returns true if the specified object looks like a DOM node.
 * Otherwise, false will be returned. Any non-null object with a
 * nodeType > 0 will be considered a DOM node by this function.
 *
 * @param {Object} obj the object to check
 *
 * @return {Boolean} true if the object looks like a DOM node, or
 *         false otherwise
 */
MochiKit.DOM.isDOM = function(obj) {
    return typeof(obj) !== "undefined" &&
           typeof(obj.nodeType) === "number" &&
           obj.nodeType > 0;
}

/**
 * Returns true if the specified object looks like an HTML or XHTML
 * DOM node. Otherwise, false will be returned. Any non-null object
 * with a nodeType > 0 will be considered a DOM node, but only those
 * with a matching namespaceURI will be considered HTML DOM nodes. 
 *
 * @param {Object} obj the object to check
 *
 * @return {Boolean} true if the object looks like an HTML DOM node,
 *         or false otherwise
 */
MochiKit.DOM.isHTML = function(obj) {
    var ns = MochiKit.DOM.NS.HTML;
    return MochiKit.DOM.isDOM(obj) &&
           MochiKit.Base.findIdentical(ns, obj.namespaceURI) >= 0;
}

/**
 * Creates a programmers debug representation of a DOM node. This
 * method is similar to MochiKit.DOM.emitHtml, except for that it
 * does not recurse into child nodes.
 *
 * @param {Object} node the HTML DOM node
 *
 * @return {String} a debug representation of the DOM node
 */
MochiKit.DOM.reprDOM = function(node) {
    if (node == null) {
        return "null";
    } else if (typeof(node) === 'string') {
        return node;
    } else if (node.nodeType === 1) { // Node.ELEMENT_NODE
        var res = "<" + node.tagName.toLowerCase();
        var attrs = MochiKit.Base.map(MochiKit.DOM.reprDOM, node.attributes);
        res += attrs.join("");
        if (node.hasChildNodes()) {
            res += " ["  + node.childNodes.length + " child nodes]";
        }
        res += "/>";
        return res;
    } else if (node.nodeType === 2) { // Node.ATTRIBUTE_NODE
        if (node.specified) {
            return " " + node.name + '="' +
                   MochiKit.DOM.escapeHTML(node.value) + '"';
        } else {
            return "";
        }
    } else if (node.nodeType === 3) { // Node.TEXT_NODE
        return MochiKit.DOM.escapeHTML(node.nodeValue);
    } else {
        return node.toString();
    }
}

/**
 * Returns an array with DOM node attribute name and value pairs.
 * The name and value pairs are also stored in arrays with two
 * elements.
 *
 * @param {Object} node the HTML DOM node
 *
 * @return {Array} an array containing attribute name and value
 *             pairs (as arrays)
 */
MochiKit.DOM.attributeArray = function(node) {
    var res = [];
    node = MochiKit.DOM.getElement(node);
    for (var i = 0; node != null && i < node.attributes.length; i++) {
        var a = node.attributes[i];
        if (a.specified) {
            res.push([a.name, a.value]);
        }
    }
    return res;
}

/**
 * Returns an immediate child node from a parent DOM node. This
 * function handles the index range checks and finds the immediate
 * child node if a descendant node is specified.
 *
 * @param {Node} parent the parent HTML DOM node
 * @param {Number/Node} indexOrNode the child index or a descendant
 *            node
 *
 * @return {Node} the child HTML DOM node, or
 *         null if no matching node was found
 */
MochiKit.DOM.childNode = function(parent, indexOrNode) {
    parent = MochiKit.DOM.getElement(parent);
    if (typeof(indexOrNode) == "number") {
        if (indexOrNode < 0 || indexOrNode >= parent.childNodes.length) {
            return null;
        } else {
            return parent.childNodes[indexOrNode];
        }
    } else {
        var node = MochiKit.DOM.getElement(indexOrNode);
        while (node != null && node !== parent && node.parentNode !== parent) {
            node = node.parentNode;
        }
        return (node == null || node === parent) ? null : node;
    }
}

/**
 * Creates a DOM node with a namespace.
 *
 * @param {String} ns the DOM namespace
 * @param {String} tag the DOM tag name
 * @param {Object} [attrs] the node attributes, or null for none
 * @param {Object} [...] the nodes or text to add as children
 *
 * @return {Object} the DOM node created
 */
MochiKit.DOM.createDOMExt = function(ns, tag, attrs/*, ...*/) {
    var doc = MochiKit.DOM.currentDocument();
    var node = (ns) ? doc.createElementNS(ns, tag) : doc.createElement(tag);
    MochiKit.DOM.updateNodeAttributes(node, attrs);
    var children = MochiKit.Base.extend([], arguments, 3);
    MochiKit.DOM.appendChildNodes(node, children);
    return node;
}

/**
 * Creates a DOM text node from the specified text. This is a
 * convenience function for currentDocument().createTextNode, in
 * order to be compatible with the withDocument() function.
 *
 * @param {String} text the text content
 *
 * @return {Object} the DOM text node created
 */
MochiKit.DOM.createTextNode = function(text) {
    return MochiKit.DOM.currentDocument().createTextNode(text);
}

/**
 * Returns a function for creating a specific kind of DOM nodes. The
 * returned function will optionally require a sequence of non-null
 * arguments that will be added as attributes to the node creation.
 * The returned function will otherwise work similar to the
 * createDOMExt() function, taking attributes and child nodes.
 *
 * @param {String} ns the DOM namespace, or null for HTML
 * @param {String} tag the DOM tag name
 * @param {Array} [args] the array with required arguments, or null
 *            for no required arguments
 * @param {Object} [attrs] the default node attributes, or null for
 *            none
 * @param {Object} [...] the default nodes or text to add as children
 *
 * @return {Function} the function that creates the DOM nodes
 */
MochiKit.DOM.createDOMFuncExt = function(ns, tag, args, attrs/*, ...*/) {
    args = args || [];
    attrs = attrs || {};
    var children = MochiKit.Base.extend([], arguments, 4);
    return function(/*arg1, ..., argN, attrs, ...*/) {
        var myAttrs = MochiKit.Base.update({}, attrs);
        for (var pos = 0; pos < args.length; pos++) {
            if (arguments[pos] == null) {
                throw new Error("Argument '" + args[pos] + "' cannot be null");  
            }
            myAttrs[args[pos]] = arguments[pos];
        }
        MochiKit.Base.update(myAttrs, arguments[args.length]);
        var myChildren = MochiKit.Base.extend([], children);
        MochiKit.Base.extend(myChildren, arguments, args.length + 1);
        return MochiKit.DOM.createDOMExt(ns, tag, myAttrs, myChildren);
    }
}

/**
 * Blurs (unfocuses) a specified DOM node and all relevant child
 * nodes. This function will recursively blur all A, BUTTON, INPUT,
 * TEXTAREA and SELECT child nodes found.
 *
 * @param {Object} node the HTML DOM node
 */
MochiKit.DOM.blurAll = function(node) {
    if (arguments.length <= 1) {
        MochiKit.DOM.blurAll(node, "A", "BUTTON", "INPUT", "TEXTAREA", "SELECT");
    } else {
        node.blur();
        for (var i = 1; i < arguments.length; i++) {
            var nodes = node.getElementsByTagName(arguments[i]);
            for (var j = 0; j < nodes.length; j++) {
                nodes[j].blur();
            }
        }
    }
}
