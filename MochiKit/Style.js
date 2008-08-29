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

// Check for loaded MochiKit.Style
if (typeof(MochiKit.Style) == "undefined") {
    throw new ReferenceError("MochiKit.Style must be loaded before loading this script");
}

/**
 * Returns the border widths for an HTML DOM node. The widths for
 * all four sides will be returned.
 *
 * @param {Object} node the HTML DOM node
 *
 * @return {Object} an object with "t", "b", "l" and "r" properties,
 *         each containing either an integer value or null
 */
MochiKit.Style.getBorderBox = function(node) {
    var getStyle = MochiKit.Style.getStyle;
    var px = MochiKit.Style._toPixels;
    return { t: px(getStyle(node, "border-width-top")),
             b: px(getStyle(node, "border-width-bottom")),
             l: px(getStyle(node, "border-width-left")),
             r: px(getStyle(node, "border-width-right")) };
}

/**
 * Returns the padding sizes for an HTML DOM node. The sizes for all
 * four sides will be returned.
 *
 * @param {Object} node the HTML DOM node
 *
 * @return {Object} an object with "t", "b", "l" and "r" properties,
 *         each containing either an integer value or null
 */
MochiKit.Style.getPaddingBox = function(node) {
    var getStyle = MochiKit.Style.getStyle;
    var px = MochiKit.Style._toPixels;
    return { t: px(getStyle(node, "padding-top")),
             b: px(getStyle(node, "padding-bottom")),
             l: px(getStyle(node, "padding-left")),
             r: px(getStyle(node, "padding-right")) };
}

/**
 * Converts a style pixel value to the corresponding integer. If the
 * string ends with "px", those characters will be silently removed.
 *
 * @param {String} value the style string value to convert
 *
 * @return {Number} the numeric value, or
 *         null if the conversion failed
 */
MochiKit.Style._toPixels = function(value) {
    if (value != null) {
        try {
            value = MochiKit.Format.rstrip(value, "px");
            value = Math.round(parseFloat(value));
        } catch (ignore) {
            value = null;
        }
    }
    return (value == null || isNaN(value)) ? null : value;
}

/**
 * Returns the scroll offset for an HTML DOM node.
 *
 * @param {Object} node the HTML DOM node
 *
 * @return {Object} a MochiKit.Style.Coordinates object with "x" and
 *         "y" properties containing the element scroll offset
 */
MochiKit.Style.getScrollOffset = function(node) {
    node = MochiKit.DOM.getElement(node);
    var x = node.scrollLeft || 0;
    var y = node.scrollTop || 0;
    return new MochiKit.Style.Coordinates(x, y);
}

/**
 * Sets the scroll offset for an HTML DOM node.
 *
 * @param {Object} node the HTML DOM node
 * @param {Object} offset the MochiKit.Style.Coordinates containing
 *            the new scroll offset "x" and "y" values
 */
MochiKit.Style.setScrollOffset = function(node, offset) {
    node = MochiKit.DOM.getElement(node);
    node.scrollLeft = offset.x;
    node.scrollTop = offset.y;
}

/**
 * Resets the scroll offsets to zero for for an HTML DOM node.
 * Optionally all child node offsets can also be reset.
 *
 * @param {Object} node the HTML DOM node
 * @param {Boolean} [recursive] the recursive flag, defaults to
 *            false
 */
MochiKit.Style.resetScrollOffset = function(node, recursive) {
    node = MochiKit.DOM.getElement(node);
    node.scrollLeft = 0;
    node.scrollTop = 0;
    if (recursive) {
        node = node.firstChild;
        while (node != null) {
            if (node.nodeType === 1) { // Node.ELEMENT_NODE
                MochiKit.Style.resetScrollOffset(node, true);
            }
            node = node.nextSibling;
        }
    }
}

/**
 * Adjusts the scroll offsets for an HTML DOM node to ensure optimal
 * visibility for the specified coordinates box. This function will
 * scroll the node both vertially and horizontally to ensure that
 * the top left corner of the box is always visible and that as much
 * of the box extent as possible is visible.
 *
 * @param {Object} node the HTML DOM node
 * @param {Object} box the coordinates box with optional properties
 *            {l, t, r, b} or {x, y, w, h}  
 */
MochiKit.Style.adjustScrollOffset = function(node, box) {
    node = MochiKit.DOM.getElement(node);
    var dim = MochiKit.Style.getElementDimensions(node);
    var xMin = MochiKit.Base.defaultValue(box.l, box.x, NaN);
    var xMax = MochiKit.Base.defaultValue(box.r, xMin + box.w, NaN);
    var yMin = MochiKit.Base.defaultValue(box.t, box.y, NaN);
    var yMax = MochiKit.Base.defaultValue(box.b, yMin + box.h, NaN);
    if (!isNaN(xMax) && node.scrollLeft + dim.w < xMax) {
        node.scrollLeft = xMax - dim.h;
    }
    if (!isNaN(xMin) && node.scrollLeft > xMin) {
        node.scrollLeft = xMin;
    }
    if (!isNaN(yMax) && node.scrollTop + dim.h < yMax) {
        node.scrollTop = yMax - dim.h;
    }
    if (!isNaN(yMin) && node.scrollTop > yMin) {
        node.scrollTop = yMin;
    }
}

