/*
 * Dual-licensed under the MIT License & the Academic Free License v. 2.1.
 * See the file LICENSE for more information.
 *
 * (c) 2007-2008 by Per Cederberg & Dynabyte AB. All rights reserved.
 */
 
 // Check for loaded MochiKit
if (typeof(MochiKit) == "undefined") {
    throw new ReferenceError("MochiKit must be loaded before loading this script");
}

/**
 * @name MochiKit.SVG
 * @namespace Provides functions for creating embedded SVG images.
 */
if (typeof(MochiKit.SVG) == "undefined") {
    MochiKit.SVG = {};
}

/**
 * Creates an SVG document node.
 *
 * @function
 * @param {Object} [attrs] the optional node attributes
 * @param {Object} [...] the nodes or text to add as children
 *
 * @return {Node} the SVG DOM document node created
 */
MochiKit.SVG.SVG =
    MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG, "svg",
                                   [],
                                   { version: "1.1", baseProfile: "full" });

/**
 * Creates an SVG definitions node.
 *
 * @function
 * @param {Object} [attrs] the optional node attributes
 * @param {Object} [...] the nodes or text to add as children
 *
 * @return {Node} the SVG DOM document node created
 */
MochiKit.SVG.DEFS =
    MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG, "defs");

/**
 * Creates an SVG group node.
 *
 * @function
 * @param {Object} [attrs] the optional node attributes
 * @param {Object} [...] the nodes or text to add as children
 *
 * @return {Node} the SVG DOM document node created
 */
MochiKit.SVG.G =
    MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG, "g");

/**
 * Creates an SVG line node.
 *
 * @function
 * @param {String} x1 the x1 coordinate value
 * @param {String} y1 the y1 coordinate value
 * @param {String} x2 the x2 coordinate value
 * @param {String} y2 the y2 coordinate value
 * @param {Object} [attrs] the optional node attributes
 *
 * @return {Node} the SVG DOM document node created
 */
MochiKit.SVG.LINE =
    MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG, "line",
                                  ["x1", "y1", "x2", "y2"]);

/**
 * Creates an SVG rectangle node.
 *
 * @function
 * @param {String} x the x coordinate value
 * @param {String} y the y coordinate value
 * @param {String} width the width value
 * @param {String} height the height value
 * @param {Object} [attrs] the optional node attributes
 *
 * @return {Node} the SVG DOM document node created
 */
MochiKit.SVG.RECT =
    MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG, "rect",
                                  ["x", "y", "width", "height"]);

/**
 * Creates an SVG circle node.
 *
 * @function
 * @param {String} cx the center x coordinate value
 * @param {String} cy the center y coordinate value
 * @param {String} r the radius value
 * @param {Object} [attrs] the optional node attributes
 *
 * @return {Node} the SVG DOM document node created
 */
MochiKit.SVG.CIRCLE =
    MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG, "circle",
                                  ["cx", "cy", "r"]);

/**
 * Creates an SVG path node.
 *
 * @function
 * @param {String} d the path data value
 * @param {Object} [attrs] the optional node attributes
 *
 * @return {Node} the SVG DOM document node created
 */
MochiKit.SVG.PATH =
    MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG, "path",
                                  ["d"]);

/**
 * Creates an SVG text node.
 *
 * @function
 * @param {String} x the x coordinate value
 * @param {String} y the y coordinate value
 * @param {Object} [attrs] the optional node attributes
 * @param {Object} [...] the text to add as children
 *
 * @return {Node} the SVG DOM document node created
 */
MochiKit.SVG.TEXT =
    MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG, "text",
                                  ["x", "y"]);

/**
 * Creates an SVG radial gradient node.
 *
 * @function
 * @param {String} id the id of the node
 * @param {Object} [attrs] the optional node attributes
 * @param {Object} [...] the stop nodes to add as children
 *
 * @return {Node} the SVG DOM document node created
 */
MochiKit.SVG.RADIALGRADIENT =
    MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG, "radialGradient",
                                  ["id"],
                                  { gradientUnits: "objectBoundingBox",
                                    cx: "0.5", cy: "0.5", r: "0.5" });

/**
 * Creates an SVG gradient stop node.
 *
 * @function
 * @param {String} offset the stop offset
 * @param {String} color the stop color
 * @param {Object} [attrs] the optional node attributes
 *
 * @return {Node} the SVG DOM document node created
 */
MochiKit.SVG.STOP =
    MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG, "stop",
                                  ["offset", "stop-color"]);

/**
 * Moves a node to the top of the SVG drawing order (i.e. z-index).
 * Note that this will only have effect on other SVG DOM nodes with
 * the same parent node. Otherwise, the node must be moved down in
 * the SVG DOM tree by changing parent node.
 *
 * @param {Node/String} node the SVG DOM node or unique id
 */
MochiKit.SVG.moveToTop = function(node) {
    node = MochiKit.DOM.getElement(node);
    if (node != null) {
        var parent = node.parentNode;
        if (parent && parent.lastChild !== node) {
            parent.appendChild(node);
        }
    }
}

/**
 * Moves a node to the bottom of the SVG drawing order (i.e. z-index).
 * Note that this will only have effect on other SVG DOM nodes with
 * the same parent node. Otherwise, the node must be moved up in
 * the SVG DOM tree by changing parent node.
 *
 * @param {Node/String} node the SVG DOM node or unique id
 */
MochiKit.SVG.moveToBottom = function(node) {
    node = MochiKit.DOM.getElement(node);
    if (node != null) {
        var parent = node.parentNode;
        if (parent && parent.firstChild !== node) {
            parent.insertBefore(node, parent.firstChild);
        }
    }
}

/**
 * Adds a rotation transform to a SVG DOM node. Any previous
 * rotation transform will be kept intact.
 *
 * @param {Node/String} node the SVG DOM node or unique id
 * @param {String/Number} angle the numeric angle
 * @param {String/Number} [x] the x coordinate value
 * @param {String/Number} [y] the y coordinate value
 */
MochiKit.SVG.rotate = function(node, angle, x, y) {
    var str = MochiKit.DOM.getNodeAttribute(node, "transform");
    x = x || 0;
    y = y || 0;
    if (str == null || str == "") {
        str = "";
    } else {
        str += " ";
    }
    str += "rotate(" + angle + "," + x + "," + y + ")";
    MochiKit.DOM.setNodeAttribute(node, "transform", str);
}