/**
 * Registers algebraic constraints for an element width, height and
 * aspect ratio. The constraints may either be fixed numeric values,
 * functions or string formulas. The string formulas will be
 * converted to JavaScript functions, replacing any "%" character
 * with the parent reference value (i.e. the parent element width,
 * height or aspect ratio). It is also possible to directly reference
 * the parent values with the "w" and "h" variables. Any functions
 * specified must take both the parent element width and height as
 * arguments (possibly ignoring one or the other) and return a
 * number. Any value returned when evaluating the functions or
 * formulas will be bounded to the parent element size.
 *
 * @example // To set width to 50% - 20 px & height to 100%
 * registerSizeConstraints(node, "50% - 20", "100%");
 * // To set a square aspect ratio
 * registerSizeConstraints(node, null, null, 1.0);
 *
 * @param {Object} node the HTML DOM node
 * @param {Number/Function/String} [width] the width constraint
 * @param {Number/Function/String} [height] the height constraint
 * @param {Number/Function/String} [aspect] the aspect ratio constraint
 */
MochiKit.Style.registerSizeConstraints = function(node, width, height, aspect) {
    node = MochiKit.DOM.getElement(node);
    var sc = node.sizeConstraints = { w: null, h: null, a: null };
    if (typeof(width) == "number") {
        sc.w = function(w, h) { return width; }
    } else if (typeof(width) == "function") {
        sc.w = width;
    } else if (typeof(width) == "string") {
        var code = "return " + width.replace(/%/g, "*0.01*w") + ";";
        sc.w = new Function("w", "h", code);
    }
    if (typeof(height) == "number") {
        sc.h = function(w, h) { return height; }
    } else if (typeof(height) == "function") {
        sc.h = height;
    } else if (typeof(height) == "string") {
        var code = "return " + height.replace(/%/g, "*0.01*h") + ";";
        sc.h = new Function("w", "h", code);
    }
    if (typeof(aspect) == "number") {
        sc.a = function(w, h) { return aspect; }
    } else if (typeof(aspect) == "function") {
        sc.a = aspect;
    } else if (typeof(aspect) == "string") {
        var code = "return " + aspect.replace(/%/g, "*0.01*w/h") + ";";
        sc.a = new Function("w", "h", code);
    }
}

/**
 * Resizes a list of DOM nodes using their parent element sizes and
 * any registered size constraints. The resize operation is recursive
 * and will also be applied to all child nodes. If an element lacks a
 * size constraint for either width or height, that size aspect will
 * not be modified.
 *
 * @param {Object} [...] the HTML DOM nodes to resize
 *
 * @see registerSizeConstraints
 */
MochiKit.Style.resizeElements = function(/* ... */) {
    var args = MochiKit.Base.flattenArray(arguments);
    for (var i = 0; i < args.length; i++) {
        var node = MochiKit.DOM.getElement(args[i]);
        if (node != null && node.nodeType === 1 && // Node.ELEMENT_NODE
            node.parentNode != null && node.sizeConstraints != null) {

            var ref = { w: node.parentNode.w, h: node.parentNode.h };
            if (ref.w == null && ref.h == null) {
                ref = MochiKit.Style.getElementDimensions(node.parentNode, true);
            }
            var dim = MochiKit.Style._evalConstraints(node.sizeConstraints, ref);
            MochiKit.Style.setElementDimensions(node, dim);
            node.w = dim.w;
            node.h = dim.h;
        }
        if (node != null && typeof(node.resizeContent) == "function") {
            node.resizeContent();
        } else {
            node = node.firstChild;
            while (node != null) {
                if (node.nodeType === 1) { // Node.ELEMENT_NODE
                    MochiKit.Style.resizeElements(node);
                }
                node = node.nextSibling;
            }
        }
    }
}

/**
 * Evaluates the size constraint functions with a refeence dimension
 * object. This is an internal function used to encapsulate the
 * function calls and provide logging on errors.
 *
 * @param {Object} sc the size constraints object
 * @param {Object} ref the MochiKit.Style.Dimensions maximum
 *            reference values
 *
 * @return {Object} the MochiKit.Style.Dimensions with evaluated size
 *         constraint values (some may be null)
 */
MochiKit.Style._evalConstraints = function(sc, ref) {
    var log = MochiKit.Logging.logError;
    if (typeof(sc.w) == "function") {
        try {
            var w = Math.max(0, Math.min(ref.w, sc.w(ref.w, ref.h)));
        } catch (e) {
            log("Error evaluating width size constraint; " +
                "w: " + ref.w + ", h: " + ref.h, e);
        }
    }
    if (typeof(sc.h) == "function") {
        try {
            var h = Math.max(0, Math.min(ref.h, sc.h(ref.w, ref.h)));
        } catch (e) {
            log("Error evaluating height size constraint; " +
                "w: " + ref.w + ", h: " + ref.h, e);
        }
    }
    if (typeof(sc.a) == "function") {
        try {
            var a = sc.a(ref.w, ref.h);
            w = w || ref.w;
            h = h || ref.h;
            if (h * a > ref.w) {
                h = ref.w / a;
            }
            if (w / a > ref.h) {
                w = ref.h * a;
            }
            if (w > h * a) {
                w = h * a;
            } else {
                h = w / a;
            }
        } catch (e) {
            log("Error evaluating aspect size constraint; " +
                "w: " + ref.w + ", h: " + ref.h, e);
        }
    }
    if (w != null) {
        w = Math.floor(w);
    }
    if (h != null) {
        h = Math.floor(h);
    }
    return new MochiKit.Style.Dimensions(w, h);
}
