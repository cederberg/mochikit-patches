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
 * @namespace The base class for the HTML user interface widgets.
 *     The Widget class shouldn't be instantiated directly, instead
 *     one of the subclasses should be instantiated.
 */
MochiKit.Widget = function() {
    throw new ReferenceError("cannot call Widget constructor");
}

/**
 * Checks if the specified object is a widget. Any non-null object
 * that looks like a DOM node and has the element class "widget"
 * will cause this function to return true. Otherwise, false will
 * be returned. As an option, this function can also check if the
 * widget has a certain class by checking for an additional CSS
 * class "widget<className>" (which is a standard followed by all
 * widgets).
 *
 * @param {Object} obj the object to check
 * @param {String} [className] the optional widget class name
 *
 * @return {Boolean} true if the object looks like a widget, or
 *         false otherwise
 *
 * @static
 */
MochiKit.Widget.isWidget = function(obj, className) {
    if (className != null) {
        return MochiKit.DOM.isHTML(obj) &&
               MochiKit.DOM.hasElementClass(obj, "widget") &&
               MochiKit.DOM.hasElementClass(obj, "widget" + className);
    } else {
        return MochiKit.DOM.isHTML(obj) &&
               MochiKit.DOM.hasElementClass(obj, "widget");
    }
}

/**
 * Checks if the specified object is a form field. Any non-null
 * object that looks like a DOM node and is either an standard HTML
 * form field (&lt;input&gt;, &lt;textarea&gt; or &lt;select&gt;) or
 * one with a "value" property will cause this function to return
 * true. Otherwise, false will be returned.
 *
 * @param {Object} obj the object to check
 *
 * @return {Boolean} true if the object looks like a form field, or
 *         false otherwise
 *
 * @static
 */
MochiKit.Widget.isFormField = function(obj) {
    if (!MochiKit.DOM.isHTML(obj) || typeof(obj.tagName) !== "string") {
        return false;
    }
    var tagName = obj.tagName.toUpperCase();
    return tagName == "INPUT" || tagName == "TEXTAREA" ||
           tagName == "SELECT" || typeof(obj.value) !== "undefined";
}

/**
 * Creates a new widget with the specified name, attributes and
 * child widgets or DOM nodes. The widget class name must have been
 * registered in the MochiKit.Widget.Classes lookup table, or an
 * exception will be thrown. This function is identical to calling
 * the constructor function directly.
 *
 * @param {String} name the widget class name
 * @param {Object} attrs the widget and node attributes
 * @param {Object} [...] the child widgets or DOM nodes
 *
 * @return {Widget} the widget DOM node
 *
 * @throws {ReferenceError} if the widget class name couldn't be
 *             found in MochiKit.Widget.Classes
 *
 * @static
 */
MochiKit.Widget.createWidget = function(name, attrs/*, ...*/) {
    var cls = MochiKit.Widget.Classes[name];
    if (cls == null) {
        throw new ReferenceError("failed to find widget '" + name +
                                 "' in MochiKit.Widget.Classes");
    }
    var w = new cls(attrs);
    for (var i = 2; i < arguments.length; i++) {
        w.addAll(arguments[i]);
    }
    return w;
}

/**
 * Creates a tree of DOM nodes or widgets from a parsed XML document.
 * This function will call createWidget() for any XML element node
 * with a name corresponding to a widget class. Otherwise the
 * createDOM() function is called. Some basic adjustments will be
 * performed on the element attributes "id", "style", "class", "w",
 * "h" and "a", in order to set these values with the appropriate
 * function instead of as plain attribute strings. Text nodes with
 * non-whitespace content will be mapped to HTML DOM text nodes.
 *
 * @param {Node/NodeList} node the XML document, node or node list
 * @param {Object} [ids] the optional node id mappings
 *
 * @return {Array} an array of the root DOM nodes or widgets created,
 *         or null if no nodes could be created 
 */
MochiKit.Widget.createWidgetTree = function(node, ids) {
    if (node.documentElement) {
        return MochiKit.Widget.createWidgetTree(node.documentElement.childNodes, ids);
    } else if (typeof(node.item) != "undefined" && typeof(node.length) == "number") {
        var res = [];
        for (var i = 0; i < node.length; i++) {
            var list = MochiKit.Widget.createWidgetTree(node[i], ids);
            if (!MochiKit.Base.isUndefinedOrNull(list)) {
                res = res.concat(list);
            }
        }
        return res;
    } else if (node.nodeType === 1) { // Node.ELEMENT_NODE
        try {
            return [MochiKit.Widget._createWidgetTreeElem(node, ids)];
        } catch (e) {
            MochiKit.Logging.logError("Failed to create DOM node or widget", e);
        }
    } else if (node.nodeType === 3) { // Node.TEXT_NODE
        var str = node.nodeValue;
        if (str != null && MochiKit.Format.strip(str) != "") {
            return MochiKit.DOM.createTextNode(str.replace(/\s+/g, " "));
        }
    }
    // TODO: handling of CDATA nodes to escape text?
    return null;
}

/**
 * Creates a DOM node or widget from a parsed XML element. This
 * function will call createWidget() for any XML element node with a
 * name corresponding to a widget class. Otherwise the createDOM()
 * function is called. Some basic adjustments will be performed on
 * the element attributes "id", "style", "class", "w", "h" and "a",
 * in order to set these values with the appropriate function
 * instead of as plain attribute strings.
 *
 * @param {Node} node the XML element node
 * @param {Object} [ids] the optional node id mappings
 *
 * @return {Node/Widget} the DOM node or widget created
 */
MochiKit.Widget._createWidgetTreeElem = function(node, ids) {
    var name = node.nodeName;
    var attrs = MochiKit.Base.dict(MochiKit.DOM.attributeArrayNewImpl(node));
    var locals = MochiKit.Base.mask(attrs, ["id", "w", "h", "a", "class", "style"]);
    var children = MochiKit.Widget.createWidgetTree(node.childNodes, ids);
    if (MochiKit.Widget.Classes[name]) {
        var widget = MochiKit.Widget.createWidget(name, attrs, children);
    } else {
        var widget = MochiKit.DOM.createDOM(name, attrs, children);
        // TODO: Remove this once MochiKit ticket #302 is resolved
        if (attrs.value) {
            widget.value = attrs.value;
        }
    }
    if (locals.id) {
        if (ids) {
            ids[locals.id] = widget;
        } else {
            widget.id = locals.id;
        }
    }
    if (locals.w || locals.h || locals.a) {
        MochiKit.Style.registerSizeConstraints(widget, locals.w, locals.h, locals.a);
    }
    if (locals["class"]) {
        var classes = locals["class"].split(" ");
        if (typeof(widget.addClass) == "function") {
            widget.addClass.apply(widget, classes);
        } else {
            for (var i = 0; i < arguments.length; i++) {
                MochiKit.DOM.addElementClass(widget, classes[i]);
            }
        }
    }
    if (locals.style) {
        var styles = {};
        var parts = locals.style.split(";");
        for (var i = 0; i < parts.length; i++) {
            var a = parts[i].split(":");
            styles[MochiKit.Format.strip(a[0])] = MochiKit.Format.strip(a[1]);
        }
        MochiKit.Style.setStyle(widget, styles);
    }
    return widget;
}

/**
 * Destroys a widget or a DOM node. This method will remove the DOM
 * node from the tree, disconnect all signals and call all widget
 * destructor functions. This function will also be called
 * recursively on all child nodes. Once destroyed, all references to
 * the widget object should be cleared in order for the browser to
 * be able to reclaim the memory used.
 *
 * @param {Widget/Node} node the (widget) DOM node
 *
 * @static
 */
MochiKit.Widget.destroyWidget = function(node) {
    if (typeof(node.destroy) == "function") {
        node.destroy();
    }
    if (node.parentNode != null) {
        MochiKit.DOM.removeElement(node);
    }
    MochiKit.Signal.disconnectAll(node);
    while (node.firstChild != null) {
        MochiKit.Widget.destroyWidget(node.firstChild);
    }
}

/**
 * Emits a signal to any listeners connected with MochiKit.Signal.
 * This function handles errors by logging them to the default error
 * log in MochiKit.Logging.<p>
 *
 * Note that this function is an internal helper function for the
 * widgets and shouldn't be called by external code.
 *
 * @param {Widget} node the widget DOM node
 * @param {String} sig the signal name ("onclick" or similar)
 * @param {Object} [...] the optional signal arguments
 *
 * @return {Boolean} true if the signal was processed correctly, or
 *         false if an exception was thrown
 */
MochiKit.Widget.emitSignal = function(node, sig/*, ...*/) {
    try {
        MochiKit.Signal.signal.apply(MochiKit.Signal, arguments);
        return true;
    } catch (e) {
        var msg = "Exception in signal '" + sig + "' handler";
        MochiKit.Logging.logError(msg, e);
        return false;
    }
}

/**
 * The internal widget destructor function. This method should only
 * be called by destroyWidget() and may be overridden by subclasses.
 * By default this method does nothing.
 */
MochiKit.Widget.prototype.destroy = function() {
    // Nothing to do by default
}

/**
 * Updates the widget or HTML DOM node attributes. This method is
 * sometimes overridden by individual widgets to allow modification
 * of widget attributes also available in the constructor.
 *
 * @param {Object} attrs the widget and node attributes to set
 */
MochiKit.Widget.prototype.setAttrs = function(attrs) {
    MochiKit.DOM.updateNodeAttributes(this, attrs);
}

/**
 * Updates the CSS styles of this HTML DOM node. This method is
 * identical to MochiKit.Style.setStyle, but uses "this" as the
 * first argument.
 *
 * @param {Object} styles an object with the styles to set
 */
MochiKit.Widget.prototype.setStyle = function(styles) {
    MochiKit.Style.setStyle(this, styles);
}

/**
 * Checks if this HTML DOM node has the specified CSS class names.
 * Note that more than one CSS class name may be checked, in which
 * case all must be present.
 *
 * @param {String} [...] the CSS class names to check
 *
 * @return {Boolean} true if all CSS classes were present, or
 *         false otherwise
 */
MochiKit.Widget.prototype.hasClass = function(/* ... */) {
    for (var i = 0; i < arguments.length; i++) {
        if (!MochiKit.DOM.hasElementClass(this, arguments[i])) {
            return false;
        }
    }
    return true;
}

/**
 * Adds the specified CSS class names to this HTML DOM node.
 *
 * @param {String} [...] the CSS class names to add
 */
MochiKit.Widget.prototype.addClass = function(/* ... */) {
    for (var i = 0; i < arguments.length; i++) {
        MochiKit.DOM.addElementClass(this, arguments[i]);
    }
}

/**
 * Removes the specified CSS class names from this HTML DOM node.
 *
 * @param {String} [...] the CSS class names to remove
 */
MochiKit.Widget.prototype.removeClass = function(/* ... */) {
    for (var i = 0; i < arguments.length; i++) {
        MochiKit.DOM.removeElementClass(this, arguments[i]);
    }
}

/**
 * Toggles adding and removing the specified CSS class names to and
 * from this HTML DOM node. If all the CSS classes are already set,
 * they will be removed. Otherwise they will be added.
 *
 * @param {String} [...] the CSS class names to remove
 *
 * @return {Boolean} true if the CSS classes were added, or
 *         false otherwise
 */
MochiKit.Widget.prototype.toggleClass = function(/* ... */) {
    if (this.hasClass.apply(this, arguments)) {
        this.removeClass.apply(this, arguments);
        return false;
    } else {
        this.addClass.apply(this, arguments);
        return true;
    }
}

/**
 * Checks if this HTML DOM node is hidden (with the hide() method).
 * This method does NOT check the actual widget visibility (which
 * will be affected by animations for example), but only checks for
 * the "widgetHidden" CSS class.
 *
 * @return {Boolean} true if the widget is hidden, or
 *         false otherwise
 */
MochiKit.Widget.prototype.isHidden = function() {
    return this.hasClass("widgetHidden");
}

/**
 * Shows this HTML DOM node if it was previously hidden with the
 * hide() method. This mechanism is safe for all types of HTML
 * elements, since it uses a "widgetHidden" CSS class to hide nodes
 * instead of explicitly setting the CSS display property.
 */
MochiKit.Widget.prototype.show = function() {
    this.removeClass("widgetHidden");
}

/**
 * Hides this HTML DOM node if it doesn't have an explicit "display"
 * CSS value. This mechanism is safe for all types of HTML elements,
 * since it uses a "widgetHidden" CSS class to hide nodes instead of
 * explicitly setting the CSS display property.
 */
MochiKit.Widget.prototype.hide = function() {
    this.addClass("widgetHidden");
}

/**
 * Performs a visual effect animation on this widget. This is
 * implemented using the MochiKit.Visual effect package. All options
 * sent to this function will be passed on to the appropriate
 * MochiKit.Visual function.
 *
 * @param {Object} opts the visual effect options
 * @param {String} opts.effect the MochiKit.Visual effect name
 */
MochiKit.Widget.prototype.animate = function(opts) {
    // TODO: We should perhaps continue effects unless they do not collide
    if (this._anim != null) {
        this._anim.cancel();
    }
    var func = MochiKit.Visual[opts.effect];
    if (typeof(func) == "function") {
        this._anim = func.call(null, this, opts);
    }
}

/**
 * Blurs (unfocuses) this DOM node and all relevant child nodes.
 * This function will recursively blur all A, BUTTON, INPUT,
 * TEXTAREA and SELECT child nodes found.
 */
MochiKit.Widget.prototype.blurAll = function() {
    MochiKit.DOM.blurAll(this);
}

/**
 * Returns an array with all child DOM nodes. Note that the array is
 * a real JavaScript array, not a dynamic NodeList. This method is
 * sometimes overridden by child widgets in order to hide
 * intermediate DOM nodes required by the widget.
 *
 * @return {Array} the array of child DOM nodes
 */
MochiKit.Widget.prototype.getChildNodes = function() {
    return MochiKit.Base.extend([], this.childNodes);
}

/**
 * Adds a single child DOM node to this widget. This method is
 * sometimes overridden by child widgets in order to hide or control
 * intermediate DOM nodes required by the widget.
 *
 * @param {Widget/Node} child the DOM node to add
 */
MochiKit.Widget.prototype.addChildNode = function(child) {
    this.appendChild(child);
}

/**
 * Removes a single child DOM node from this widget. This method is
 * sometimes overridden by child widgets in order to hide or control
 * intermediate DOM nodes required by the widget.<p>
 *
 * Note that this method will NOT destroy the removed child widget,
 * so care must be taken to ensure proper child widget destruction.
 *
 * @param {Widget/Node} child the DOM node to remove
 */
MochiKit.Widget.prototype.removeChildNode = function(child) {
    this.removeChild(child);
}

/**
 * Adds one or more children to this widget. This method will
 * flatten any arrays among the arguments and ignores any null or
 * undefined argument. Any DOM nodes or widgets will be added to the
 * end, and other objects will be converted to a text node first.
 * Subclasses should normally override the addChildNode() method instead
 * of this one, since that is the basis for DOM node insertion.
 *
 * @param {Object} [...] the children to add
 */
MochiKit.Widget.prototype.addAll = function(/* ... */) {
    var args = MochiKit.Base.flattenArray(arguments);
    for (var i = 0; i < args.length; i++) {
        if (args[i] == null) {
            // Ignore null values
        } else if (MochiKit.DOM.isDOM(args[i])) {
            this.addChildNode(args[i]);
            MochiKit.Style.resizeElements(args[i]);
        } else {
            this.addChildNode(MochiKit.DOM.createTextNode(args[i]));
        }
    }
}

/**
 * Removes all children to this widget. This method will also destroy
 * and child widgets and disconnect all signal listeners. This method
 * uses the getChildNodes() and removeChildNode() methods to find and
 * remove the individual child nodes.
 */
MochiKit.Widget.prototype.removeAll = function() {
    var children = this.getChildNodes();
    for (var i = children.length - 1; i >= 0; i--) {
        this.removeChildNode(children[i]);
        MochiKit.Widget.destroyWidget(children[i]);
    }
}

/**
 * Creates a new button widget.
 *
 * @constructor
 * @param {Object} attrs the widget and node attributes
 * @param {Boolean} [attrs.highlight] the highlight option flag
 * @param {Object} [...] the child widgets or DOM nodes
 *
 * @return {Widget} the widget DOM node
 *
 * @class The button widget class. Used to provide a simple push
 *     button, using the &lt;button&gt; HTML element. In particular,
 *     the "onclick" event is usually of interest.
 * @property {Boolean} disabled The button disabled flag.
 * @extends MochiKit.Widget
 */
MochiKit.Widget.Button = function(attrs/*, ...*/) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(attrs, MochiKit.Base.extend(null, arguments, 1));
    }
    var o = MochiKit.DOM.BUTTON();
    MochiKit.Base.updatetree(o, this);
    o.addClass("widget", "widgetButton");
    o.setAttrs(attrs);
    o.addAll(MochiKit.Base.extend(null, arguments, 1));
    return o;
}
MochiKit.Widget.Button.prototype = MochiKit.Base.clone(MochiKit.Widget.prototype);

/**
 * Updates the widget or HTML DOM node attributes.
 *
 * @param {Object} attrs the widget and node attributes to set
 * @param {Boolean} [attrs.highlight] the highlight option flag
 */
MochiKit.Widget.Button.prototype.setAttrs = function(attrs) {
    attrs = MochiKit.Base.update({}, attrs);
    var locals = MochiKit.Base.mask(attrs, ["highlight"]);
    if (typeof(locals.highlight) != "undefined") {
        if (MochiKit.Base.isFalse(locals.highlight)) {
            this.removeClass("widgetButtonHighlight");
        } else {
            this.addClass("widgetButtonHighlight");
        }
    }
    MochiKit.DOM.updateNodeAttributes(this, attrs);
}

/**
 * Creates a new dialog widget.
 *
 * @constructor
 * @param {Object} attrs the widget and node attributes
 * @param {String} [attrs.title] the dialog title, defaults to "Dialog"
 * @param {Boolean} [attrs.modal] the modal dialog flag, defaults to false
 * @param {Boolean} [attrs.center] the center dialog flag, defaults to true
 * @param {Object} [...] the child widgets or DOM nodes
 *
 * @return {Widget} the widget DOM node
 *
 * @class The dialog widget class. Used to provide a resizeable and
 *     moveable window within the current page. Internally it uses a
 *     number of &lt;div&gt; HTML elements. In addition to standard,
 *     HTML events, the "onshow", "onhide", "onmove" and "onresize"
 *     events are also triggered.
 * @extends MochiKit.Widget
 */
MochiKit.Widget.Dialog = function(attrs/*, ... */) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(attrs, MochiKit.Base.extend(null, arguments, 1));
    }
    var title = MochiKit.DOM.DIV({ "class": "widgetDialogTitle" }, "Dialog");
    var close = new MochiKit.Widget.Icon({ ref: "CLOSE", "class": "widgetDialogClose" });
    var resize = new MochiKit.Widget.Icon({ ref: "RESIZE", "class": "widgetDialogResize" });
    var content = MochiKit.DOM.DIV({ "class": "widgetDialogContent" });
    MochiKit.Style.registerSizeConstraints(content, "100% - 22", "100% - 44");
    var o = MochiKit.DOM.DIV({}, title, close, resize, content);
    MochiKit.Base.updatetree(o, this);
    o.setAttrs(MochiKit.Base.update({ modal: false, center: true }, attrs));
    o.addClass("widget", "widgetDialog", "widgetHidden");
    o.addAll(MochiKit.Base.extend(null, arguments, 1));
    MochiKit.Signal.connect(title, "onmousedown", o, "_handleMoveStart");
    MochiKit.Signal.connect(close, "onclick", o, "hide");
    MochiKit.Signal.connect(resize, "onmousedown", o, "_handleResizeStart");
    return o;
}
MochiKit.Widget.Dialog.prototype = MochiKit.Base.clone(MochiKit.Widget.prototype);

/**
 * Updates the dialog or HTML DOM node attributes.
 *
 * @param {Object} attrs the widget and node attributes to set
 * @param {String} [attrs.title] the dialog title
 * @param {Boolean} [attrs.modal] the modal dialog flag
 * @param {Boolean} [attrs.center] the center dialog flag
 */
MochiKit.Widget.Dialog.prototype.setAttrs = function(attrs) {
    attrs = MochiKit.Base.update({}, attrs);
    var locals = MochiKit.Base.mask(attrs, ["title", "modal", "center"]);
    if (typeof(locals.title) != "undefined") {
        MochiKit.DOM.replaceChildNodes(this.firstChild, locals.title);
    }
    if (typeof(locals.modal) != "undefined") {
        this.modal = !MochiKit.Base.isFalse(locals.modal);
    }
    if (typeof(locals.center) != "undefined") {
        this.center = !MochiKit.Base.isFalse(locals.center);
    }
    MochiKit.DOM.updateNodeAttributes(this, attrs);
}

/**
 * Shows the dialog.
 */
MochiKit.Widget.Dialog.prototype.show = function() {
    if (this.parentNode == null) {
        throw new Error("Cannot show Dialog widget without setting a parent DOM node");
    }
    if (this.modal) {
        var attrs = { loading: false, message: "", style: { "z-index": "99" } };
        this._modalNode = new MochiKit.Widget.Overlay(attrs);
        this.parentNode.appendChild(this._modalNode);
    }
    this.removeClass("widgetHidden");
    var dim = MochiKit.Style.getElementDimensions(this);
    this.resizeTo(dim.w, dim.h);
    if (this.center) {
        this.moveToCenter();
    }
    MochiKit.Style.resetScrollOffset(this, true);
    MochiKit.Widget.emitSignal(this, "onshow");
}

/**
 * Hides the dialog.
 */
MochiKit.Widget.Dialog.prototype.hide = function() {
    if (this._modalNode != null) {
        MochiKit.Widget.destroyWidget(this._modalNode);
        this._modalNode = null;
    }
    this.blurAll();
    this.addClass("widgetHidden");
    MochiKit.Widget.emitSignal(this, "onhide");
}

/**
 * Returns an array with all child DOM nodes. Note that the array is
 * a real JavaScript array, not a dynamic NodeList.
 *
 * @return {Array} the array of child DOM nodes
 */
MochiKit.Widget.Dialog.prototype.getChildNodes = function() {
    return MochiKit.Base.extend([], this.lastChild.childNodes);
}

/**
 * Adds a single child DOM node to this widget.
 *
 * @param {Widget/Node} child the DOM node to add
 */
MochiKit.Widget.Dialog.prototype.addChildNode = function(child) {
    this.lastChild.appendChild(child);
}

/**
 * Removes a single child DOM node from this widget.
 *
 * @param {Widget/Node} child the DOM node to remove
 */
MochiKit.Widget.Dialog.prototype.removeChildNode = function(child) {
    this.lastChild.removeChild(child);
}

/**
 * Moves the dialog to the specified position (relative to the
 * parent DOM node). The position will be restrained by the parent
 * DOM node size.
 *
 * @param {Number} x the horizontal position (in pixels)
 * @param {Number} y the vertical position (in pixels)
 */
MochiKit.Widget.Dialog.prototype.moveTo = function(x, y) {
    var parentDim = MochiKit.Style.getElementDimensions(this.parentNode);
    var dim = MochiKit.Style.getElementDimensions(this);
    var pos = { x: Math.max(0, Math.min(x, parentDim.w - dim.w - 2)),
                y: Math.max(0, Math.min(y, parentDim.h - dim.h - 2)) };
    MochiKit.Style.setElementPosition(this, pos);
    MochiKit.Widget.emitSignal(this, "onmove", pos);
}

/**
 * Moves the dialog to the center (relative to the parent DOM node).
 */
MochiKit.Widget.Dialog.prototype.moveToCenter = function() {
    var parentDim = MochiKit.Style.getElementDimensions(this.parentNode);
    var dim = MochiKit.Style.getElementDimensions(this);
    var pos = { x: Math.round(Math.max(0, (parentDim.w - dim.w) / 2)),
                y: Math.round(Math.max(0, (parentDim.h - dim.h) / 2)) };
    MochiKit.Style.setElementPosition(this, pos);
    MochiKit.Widget.emitSignal(this, "onmove", pos);
}

/**
 * Resizes the dialog to the specified size (in pixels). The size
 * will be restrained by the parent DOM node size.
 *
 * @param {Number} width the width (in pixels)
 * @param {Number} height the height (in pixels)
 */
MochiKit.Widget.Dialog.prototype.resizeTo = function(width, height) {
    var parentDim = MochiKit.Style.getElementDimensions(this.parentNode);
    var pos = MochiKit.Style.getElementPosition(this.parentNode);
    pos = MochiKit.Style.getElementPosition(this, pos);
    var dim = { w: Math.max(150, Math.min(width, parentDim.w - pos.x - 2)),
                h: Math.max(100, Math.min(height, parentDim.h - pos.y - 2)) };
    MochiKit.Style.setElementDimensions(this, dim);
    MochiKit.Style.registerSizeConstraints(this, null, null);
    MochiKit.Base.update(this, dim);
    MochiKit.Style.resizeElements(this.lastChild);
    MochiKit.Widget.emitSignal(this, "onresize", dim);
}

/**
 * Initiates a dialog move drag operation. This will install a mouse
 * event handler on the parent document.
 *
 * @param {Event} evt the MochiKit.Signal.Event object
 */
MochiKit.Widget.Dialog.prototype._handleMoveStart = function(evt) {
    var pos = MochiKit.Style.getElementPosition(this.parentNode);
    this._offsetPos = MochiKit.Style.getElementPosition(this, pos);
    this._startPos = evt.mouse().page;
    evt.stop();
    MochiKit.Signal.connect(document, "onmousemove", this, "_handleMove");
    MochiKit.Signal.connect(document, "onmouseup", this, "_stopDrag");
}

/**
 * Handles a dialog move drag operation.
 *
 * @param {Event} evt the MochiKit.Signal.Event object
 */
MochiKit.Widget.Dialog.prototype._handleMove = function(evt) {
    var pos = evt.mouse().page;
    this.moveTo(this._offsetPos.x + pos.x - this._startPos.x,
                this._offsetPos.y + pos.y - this._startPos.y);
}

/**
 * Initiates a dialog resize drag operation. This will install a
 * mouse event handler on the parent document.
 *
 * @param {Event} evt the MochiKit.Signal.Event object
 */
MochiKit.Widget.Dialog.prototype._handleResizeStart = function(evt) {
    this._offsetDim = MochiKit.Style.getElementDimensions(this);
    this._startPos = evt.mouse().page;
    evt.stop();
    // TODO: correct handling of drag event, since IE seems to get
    //       problems when mouse enters other HTML elements
    MochiKit.Signal.connect(document, "onmousemove", this, "_handleResize");
    MochiKit.Signal.connect(document, "onmousedown", function(evt) { evt.stop(); });
    MochiKit.Signal.connect(document, "onmouseup", this, "_stopDrag");
}

/**
 * Handles a dialog resize drag operation.
 *
 * @param {Event} evt the MochiKit.Signal.Event object
 */
MochiKit.Widget.Dialog.prototype._handleResize = function(evt) {
    var pos = evt.mouse().page;
    this.resizeTo(this._offsetDim.w + pos.x - this._startPos.x,
                  this._offsetDim.h + pos.y - this._startPos.y);
}

/**
 * Stops a dialog resize or move drag operation.
 *
 * @param {Event} evt the MochiKit.Signal.Event object
 */
MochiKit.Widget.Dialog.prototype._stopDrag = function(evt) {
    MochiKit.Signal.disconnectAll(document, "onmousemove");
    MochiKit.Signal.disconnectAll(document, "onmousedown");
    MochiKit.Signal.disconnectAll(document, "onmouseup");
}

/**
 * Creates a new field widget.
 *
 * @constructor
 * @param {Object} attrs the widget and node attributes
 * @param {String} attrs.name the field name
 * @param {String} [attrs.value] the initial field value, defaults
 *            to an empty string
 * @param {Number} [attrs.maxLength] the maximum data length,
 *            overflow will be displayed as a tooltip, defaults to
 *            -1 (unlimited)
 *
 * @return {Widget} the widget DOM node
 *
 * @class The field widget class. This widget is useful for providing
 *     visible display of form data, using a &lt;span&gt; HTML
 *     element.
 * @extends MochiKit.Widget
 */
MochiKit.Widget.Field = function(attrs) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(attrs);
    }
    var o = MochiKit.DOM.SPAN();
    MochiKit.Base.updatetree(o, this);
    o.addClass("widget", "widgetField");
    o.setAttrs(MochiKit.Base.update({ name: "", value: "", maxLength: -1 }, attrs));
    o.defaultValue = o.value;
    return o;
}
MochiKit.Widget.Field.prototype = MochiKit.Base.clone(MochiKit.Widget.prototype);

/**
 * Updates the widget or HTML DOM node attributes.
 *
 * @param {Object} attrs the widget and node attributes to set
 * @param {String} [attrs.name] the field name
 * @param {String} [attrs.value] the field value
 * @param {Number} [attrs.maxLength] the maximum data length,
 *            overflow will be displayed as a tooltip
 */
MochiKit.Widget.Field.prototype.setAttrs = function(attrs) {
    attrs = MochiKit.Base.update({}, attrs);
    var locals = MochiKit.Base.mask(attrs, ["name", "value", "maxLength"]);
    if (typeof(locals.name) != "undefined") {
        this.name = locals.name;
    }
    if (typeof(locals.maxLength) != "undefined") {
        this.maxLength = parseInt(locals.maxLength);
    }
    if (typeof(locals.value) != "undefined") {
        this.value = locals.value;
        if (this.maxLength > 0) {
            locals.value = MochiKit.Format.truncate(locals.value, this.maxLength, "...");
        }
        MochiKit.DOM.replaceChildNodes(this, locals.value);
        this.title = (this.value == locals.value) ? null : this.value;
    }
    MochiKit.DOM.updateNodeAttributes(this, attrs);
}

/**
 * Creates a new form widget.
 *
 * @constructor
 * @param {Object} attrs the widget and node attributes
 * @param {Object} [...] the child widgets or DOM nodes
 *
 * @return {Widget} the widget DOM node
 *
 * @class The form widget class. Provides a grouping for form fields,
 *     using the &lt;form&gt; HTML element. The form widget supports
 *     form reset, validation and data retrieval.
 * @extends MochiKit.Widget
 */
MochiKit.Widget.Form = function(attrs/*, ...*/) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(attrs);
    }
    var o = MochiKit.DOM.FORM(attrs);
    MochiKit.Base.updatetree(o, this);
    o.addClass("widget", "widgetForm");
    MochiKit.Signal.connect(o, "onsubmit", o, "_handleSubmit");
    o.addAll(MochiKit.Base.extend(null, arguments, 1));
    return o;
}
MochiKit.Widget.Form.prototype = MochiKit.Base.clone(MochiKit.Widget.prototype);

/**
 * Returns an array with all child DOM nodes containing form fields.
 * The child nodes will be returned based on the results of the 
 * MochiKit.Widget.isFormField() function.
 *
 * @return {Array} the array of form field elements
 */
MochiKit.Widget.Form.prototype.fields = function() {
    var fields = [];
    MochiKit.Base.nodeWalk(this, function(elem) {
        if (elem.nodeType !== 1) { // !Node.ELEMENT_NODE
            return null;
        }
        if (MochiKit.Widget.isFormField(elem)) {
            fields.push(elem);
            return null;
        } else {
            return elem.childNodes;
        }
    });
    return fields;
}

/**
 * Returns a map with all child DOM nodes containing form fields with
 * a name attribute. If multiple fields have the same name, the
 * returned map will contain an array with all matching fields.
 *
 * @return {Object} the map of form field elements
 */
MochiKit.Widget.Form.prototype.fieldMap = function() {
    var fields = this.fields();
    var map = {};
    for (var i = 0; i < fields.length; i++) {
        var name = fields[i].name;
        if (typeof(name) == "string") {
            if (map[name] instanceof Array) {
                map[name].push(fields[i]);
            } else if (map[name] != null) {
                map[name] = [map[name], fields[i]];
            } else {
                map[name] = fields[i];
            }
        }
    }
    return map;
}

/**
 * Resets all fields in the form to their default values.
 */
MochiKit.Widget.Form.prototype.reset = function() {
    this.validateReset();
    var fields = this.fields();
    for (var i = 0; i < fields.length; i++) {
        var elem = fields[i];
        // TODO: generic form field value setting
        if (typeof(elem.reset) == "function") {
            elem.reset();
        } else if (elem.type == "radio" && typeof(elem.defaultChecked) == "boolean") {
            elem.checked = elem.defaultChecked;
        } else if (elem.type == "checkbox" && typeof(elem.defaultChecked) == "boolean") {
            elem.checked = elem.defaultChecked;
        } else if (typeof(elem.defaultValue) == "string") {
            if (typeof(elem.setAttrs) == "function") {
                elem.setAttrs({ value: elem.defaultValue });
            } else {
                elem.value = elem.defaultValue;
            }
        } else if (elem.options != null) {
            for (var j = 0; j < elem.options.length; j++) {
                var opt = elem.options[j];
                opt.selected = opt.defaultSelected;
            }
        }
    }
}

/**
 * Returns a map with all form field values. If multiple fields have
 * the same name, the value will be set to an array of all values.
 * Any unchecked checkbox or radiobutton will be also be ignored.
 *
 * @return {Object} the map of form field values
 */
MochiKit.Widget.Form.prototype.valueMap = function() {
    var fields = this.fields();
    var map = {};
    for (var i = 0; i < fields.length; i++) {
        var name = fields[i].name;
        // TODO: use generic field value retrieval
        var value = "";
        if (typeof(fields[i].getValue) == "function") {
            value = fields[i].getValue();
        } else {
            value = fields[i].value;
        }
        if (fields[i].type === "radio" || fields[i].type === "checkbox") {
            if (fields[i].checked) {
                value = value || true;
            } else {
                value = null;
            }
        }
        if (typeof(name) == "string" && value != null) {
            if (map[name] instanceof Array) {
                map[name].push(value);
            } else if (map[name] != null) {
                map[name] = [map[name], value];
            } else {
                map[name] = value;
            }
        }
    }
    return map;
}

/**
 * Updates the fields in this form with a specified map of values.
 * If multiple fields have the same name, the value will be set to
 * all of them.
 *
 * @param {Object} values the map of form field values
 */
MochiKit.Widget.Form.prototype.update = function(values) {
    var fields = this.fields();
    for (var i = 0; i < fields.length; i++) {
        var elem = fields[i];
        if (elem.name in values) {
            var value = values[elem.name];
            // TODO: generic form field value setting
            if (elem.type === "radio" || elem.type === "checkbox") {
                if (value == null) {
                    elem.checked = false;
                } else if (MochiKit.Base.isArrayLike(value)) {
                    elem.checked = (MochiKit.Base.findValue(value, elem.value) >= 0);
                } else {
                    elem.checked = (elem.value === value || value === true);
                }
            } else {
                if (MochiKit.Base.isArrayLike(value)) {
                    value = value.join(", ");
                }
                if (typeof(elem.setAttrs) == "function") {
                    elem.setAttrs({ value: value });
                } else {
                    elem.value = value;
                }
            }
        }
    }
}

/**
 * Returns an array with all child DOM nodes containing form
 * validator widgets.
 *
 * @return {Array} the array of form validator widgets
 */
MochiKit.Widget.Form.prototype.validators = function() {
    var res = [];
    var elems = this.getElementsByTagName("SPAN");
    for (var i = 0; i < elems.length; i++) {
        if (MochiKit.Widget.isWidget(elems[i], "FormValidator")) {
            res.push(elems[i]);
        }
    }
    return res;
}

/**
 * Validates this form using the form validators found.
 *
 * @return {Boolean/MochiKit.Async.Deferred} true if the form
 *         validated successfully, false if the validation failed,
 *         or a MochiKit.Async.Deferred instance if the validation
 *         was deferred
 */
MochiKit.Widget.Form.prototype.validate = function() {
    var validators = this.validators();
    var fields = this.fields();
    var success = true;
    var defers = [];
    for (var i = 0; i < validators.length; i++) {
        validators[i].reset();
    }
    for (var i = 0; i < validators.length; i++) {
        for (var j = 0; j < fields.length; j++) {
            if (validators[i].name == fields[j].name) {
                var res = validators[i].verify(fields[j]);
                if (res instanceof MochiKit.Async.Deferred) {
                    defers.push(res);
                } else if (res === false) {
                    success = false;
                }
            }
        }
    }
    if (!success) {
        return false;
    } else if (defers.length > 0) {
        return MochiKit.Async.gatherResults(defers);
    } else {
        return true;
    }
}

/**
 * Resets all form validators.
 */
MochiKit.Widget.Form.prototype.validateReset = function() {
    var validators = this.validators();
    for (var i = 0; i < validators.length; i++) {
        validators[i].reset();
    }
}

/**
 * Handles the form submit signal.
 *
 * @param {Event} evt the MochiKit.Signal.Event object
 */
MochiKit.Widget.Form.prototype._handleSubmit = function(evt) {
    evt.stop();
}

/**
 * Creates a new form validator widget.
 *
 * @constructor
 * @param {Object} attrs the widget and node attributes
 * @param {String} attrs.name the form field name to validate
 * @param {Boolean} [attrs.mandatory] the mandatory field flag,
 *            defaults to true
 * @param {String/RegExp} [attrs.regex] the regular expression to
 *            match the field value against, defaults to null
 * @param {String} [attrs.display] the validator display setting
 *            (either "none" or "error"), defaults to "error"
 * @param {String} [attrs.message] the message to display, defaults
 *            to the validator function error message
 * @param {Function} [attrs.validator] the validator function
 *
 * @return {Widget} the widget DOM node
 *
 * @class The form validator widget class. Provides visual feedback
 *     on form validation failures, using a &lt;span&gt; HTML
 *     element. It is normally hidden by default and may be
 *     configured to only modify its related form field.
 * @property {String} name The form field name to validate.
 * @property {String} message The default validation message.
 * @property {Function} validator The validator function in use.
 * @extends MochiKit.Widget
 */
MochiKit.Widget.FormValidator = function(attrs) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(attrs);
    }
    var o = MochiKit.DOM.SPAN();
    MochiKit.Base.updatetree(o, this);
    o.addClass("widget", "widgetFormValidator");
    o.setAttrs(MochiKit.Base.update({ name: "", mandatory: true, display: "error", message: null, validator: null }, attrs));
    o.fields = [];
    o.hide();
    return o;
}
MochiKit.Widget.FormValidator.prototype = MochiKit.Base.clone(MochiKit.Widget.prototype);

/**
 * Updates the widget or HTML DOM node attributes.
 *
 * @param {Object} attrs the widget and node attributes to set
 * @param {String} [attrs.name] the form field name to validate
 * @param {Boolean} [attrs.mandatory] the mandatory field flag
 * @param {String/RegExp} [attrs.regex] the regular expression to
 *            match the field value against
 * @param {String} [attrs.display] the validator display setting
 *            (either "none" or "error")
 * @param {String} [attrs.message] the message to display
 * @param {Function} [attrs.validator] the validator function
 */
MochiKit.Widget.FormValidator.prototype.setAttrs = function(attrs) {
    attrs = MochiKit.Base.update({}, attrs);
    var locals = MochiKit.Base.mask(attrs, ["name", "mandatory", "regex", "display", "message", "validator"]);
    if (typeof(locals.name) != "undefined") {
        this.name = locals.name;
    }
    if (typeof(locals.mandatory) != "undefined") {
        this.mandatory = !MochiKit.Base.isFalse(locals.mandatory);
    }
    if (typeof(locals.regex) != "undefined") {
        if (locals.regex instanceof RegExp) {
            this.regex = locals.regex;
        } else {
            if (locals.regex.indexOf("^") != 0) {
                locals.regex = "^" + locals.regex;
            }
            if (locals.regex.indexOf("$") != locals.regex.length - 1) {
                locals.regex += "$";
            }
            this.regex = new RegExp(locals.regex);
        }
    }
    if (typeof(locals.display) != "undefined") {
        this.display = locals.display;
    }
    if (typeof(locals.message) != "undefined") {
        this.message = locals.message;
    }
    if (typeof(locals.validator) != "undefined") {
        this.validator = locals.validator;
    }
    MochiKit.DOM.updateNodeAttributes(this, attrs);
}

/**
 * Resets this form validator. This will hide any error messages and
 * mark all invalidated fields as valid.
 */
MochiKit.Widget.FormValidator.prototype.reset = function() {
    for (var i = 0; i < this.fields.length; i++) {
        MochiKit.DOM.removeElementClass(this.fields[i], "widgetInvalid");
    }
    this.fields = [];
    if (this.display === "error") {
        this.hide();
        this.removeAll();
    }
}

/**
 * Verifies a form field with this validator. If the form field
 * value doesn't match this validator, the field will be invalidated
 * until this validator is reset.
 *
 * @param {Widget/Node} field the form field DOM node
 *
 * @return {Boolean/MochiKit.Async.Deferred} true if the form
 *         validated successfully, false if the validation failed,
 *         or a MochiKit.Async.Deferred instance if the validation
 *         was deferred
 */
MochiKit.Widget.FormValidator.prototype.verify = function(field) {
    if (!field.disabled) {
        // TODO: use generic field value retrieval
        var value = "";
        if (typeof(field.getValue) == "function") {
            value = field.getValue();
        } else {
            value = field.value;
        }
        var stripped = MochiKit.Format.strip(value);
        if (MochiKit.Format.strip(value) == "") {
            if (this.mandatory) {
                var msg = "This field is mandatory and cannot be left blank";
                this.addError(field, msg);
                return false;
            }
        } else if (this.regex != null && !this.regex.test(stripped)) {
            var msg = "The field format is incorrect";
            this.addError(field, msg);
            return false;
        } else if (typeof(this.validator) == "function") {
            var res = this.validator(value);
            if (res instanceof MochiKit.Async.Deferred) {
                var self = this;
                res.addErrback(function(e) {
                    self.addError(field, e.message);
                    return e;
                });
                return res;
            } else if (typeof(res) == "string") {
                this.addError(field, res);
                return false;
            } else if (res === false) { 
                this.addError(field, "Field validation failed");
                return false;
            }
        }
    }
    return true;
}

/**
 * Adds a validation error message for the specified field. If the
 * field is already invalid, this method will not do anything.
 *
 * @param {Widget/Node} field the field DOM node
 * @param {String} message the validation error message
 */
MochiKit.Widget.FormValidator.prototype.addError = function(field, message) {
    if (!MochiKit.DOM.hasElementClass(field, "widgetInvalid")) {
        this.fields.push(field);
        MochiKit.DOM.addElementClass(field, "widgetInvalid");
        if (this.display === "error") {
            var attrs = { ref: "ERROR", tooltip: this.message || message };
            this.addAll(new MochiKit.Widget.Icon(attrs));
            this.show();
        }
    }
}

/**
 * Creates a new icon widget.
 *
 * @constructor
 * @param {Object} attrs the widget and node attributes
 * @param {String} [attrs.ref] the referenced icon definition
 * @param {String} [attrs.src] the icon image source URL (unmodified)
 * @param {String} [attrs.url] the icon image file URL, prepended by
 *             the "baseUrl" (that is inherited from the default icon)
 * @param {String} [attrs.baseUrl] the icon image base URL, used only
 *             to prepend to "url" (normally only specified in the
 *             default icon)
 * @param {String} [attrs.tooltip] the icon tooltip text
 *
 * @return {Widget} the widget DOM node
 *
 * @class The icon widget class. Used to provide a small clickable
 *     image, using the &lt;img&gt; HTML element. In particular,
 *     the "onclick" event is usually of interest. Predefined icon
 *     images for variuos purposes are available as constants.
 * @extends MochiKit.Widget
 */
MochiKit.Widget.Icon = function(attrs) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(attrs);
    }
    var o = MochiKit.DOM.IMG();
    MochiKit.Base.updatetree(o, this);
    o.setAttrs(attrs);
    o.addClass("widget", "widgetIcon");
    return o;
}
MochiKit.Widget.Icon.prototype = MochiKit.Base.clone(MochiKit.Widget.prototype);

/**
 * Updates the icon or HTML DOM node attributes.
 *
 * @param {Object} attrs the widget and node attributes to set
 * @param {String} [attrs.ref] the referenced icon definition
 * @param {String} [attrs.src] the icon image source URL (unmodified)
 * @param {String} [attrs.url] the icon image file URL, prepended by
 *             the "baseUrl" (that is inherited from the default icon)
 * @param {String} [attrs.baseUrl] the icon image base URL, used only
 *             to prepend to "url" (normally only specified in the
 *             default icon)
 * @param {String} [attrs.tooltip] the icon tooltip text
 */
MochiKit.Widget.Icon.prototype.setAttrs = function(attrs) {
    attrs = MochiKit.Base.update({}, attrs);
    if (attrs.ref) {
        MochiKit.Base.setdefault(attrs,
                                 MochiKit.Widget.Icon[attrs.ref],
                                 MochiKit.Widget.Icon.DEFAULT);
    }
    var locals = MochiKit.Base.mask(attrs, ["ref", "url", "baseUrl", "tooltip", "width", "height"]);
    if (typeof(locals.url) != "undefined") {
        MochiKit.Base.setdefault(locals, MochiKit.Widget.Icon.DEFAULT);
        attrs.src = locals.baseUrl + locals.url;
    }
    if (typeof(locals.tooltip) != "undefined") {
        attrs.alt = locals.tooltip;
        attrs.title = locals.tooltip;
    }
    /* XXX: Fix width and height for IE, as it seems that the
            values set by setAttribute() are ignored. */
    if (typeof(locals.width) != "undefined") {
        this.width = locals.width;
        this.setStyle({ width: locals.width });
    }
    if (typeof(locals.height) != "undefined") {
        this.height = locals.height;
        this.setStyle({ height: locals.height });
    }
    MochiKit.DOM.updateNodeAttributes(this, attrs);
}

/**
 * @scope MochiKit.Widget.Icon.prototype
 */
MochiKit.Base.update(MochiKit.Widget.Icon, {
    /** The default icon definition, inherited by all others. */
    DEFAULT: { baseUrl: "images/icons/", width: "16", height: "16" },
    /** The blank icon definition. */
    BLANK: { url: "blank.gif" },
    /** The close icon definition. */
    CLOSE: { url: "close.gif" },
    /** The resize icon definition. */
    RESIZE: { url: "resize-handle.gif" },
    /** The ok icon definition. */
    OK: { url: "ok.gif", tooltip: "OK" },
    /** The cancel icon definition. */
    CANCEL: { url: "cancel.gif", tooltip: "Cancel" },
    /** The help icon definition. */
    HELP: { url: "help.gif", tooltip: "Help" },
    /** The error icon definition. */
    ERROR: { url: "error.gif", tooltip: "Error" },
    /** The plus icon definition. */
    PLUS: { url: "plus.gif", tooltip: "Show" },
    /** The minus icon definition. */
    MINUS: { url: "minus.gif", tooltip: "Hide" },
    /** The next icon definition. */
    NEXT: { url: "next.gif", tooltip: "Next" },
    /** The previuos icon definition. */
    PREVIOUS: { url: "previous.gif", tooltip: "Previous" },
    /** The config icon definition. */
    CONFIG: { url: "config.gif", tooltip: "Configure" },
    /** The delay icon definition. */
    DELAY: { url: "delay.gif", tooltip: "Configure Delay" },
    /** The reload icon definition. */
    RELOAD: { url: "reload.gif", tooltip: "Reload" },
    /** The loading icon definition. */
    LOADING: { url: "loading.gif", tooltip: "Loading..." },
    /** The large loading icon definition. */
    LOADING_LARGE: { url: "loading-large.gif", tooltip: "Loading...", width: "32", height: "32" },
    /** The search icon definition. */
    SEARCH: { url: "magnifier.gif", tooltip: "Search" },
    /** The add icon definition. */
    ADD: { url: "add.gif", tooltip: "Add" },
    /** The remove icon definition. */
    REMOVE: { url: "remove.gif", tooltip: "Remove" },
    /** The edit icon definition. */
    EDIT: { url: "edit.gif", tooltip: "Edit" },
    /** The delete icon definition. */
    DELETE: { url: "trash.gif", tooltip: "Clear / Delete" },
    /** The select icon definition. */
    SELECT: { url: "select.gif", tooltip: "Select / Unselect" },
    /** The cut icon definition. */
    CUT: { url: "cut.gif", tooltip: "Cut" },
    /** The export icon definition. */
    EXPORT: { url: "export.gif", tooltip: "Export" },
    /** The expand icon definition. */
    EXPAND: { url: "expand.gif", tooltip: "Expand" },
    /** The up icon definition. */
    UP: { url: "up.gif", tooltip: "Move Up" },
    /** The down icon definition. */
    DOWN: { url: "down.gif", tooltip: "Move Down" },
    /** The left icon definition. */
    LEFT: { url: "left.gif", tooltip: "Move Left" },
    /** The right icon definition. */
    RIGHT: { url: "right.gif", tooltip: "Move Right" },
    /** The comment icon definition. */
    COMMENT: { url: "comment.gif", tooltip: "Comment" },
    /** The calendar icon definition. */
    CALENDAR: { url: "calendar.gif", tooltip: "Calendar" },
    /** The automatic icon definition. */
    AUTOMATIC: { url: "automatic.gif", tooltip: "Automatic Processing" },
    /** The plugin icon definition. */
    PLUGIN: { url: "plugin.gif", tooltip: "Plug-in" },
    /** The folder icon definition. */
    FOLDER: { url: "folder.gif" },
    /** The document icon definition. */
    DOCUMENT: { url: "document.gif" }
});

/**
 * Creates a new overlay widget.
 *
 * @constructor
 * @param {Object} attrs the widget and node attributes
 * @param {Boolean} [attrs.loading] the display loading icon flag,
 *            defaults to true
 * @param {String} [attrs.message] the overlay message text, defaults
 *            to "Working..."
 * @param {Widget} [...] the child widgets or DOM nodes
 *
 * @return {Widget} the widget DOM node
 *
 * @class The overlay widget class. Used to provide a layer on top
 *     of the parent node, using a &lt;div&gt; HTML element. This
 *     widget is useful for disabling the user interface during an
 *     operation.
 * @extends MochiKit.Widget
 */
MochiKit.Widget.Overlay = function(attrs/*, ...*/) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(attrs, MochiKit.Base.extend(null, arguments, 1));
    }
    var msg = MochiKit.DOM.DIV({ "class": "widgetOverlayMessage" });
    var o = MochiKit.DOM.DIV({}, msg);
    MochiKit.Base.updatetree(o, this);
    o.addClass("widget", "widgetOverlay");
    attrs = MochiKit.Base.update({ loading: true, message: "Working..." }, attrs);
    o.setAttrs(attrs);
    o.addAll(MochiKit.Base.extend(null, arguments, 1));
    return o;
}
MochiKit.Widget.Overlay.prototype = MochiKit.Base.clone(MochiKit.Widget.prototype);

/**
 * Updates the widget or HTML DOM node attributes.
 *
 * @param {Object} attrs the widget and node attributes to set
 * @param {Boolean} [attrs.loading] the display loading icon flag
 * @param {String} [attrs.message] the overlay message text
 */
MochiKit.Widget.Overlay.prototype.setAttrs = function(attrs) {
    attrs = MochiKit.Base.update({}, attrs);
    var locals = MochiKit.Base.mask(attrs, ["loading", "message"]);
    if (typeof(locals.loading) != "undefined") {
        this.showLoading = !MochiKit.Base.isFalse(locals.loading);
    }
    if (typeof(locals.message) != "undefined") {
        this.message = locals.message;
    }
    if (typeof(this.showLoading) != "undefined") {
        var icon = new MochiKit.Widget.Icon({ ref: "LOADING_LARGE" });
        icon.setStyle({ "padding-right": "20px" });
    }
    MochiKit.DOM.replaceChildNodes(this.firstChild, icon, this.message);
    MochiKit.DOM.updateNodeAttributes(this, attrs);
}

/**
 * Creates a new pane widget.
 *
 * @constructor
 * @param {Object} attrs the widget and node attributes
 * @param {String} [attrs.pageTitle] the page title used when inside
 *            a page container, defaults to "Page"
 * @param {String/Object} [attrs.pageStatus] the page status used
 *            when inside a page container, use one of the predefined
 *            status constants in this class, defaults to "ANY"
 * @param {Boolean} [attrs.pageCloseable] the page closeable flag
 *            used when inside some page containers, defaults to
 *            false
 * @param {Object} [...] the child widgets or DOM nodes
 *
 * @return {Widget} the widget DOM node
 *
 * @class The pane widget class. Used to create the simplest form of
 *     element container. It is also used inside various types of
 *     paged containers, such as a TabContainer, a Wizard and
 *     similar. A pane only uses a &lt;div&gt; HTML element, and
 *     supports being hidden and shown according to any page
 *     transitions required by a parent container. In addition to
 *     standard HTML events, the "onenter" and "onexit" events are
 *     triggered whenever the pane is used in a parent container
 *     page transition.
 * @property {String} pageTitle [read-only] The current page title.
 * @property {Object} pageStatus [read-only] The current page status.
 * @property {Boolean} pageCloseable [read-only] The current page
 *               closeable flag value.
 * @extends MochiKit.Widget
 */
MochiKit.Widget.Pane = function(attrs/*, ... */) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(attrs, MochiKit.Base.extend(null, arguments, 1));
    }
    var o = MochiKit.DOM.DIV();
    MochiKit.Base.updatetree(o, this);
    o.addClass("widget", "widgetPane");
    o.setAttrs(MochiKit.Base.update({ pageTitle: "Page", pageStatus: "ANY", pageCloseable: false }, attrs));
    o.addAll(MochiKit.Base.extend(null, arguments, 1));
    return o;
}
MochiKit.Widget.Pane.prototype = MochiKit.Base.clone(MochiKit.Widget.prototype);

/**
 * The default page status. Allows page transitions both to the
 * previous and the next page.
 *
 * @memberOf MochiKit.Widget.Pane
 * @name ANY
 * @static
 */
MochiKit.Widget.Pane.ANY = { previous: true, next: true };

/**
 * The forward-only page status. Allows transitions only to the next
 * page.
 *
 * @memberOf MochiKit.Widget.Pane
 * @name FORWARD
 * @static
 */
MochiKit.Widget.Pane.FORWARD = { previous: false, next: true };

/**
 * The backward-only page status. Allows transitions only to the
 * previous page.
 *
 * @memberOf MochiKit.Widget.Pane
 * @name BACKWARD
 * @static
 */
MochiKit.Widget.Pane.BACKWARD = { previous: true, next: false };

/**
 * The working page status. Will disable transitions both to the
 * previous and the next page. The page container may also display a
 * cancel button to allow user cancellation of the ongoing operation.
 *
 * @memberOf MochiKit.Widget.Pane
 * @name WORKING
 * @static
 */
MochiKit.Widget.Pane.WORKING = { previous: false, next: false };

/**
 * Updates the widget or HTML DOM node attributes.
 *
 * @param {Object} attrs the widget and node attributes to set
 * @param {String} [attrs.pageTitle] the page title used when inside
 *            a page container
 * @param {String/Object} [attrs.pageStatus] the page status used
 *            when inside a page container, use one of the predefined
 *            status constants in this class
 * @param {Boolean} [attrs.pageCloseable] the page closeable flag
 *            used when inside some page containers
 */
MochiKit.Widget.Pane.prototype.setAttrs = function(attrs) {
    attrs = MochiKit.Base.update({}, attrs);
    var locals = MochiKit.Base.mask(attrs, ["pageTitle", "pageStatus", "pageCloseable"]);
    var modified = false;
    if (typeof(locals.pageTitle) != "undefined") {
        this.pageTitle = locals.pageTitle;
        modified = true;
    }
    if (typeof(locals.pageStatus) != "undefined") {
        if (typeof(locals.pageStatus) == "string") {
            locals.pageStatus = MochiKit.Widget.Pane[locals.pageStatus];
        }
        this.pageStatus = locals.pageStatus;
        modified = true;
    }
    if (typeof(locals.pageCloseable) != "undefined") {
        this.pageCloseable = !MochiKit.Base.isFalse(locals.pageCloseable);
        modified = true;
    }
    if (modified && this.parentNode &&
        typeof(this.parentNode._updateStatus) == "function") {
        this.parentNode._updateStatus();
    }
    MochiKit.DOM.updateNodeAttributes(this, attrs);
}

/**
 * Handles the page enter event. This method is called by a parent
 * paged container widget (such as a TabContainer or a Wizard) and
 * will show the pane, trigger the "onenter" event and optionally
 * also perform other actions (see the opts parameter).
 *
 * @param {Object} opts the page transition options
 * @param {Boolean} [opts.validateReset] the form validation reset
 *            flag, used to clear all form validations in the pane
 */
MochiKit.Widget.Pane.prototype._handleEnter = function(opts) {
    opts = opts || {};
    if (opts.validateReset) {
        var forms = this.getElementsByTagName("FORM");
        for (var i = 0; i < forms.length; i++) {
            if (typeof(forms[i].validateReset) == "function") {
                forms[i].validateReset();
            }
        }
    }
    this.show();
    MochiKit.Style.resizeElements(this);
    MochiKit.Widget.emitSignal(this, "onenter");
}

/**
 * Handles the page exit event. This method is called by a parent
 * paged container widget (such as a TabContainer or a Wizard) and
 * will hide the pane, trigger the "onexit" event and optionally
 * also perform other actions (see the opts parameter).
 *
 * @param {Object} opts the page transition options
 * @param {Boolean} [opts.validateForm] the form validation flag,
 *            used to check all forms in the page for valid entries
 *            before proceeding
 *
 * @return {Boolean} true if the page exit event completed, or
 *         false if it was cancelled (due to validation errors)
 */
MochiKit.Widget.Pane.prototype._handleExit = function(opts) {
    opts = opts || {};
    if (opts.validateForm) {
        var forms = this.getElementsByTagName("FORM");
        for (var i = 0; i < forms.length; i++) {
            if (typeof(forms[i].validate) == "function") {
                var res = forms[i].validate();
                // TODO: handle MochiKit.Async.Deferred?
                if (!res) {
                    return false;
                }
            }
        }
    }
    this.blurAll();
    this.hide();
    MochiKit.Widget.emitSignal(this, "onexit");
    return true;
}

/**
 * Creates a new popup widget.
 *
 * @constructor
 * @param {Object} attrs the widget and node attributes
 * @param {Number} [attrs.delay] the widget auto-hide delay in
 *            milliseconds, defaults to 5000
 * @param {Object} [attrs.showAnim] the optional animation options
              when showing the popup, defaults to none
 * @param {Object} [attrs.hideAnim] the optional animation options
 *            when hiding the popup, defaults to none
 * @param {Widget} [...] the child widgets or DOM nodes
 *
 * @return {Widget} the widget DOM node
 *
 * @class The popup widget class. Used to provide a popup menu or
 *     information area, using a &lt;div&gt; HTML element. The Popup
 *     widget will automatically disappear after a configurable
 *     amount of time, unless the user performs keyboard or mouse
 *     actions related to the popup. In addition to standard HTML
 *     events, the "onshow" and "onhide" events are triggered when
 *     the menu has been shown or hidden.
 * @extends MochiKit.Widget
 */
MochiKit.Widget.Popup = function(attrs/*, ...*/) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(attrs, MochiKit.Base.extend(null, arguments, 1));
    }
    var o = MochiKit.DOM.DIV();
    MochiKit.Base.updatetree(o, this);
    o.addClass("widget", "widgetPopup", "widgetHidden");
    o.selectedIndex = -1;
    o._delayTimer = null;
    o.setAttrs(MochiKit.Base.update({ delay: 5000 }, attrs));
    o.addAll(MochiKit.Base.extend(null, arguments, 1));
    MochiKit.Signal.connect(o, "onmousemove", o, "_handleMouseMove");
    MochiKit.Signal.connect(o, "onclick", o, "_handleMouseClick");
    return o;
}
MochiKit.Widget.Popup.prototype = MochiKit.Base.clone(MochiKit.Widget.prototype);

/**
 * Updates the widget or HTML DOM node attributes.
 *
 * @param {Object} attrs the widget and node attributes to set
 * @param {Number} [attrs.delay] the widget auto-hide delay in
 *            milliseconds, defaults to 5000
 * @param {Object} [attrs.showAnim] the optional animation options
              when showing the popup, defaults to none
 * @param {Object} [attrs.hideAnim] the optional animation options
 *            when hiding the popup, defaults to none
 */
MochiKit.Widget.Popup.prototype.setAttrs = function(attrs) {
    attrs = MochiKit.Base.update({}, attrs);
    var locals = MochiKit.Base.mask(attrs, ["delay", "showAnim", "hideAnim"]);
    if (typeof(locals.delay) != "undefined") {
        this.delay = parseInt(locals.delay);
        this.resetDelay();
    }
    if (typeof(locals.showAnim) != "undefined") {
        this.showAnim = locals.showAnim;
    }
    if (typeof(locals.hideAnim) != "undefined") {
        this.hideAnim = locals.hideAnim;
    }
    MochiKit.DOM.updateNodeAttributes(this, attrs);
}

/**
 * Shows the popup.
 */
MochiKit.Widget.Popup.prototype.show = function() {
    if (this.isHidden()) {
        this.resetDelay();
        this.selectChild(-1);
        this.removeClass("widgetHidden");
        if (this.showAnim) {
            this.animate(this.showAnim);
        }
        MochiKit.Style.resetScrollOffset(this, true);
        MochiKit.Widget.emitSignal(this, "onshow");
    } else {
        this.resetDelay();
    }
}

/**
 * Hides the popup.
 */
MochiKit.Widget.Popup.prototype.hide = function() {
    if (this.isHidden()) {
        this.resetDelay();
    } else {
        this.addClass("widgetHidden");
        this.resetDelay();
        if (this.hideAnim) {
            this.animate(this.hideAnim);
        }
        MochiKit.Widget.emitSignal(this, "onhide");
    }
}

/**
 * Resets the popup auto-hide timer. Might be called manually when
 * receiving events on other widgets related to this one.
 */
MochiKit.Widget.Popup.prototype.resetDelay = function() {
    if (this._delayTimer) {
        clearTimeout(this._delayTimer);
        this._delayTimer = null;
    }
    if (!this.isHidden() && this.delay > 0) {
        this._delayTimer = setTimeout(MochiKit.Base.bind("hide", this), this.delay);
    }
}

/**
 * Returns the currently selected child node.
 *
 * @return {Node} the currently selected child node, or
 *         null if no node is selected
 */
MochiKit.Widget.Popup.prototype.selectedChild = function() {
    return MochiKit.DOM.childNode(this, this.selectedIndex);
}

/**
 * Marks a popup child as selected. The currently selected child will
 * automatically be unselected by this method.
 *
 * @param {Number/Node} indexOrNode the child node index or DOM node,
 *            use a negative value to unselect
 *
 * @return the index of the newly selected child, or
 *         -1 if none was selected
 */
MochiKit.Widget.Popup.prototype.selectChild = function(indexOrNode) {
    var node = this.selectedChild();
    if (node != null) {
        MochiKit.DOM.removeElementClass(node, "selected");
    }
    var node = MochiKit.DOM.childNode(this, indexOrNode);
    if (typeof(indexOrNode) == "number") {
        var index = indexOrNode;
    } else {
        var index = MochiKit.Base.findIdentical(this.childNodes, node);
    }
    if (index >= 0 && node != null) {
        this.selectedIndex = index;
        MochiKit.DOM.addElementClass(node, "selected");
        var box = { y: node.offsetTop, h: node.offsetHeight + 5 };
        MochiKit.Style.adjustScrollOffset(this, box);
    } else {
        this.selectedIndex = -1;
    }
    return this.selectedIndex;
}

/**
 * Moves the current selection by a numeric offset.
 *
 * @param {Number} offset the selection offset (a positive or
 *            negative number)
 *
 * @return the index of the newly selected child, or
 *         -1 if none was selected
 */
MochiKit.Widget.Popup.prototype.selectMove = function(offset) {
    var index = this.selectedIndex + offset;
    if (index >= this.childNodes.length) {
        index = 0;
    }
    if (index < 0) {
        index = this.childNodes.length - 1;
    }
    return this.selectChild(index);
}

/**
 * Handles mouse move events over the popup.
 *
 * @param {Event} evt the MochiKit.Signal.Event object
 */
MochiKit.Widget.Popup.prototype._handleMouseMove = function(evt) {
    this.show();
    var node = MochiKit.DOM.childNode(this, evt.target());
    if (node != null && MochiKit.DOM.hasElementClass(node, "widgetPopupItem")) {
        this.selectChild(node);
    } else {
        this.selectChild(-1);
    }
}

/**
 * Handles mouse click events on the popup.
 *
 * @param {Event} evt the MochiKit.Signal.Event object
 */
MochiKit.Widget.Popup.prototype._handleMouseClick = function(evt) {
    var node = MochiKit.DOM.childNode(this, evt.target());
    if (node != null && MochiKit.DOM.hasElementClass(node, "widgetPopupItem")) {
        this.selectChild(node);
    } else {
        this.selectChild(-1);
    }
}

/**
 * Creates a new progress bar widget.
 *
 * @constructor
 * @param {Object} attrs the widget and node attributes
 * @param {Number} [attrs.min] the minimum range value, defaults to 0
 * @param {Number} [attrs.max] the maximum range value, defaults to 100
 *
 * @return {Widget} the widget DOM node
 *
 * @class The progress bar widget class. Used to provide a dynamic
 *     progress meter, using two &lt;div&gt; HTML elements. The
 *     progress bar also provides a completion time estimation that
 *     is displayed in the bar. Whenever the range is modified, the
 *     time estimation is reset.
 * @extends MochiKit.Widget
 */
MochiKit.Widget.ProgressBar = function(attrs) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(attrs, MochiKit.Base.extend(null, arguments, 1));
    }
    var meter = MochiKit.DOM.DIV({ "class": "widgetProgressBarMeter" });
    var text = MochiKit.DOM.DIV({ "class": "widgetProgressBarText" });
    var o = MochiKit.DOM.DIV({}, meter, text);
    MochiKit.Base.updatetree(o, this);
    o.addClass("widget", "widgetProgressBar");
    o.setAttrs(MochiKit.Base.update({ min: 0, max: 100 }, attrs));
    o.setValue(0);
    return o;
}
MochiKit.Widget.ProgressBar.prototype = MochiKit.Base.clone(MochiKit.Widget.prototype);

/**
 * Updates the widget or HTML DOM node attributes.
 *
 * @param {Object} attrs the widget and node attributes to set
 * @param {Number} [attrs.min] the minimum range value, defaults to 0
 * @param {Number} [attrs.max] the maximum range value, defaults to 100
 */
MochiKit.Widget.ProgressBar.prototype.setAttrs = function(attrs) {
    attrs = MochiKit.Base.update({}, attrs);
    var locals = MochiKit.Base.mask(attrs, ["min", "max"]);
    if (typeof(locals.min) != "undefined" || typeof(locals.max) != "undefined") {
        this.minValue = parseInt(locals.min) || 0;
        this.maxValue = parseInt(locals.max) || 100;
        this.startTime = new Date().getTime();
        this.lastTime = this.startTime;
        this.timeLeft = null;
    }
    MochiKit.DOM.updateNodeAttributes(this, attrs);
}

/**
 * Updates the progress bar completion value. The value should be
 * within the range previosly established by the "min" and "max"
 * attributes and is used to calculate a completion ratio. The
 * ratio is then used both for updating the progress meter and for
 * calculating an approximate remaining time. Any previous progress
 * bar text will be replaced by this method.
 *
 * @param {Number} value the new progress value
 * @param {String} [text] the additional information text
 */
MochiKit.Widget.ProgressBar.prototype.setValue = function(value, text) {
    value = Math.min(Math.max(value, this.minValue), this.maxValue);
    var pos = value - this.minValue;
    var total = this.maxValue - this.minValue;
    var str = pos + " of " + total;
    if (typeof(text) == "string" && text != "") {
        str += " \u2014 " + text;
    }
    this.setRatio(pos / total, str);
}

/**
 * Updates the progress bar completion ratio. The ratio value should
 * be a floating-point number between 0.0 and 1.0. The ratio is used
 * both for updating the progress meter and for calculating an
 * approximate remaining time. Any previous progress bar text will
 * be replaced by this method.
 *
 * @param {Number} ratio the new progress ratio, a floating-point number
 *            between 0.0 and 1.0
 * @param {String} [text] the additional information text
 */
MochiKit.Widget.ProgressBar.prototype.setRatio = function(ratio, text) {
    var percent = Math.round(ratio * 1000) / 10;
    MochiKit.Style.setElementDimensions(this.firstChild, { w: percent }, "%");
    if (percent < 66) {
        this.lastChild.className = "widgetProgressBarText";
    } else {
        this.lastChild.className = "widgetProgressBarTextInverse";
    }
    if (typeof(text) == "string" && text != "") {
        text = Math.round(percent) + "% \u2014 " + text;
    } else {
        text = Math.round(percent) + "%";
    }
    var nowTime = new Date().getTime();
    if (nowTime - this.lastTime > 1000) {
        this.lastTime = nowTime;
        var period = nowTime - this.startTime;
        period = Math.max(Math.round(period / ratio - period), 0);
        this.timeLeft = MochiKit.DateTime.toApproxPeriod(period);
    }
    if (this.timeLeft != null && percent > 0 && percent < 100) {
        text += " \u2014 " + this.timeLeft + " left";
    }
    this.setText(text);
}

/**
 * Updates the progress bar text.
 *
 * @param {String} text the new progress bar text
 */
MochiKit.Widget.ProgressBar.prototype.setText = function(text) {
    MochiKit.DOM.replaceChildNodes(this.lastChild, text);
}

/**
 * Creates a new tab container widget.
 *
 * @constructor
 * @param {Object} attrs the widget and node attributes
 * @param {Widget} [...] the child widgets or DOM nodes (should be
 *            Pane widgets)
 *
 * @return {Widget} the widget DOM node
 *
 * @class The tab container widget class. Used to provide a set of
 *     tabbed pages, where the user can switch page freely.
 *     Internally it uses a &lt;div&gt; HTML element containing Pane
 *     widgets that are hidden and shown according to the page
 *     transitions. If a child Pane widget is "pageCloseable", a
 *     close button will be available on the tab label and an
 *     "onclose" signal will be emitted for that node when removed
 *     from the container.
 * @extends MochiKit.Widget
 */
MochiKit.Widget.TabContainer = function(attrs/*, ... */) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(attrs, MochiKit.Base.extend(null, arguments, 1));
    }
    var labels = MochiKit.DOM.DIV({ "class": "widgetTabContainerLabels" });
    var container = MochiKit.DOM.DIV({ "class": "widgetTabContainerContent" });
    var o = MochiKit.DOM.DIV(attrs, labels, container);
    MochiKit.Base.updatetree(o, this);
    o.addClass("widget", "widgetTabContainer");
    // TODO: possibly add MSIE size fix?
    MochiKit.Style.registerSizeConstraints(container, "100% - 22", "100% - 47");
    container.resizeContent = MochiKit.Base.noop;
    o._selectedIndex = -1;
    o.addAll(MochiKit.Base.extend(null, arguments, 1));
    return o;
}
MochiKit.Widget.TabContainer.prototype = MochiKit.Base.clone(MochiKit.Widget.prototype);

/**
 * Returns an array with all child pane widgets. Note that the array
 * is a real JavaScript array, not a dynamic NodeList.
 *
 * @return {Array} the array of child DOM nodes
 */
MochiKit.Widget.TabContainer.prototype.getChildNodes = function() {
    return MochiKit.Base.extend([], this.lastChild.childNodes);
}

/**
 * Adds a single child page widget to this widget. The child widget
 * should be a MochiKit.Widget.Pane widget, or it will be added to a
 * new one.
 *
 * @param {Widget} child the page widget to add
 */
MochiKit.Widget.TabContainer.prototype.addChildNode = function(child) {
    if (!MochiKit.Widget.isWidget(child, "Pane")) {
        child = new MochiKit.Widget.Pane(null, child);
    }
    MochiKit.Style.registerSizeConstraints(child, "100%", "100%");
    child.hide();

    var text = MochiKit.DOM.SPAN(null, child.pageTitle);
    if (child.pageCloseable) {
        var icon = new MochiKit.Widget.Icon({ ref: "CLOSE" });
        MochiKit.Signal.connect(icon, "onclick",
                                MochiKit.Base.bind("_handleClose", this, child));
    }
    var label = MochiKit.DOM.DIV({ "class": "widgetTabContainerLabel" },
                                 MochiKit.DOM.DIV({}, text, icon));
    MochiKit.Signal.connect(label, "onclick",
                            MochiKit.Base.bind("selectChild", this, child));
    this.firstChild.appendChild(label);
    this.lastChild.appendChild(child);
    if (this._selectedIndex < 0) {
        this.selectChild(0);
    }
}

/**
 * Removes a single child DOM node from this widget. This method is
 * sometimes overridden by child widgets in order to hide or control
 * intermediate DOM nodes required by the widget.<p>
 *
 * Note that this method will NOT destroy the removed child widget,
 * so care must be taken to ensure proper child widget destruction.
 *
 * @param {Widget/Node} child the DOM node to remove
 */
MochiKit.Widget.TabContainer.prototype.removeChildNode = function(child) {
    var children = this.getChildNodes();
    var index = MochiKit.Base.findIdentical(children, child);
    if (index < 0) {
        throw new Error("Cannot remove DOM node that is not a TabContainer child");
    }
    if (this._selectedIndex == index) {
        child._handleExit();
        this._selectedIndex = -1;
    }
    MochiKit.Widget.destroyWidget(this.firstChild.childNodes[index]);
    MochiKit.DOM.removeElement(child);
    MochiKit.Widget.emitSignal(child, "onclose");
    if (this._selectedIndex < 0 && this.getChildNodes().length > 0) {
        this.selectChild((index == 0) ? 0 : index - 1);
    }
}

// TODO: add support for status updates in child pane widget

/**
 * Returns the index of the currently selected child in the tab
 * container.
 *
 * @return {Number} the index of the selected child, or
 *         -1 if no child is selected
 */
MochiKit.Widget.TabContainer.prototype.selectedIndex = function() {
    return this._selectedIndex;
}

/**
 * Returns the child widget currently selected in the tab container.
 *
 * @return {Node} the child widget selected, or
 *         null if no child is selected
 */
MochiKit.Widget.TabContainer.prototype.selectedChild = function() {
    var children = this.getChildNodes();
    return (this._selectedIndex < 0) ? null : children[this._selectedIndex];
}

/**
 * Selects a specified child in the tab container. This method can be
 * called without arguments to re-select the currently selected tab.
 *
 * @param {Number/Node} [indexOrChild] the child index or node
 */
MochiKit.Widget.TabContainer.prototype.selectChild = function(indexOrChild) {
    var children = this.getChildNodes();
    if (this._selectedIndex >= 0) {
        var label = this.firstChild.childNodes[this._selectedIndex];
        MochiKit.DOM.removeElementClass(label, "selected");
        children[this._selectedIndex]._handleExit();
    }
    var index = -1;
    if (indexOrChild == null) {
        index = this._selectedIndex;
    } else if (typeof(indexOrChild) == "number") {
        index = indexOrChild;
    } else {
        index = MochiKit.Base.findIdentical(children, indexOrChild);
    }
    this._selectedIndex = (index < 0 || index >= children.length) ? -1 : index;
    if (this._selectedIndex >= 0) {
        var label = this.firstChild.childNodes[this._selectedIndex];
        MochiKit.DOM.addElementClass(label, "selected");
        children[this._selectedIndex]._handleEnter();
    }
}

/**
 * Resizes the currently selected child. This method need not be called
 * directly, but is automatically called whenever a parent node is
 * resized. It optimizes the resize chain by only resizing those DOM
 * child nodes that are visible, i.e. the currently selected tab
 * container child.
 */
MochiKit.Widget.TabContainer.prototype.resizeContent = function() {
    MochiKit.Style.resizeElements(this.lastChild);
    var child = this.selectedChild();
    if (child != null) {
        MochiKit.Style.resizeElements(child);
    }
}

/**
 * Handles the tab close event.
 *
 * @param {Node} child the child DOM node
 * @param {Event} evt the MochiKit.Signal.Event object
 */
MochiKit.Widget.TabContainer.prototype._handleClose = function(child, evt) {
    evt.stop();
    this.removeChildNode(child);
}

/**
 * Creates a new data table widget.
 *
 * @constructor
 * @param {Object} attrs the widget and node attributes
 * @param {Boolean} [attrs.multiple] the multiple row selection flag,
 *            defaults to false
 * @param {Widget} [...] the child table columns
 *
 * @return {Widget} the widget DOM node
 *
 * @class The table widget class. Used to provide a sortable and
 *     scrolling data table, using an outer &lt;div&gt; HTML
 *     element around a &lt;table&gt;. The Table widget can only
 *     have TableColumn child nodes, each providing a visible data
 *     column in the table. In addition to standard HTML events, the
 *     "onclear" and "onselect" events are triggered when data is
 *     cleared or selected in the table.
 * @extends MochiKit.Widget
 */
MochiKit.Widget.Table = function(attrs/*, ...*/) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(attrs, MochiKit.Base.extend(null, arguments, 1));
    }
    var thead = MochiKit.DOM.THEAD({}, MochiKit.DOM.TR());
    var tbody = MochiKit.DOM.TBODY();
    tbody.resizeContent = MochiKit.Base.noop;
    var table = MochiKit.DOM.TABLE({ "class": "widgetTable" }, thead, tbody);
    var o = MochiKit.DOM.DIV({}, table);
    MochiKit.Base.updatetree(o, this);
    o.addClass("widget", "widgetTable");
    o.setAttrs(MochiKit.Base.update({ multiple: false }, attrs));
    o._rows = [];
    o._data = null;
    o._keyField = null;
    o._selected = [];
    o.addAll(MochiKit.Base.extend(null, arguments, 1));
    MochiKit.Signal.connect(tbody, "onmousedown", o, "_handleSelect");
    return o;
}
MochiKit.Widget.Table.prototype = MochiKit.Base.clone(MochiKit.Widget.prototype);

/**
 * Updates the widget or HTML DOM node attributes.
 *
 * @param {Object} attrs the widget and node attributes to set
 * @param {Boolean} [attrs.multiple] the multiple row selection flag
 */
MochiKit.Widget.Table.prototype.setAttrs = function(attrs) {
    attrs = MochiKit.Base.update({}, attrs);
    var locals = MochiKit.Base.mask(attrs, ["multiple"]);
    if (typeof(locals.multiple) != "undefined") {
        this.multiple = !MochiKit.Base.isFalse(locals.multiple);
    }
    MochiKit.DOM.updateNodeAttributes(this, attrs);
}

/**
 * Returns an array with all child table column widgets. Note that
 * the array is a real JavaScript array, not a dynamic NodeList.
 *
 * @return {Array} the array of child table column widgets
 */
MochiKit.Widget.Table.prototype.getChildNodes = function() {
    var table = this.firstChild;
    var thead = table.firstChild;
    var tr = thead.firstChild;
    return MochiKit.Base.extend([], tr.childNodes);
}

/**
 * Adds a single child table column widget to this widget.
 *
 * @param {Widget} child the table column widget to add
 */
MochiKit.Widget.Table.prototype.addChildNode = function(child) {
    if (!MochiKit.Widget.isWidget(child, "TableColumn")) {
        throw new Error("Table widget can only have TableColumn children");
    }
    this.clear();
    var table = this.firstChild;
    var thead = table.firstChild;
    var tr = thead.firstChild;
    tr.appendChild(child);
}

/**
 * Removes a single child table column widget from this widget.
 * This will also clear all the data in the table.
 *
 * @param {Widget} child the table column widget to remove
 */
MochiKit.Widget.Table.prototype.removeChildNode = function(child) {
    this.clear();
    var table = this.firstChild;
    var thead = table.firstChild;
    var tr = thead.firstChild;
    tr.removeChild(child);
}

/**
 * Returns the column index of a field.
 *
 * @param {String} field the field name
 *
 * @return {Number} the column index, or
 *         -1 if not found
 */
MochiKit.Widget.Table.prototype.getColumnIndex = function(field) {
    var cols = this.getChildNodes();
    for (var i = 0; i < cols.length; i++) {
        if (cols[i].field === field) {
            return i;
        }
    }
    return -1;
}

/**
 * Returns the unique key identifier column field, or null if none
 * was set.
 *
 * @return {String} the key column field name, or
 *         null for none
 */
MochiKit.Widget.Table.prototype.getIdKey = function() {
    if (this._keyField) {
        return this._keyField;
    }
    var cols = this.getChildNodes();
    for (var i = 0; i < cols.length; i++) {
        if (cols[i].key) {
            return cols[i].field;
        }
    }
    return null;
}

/**
 * Sets the unique key identifier column field. Note that this
 * method will regenerate all row identifiers if the table already
 * contains data.
 *
 * @param {String} key the new key column field name 
 */
MochiKit.Widget.Table.prototype.setIdKey = function(key) {
    this._keyField = key;
    for (var i = 0; i < this._rows.length; i++) {
        var row = this._rows[i];
        if (this._keyField != null && row.$data[this._keyField] != null) {
            row.$id = row.$data[this._keyField];
        }
    }
}

/**
 * Returns the current sort key for the table.
 *
 * @return {String} the current sort field, or
 *         null for none
 */
MochiKit.Widget.Table.prototype.getSortKey = function() {
    var cols = this.getChildNodes();
    for (var i = 0; i < cols.length; i++) {
        if (cols[i].sort != null && cols[i].sort != "none") {
            return cols[i].field;
        }
    }
    return null;
}

/**
 * Returns a table cell element.
 *
 * @param {Number} row the row index
 * @param {Number} col the column index
 *
 * @return {Node} the table cell element node, or
 *         null if not found
 */
MochiKit.Widget.Table.prototype.getCellElem = function(row, col) {
    try {
        var table = this.firstChild;
        var tbody = table.lastChild;
        return tbody.childNodes[row].childNodes[col];
    } catch (e) {
        return null;
    }
}

/**
 * Clears all the data in the table. The column headers will not be
 * affected by this method. Use removeAll() or removeChildNode() to
 * also remove columns.
 */
MochiKit.Widget.Table.prototype.clear = function() {
    this.setData([]);
}

/**
 * Returns an array with the data in the table. The array returned
 * should correspond exactly to the one previously set, i.e. it has
 * not been sorted or modified in other ways.
 *
 * @return {Array} an array with the data in the table
 */
MochiKit.Widget.Table.prototype.getData = function() {
    return this._data;
}

/**
 * Sets the table data. The table data is an array of objects, each
 * having properties corresponding to the table column fields. Any
 * object property not mapped to a table column will be ignored (i.e.
 * a hidden column). See the TableColumn class for data mapping
 * details.
 *
 * @param {Array} data an array with data objects
 */
MochiKit.Widget.Table.prototype.setData = function(data) {
    var cols = this.getChildNodes();
    var selectedIds = this.getSelectedIds();
    MochiKit.Widget.emitSignal(this, "onclear");
    this._data = data;
    this._rows = [];
    this._selected = [];
    for (var i = 0; data != null && i < data.length; i++) {
        var row = { $id: "id" + i, $data: data[i] };
        for (var j = 0; j < cols.length; j++) {
            cols[j]._map(data[i], row);
        }
        if (this._keyField != null && data[i][this._keyField] != null) {
            row.$id = data[i][this._keyField];
        }
        this._rows.push(row);
    }
    var key = this.getSortKey();
    if (key) {
        this.sortData(key);
    } else {
        this._renderRows();
    }
    if (this.getIdKey() != null) {
        this._addSelectedIds(selectedIds);
    }
}

/**
 * Sorts the table data by field and direction.
 *
 * @param {String} field the sort field
 * @param {String} [direction] the sort direction, either "asc" or
 *            "desc"
 */
MochiKit.Widget.Table.prototype.sortData = function(field, direction) {
    var cols = this.getChildNodes();
    var selectedIds = this.getSelectedIds();
    this._selected = [];
    for (var i = 0; i < cols.length; i++) {
        if (cols[i].field === field) {
            if (cols[i].sort == "none") {
                // Skip sorting if not allowed
                return;
            } else if (direction == null) {
                direction = cols[i].sort || "asc";
            }
            cols[i].setAttrs({ sort: direction });
        } else if (cols[i].sort != "none") {
            cols[i].setAttrs({ sort: null });
        }
    }
    this._rows.sort(MochiKit.Base.keyComparator(field));
    if (direction == "desc") {
        this._rows.reverse();
    }
    this._renderRows();
    this._addSelectedIds(selectedIds);
}

/**
 * Redraws the table from updated source data. Note that this method
 * will not add or remove rows and keeps the current row order
 * intact. For a more complete redraw of the table, use setData().
 */
MochiKit.Widget.Table.prototype.redraw = function() {
    var cols = this.getChildNodes();
    for (var i = 0; i < this._rows.length; i++) {
        var row = this._rows[i];
        for (var j = 0; j < cols.length; j++) {
            cols[j]._map(row.$data, row);
        }
    }
    this._renderRows();
    for (var i = 0; i < this._selected.length; i++) {
        this._markSelection(this._selected[i]);
    }
}

/**
 * Renders the table rows.
 */
MochiKit.Widget.Table.prototype._renderRows = function() {
    var cols = this.getChildNodes();
    var tbody = this.firstChild.lastChild;
    MochiKit.DOM.replaceChildNodes(tbody);
    for (var i = 0; i < this._rows.length; i++) {
        var tr = MochiKit.DOM.TR();
        if (i % 2 == 1) {
            MochiKit.DOM.addElementClass(tr, "widgetTableAlt");
        }
        for (var j = 0; j < cols.length; j++) {
            tr.appendChild(cols[j]._render(this._rows[i]));
        }
        tr.rowNo = i;
        tbody.appendChild(tr);
    }
    if (this._rows.length == 0) {
        // Add empty row to avoid browser bugs
        tbody.appendChild(MochiKit.DOM.TR());
    }
}

/**
 * Returns the currently selected row ids. If no rows are selected,
 * an empty array will be returned. The row ids are the data values
 * from the key column, or automatically generated internal values
 * if no key column is set.
 *
 * @return {Array} an array with the selected row ids
 */
MochiKit.Widget.Table.prototype.getSelectedIds = function() {
    var res = [];
    for (var i = 0; i < this._selected.length; i++) {
        res.push(this._rows[this._selected[i]].$id);
    }
    return res;
}

/**
 * Returns the currently selected row data.
 *
 * @return {Object/Array} the data row selected, or
 *         an array of selected data rows if multiple selection is enabled
 */
MochiKit.Widget.Table.prototype.getSelectedData = function() {
    if (this.multiple) {
        var res = [];
        for (var i = 0; i < this._selected.length; i++) {
            res.push(this._rows[this._selected[i]].$data);
        }
        return res;
    } else if (this._selected.length > 0) {
        return this._rows[this._selected[0]].$data;
    } else {
        return null;
    }
}

/**
 * Adds the specified row id values to the selection. If the current
 * selection is changed the select signal will be emitted.
 *
 * @param {String/Array} [...] the row ids or array with ids to select
 *
 * @return {Array} an array with the new row ids actually selected
 */
MochiKit.Widget.Table.prototype.addSelectedIds = function() {
    var res = this._addSelectedIds(arguments);
    if (res.length > 0) {
        MochiKit.Widget.emitSignal(this, "onselect");
    }
    return res;
}

/**
 * Adds the specified row id values to the selection. Note that this
 * method does not emit any selection signal.
 *
 * @param {String/Array} [...] the row ids or array with ids to select
 *
 * @return {Array} an array with the new row ids actually selected
 */
MochiKit.Widget.Table.prototype._addSelectedIds = function() {
    var args = MochiKit.Base.flattenArguments(arguments);
    var ids = MochiKit.Base.dict(args, true);
    var res = [];
    MochiKit.Base.update(ids, MochiKit.Base.dict(this.getSelectedIds(), false));
    for (var i = 0; i < this._rows.length; i++) {
        if (ids[this._rows[i].$id]) {
            this._selected.push(i);
            this._markSelection(i);
            res.push(this._rows[i].$id);
        }
    }
    return res;
}

/**
 * Removes the specified row id values from the selection. If the
 * current selection is changed the select signal will be emitted.
 *
 * @param {String/Array} [...] the row ids or array with ids to unselect
 *
 * @return {Array} an array with the row ids actually unselected
 */
MochiKit.Widget.Table.prototype.removeSelectedIds = function() {
    var args = MochiKit.Base.flattenArguments(arguments);
    var ids = MochiKit.Base.dict(args, true);
    var res = [];
    for (var i = 0; i < this._rows.length; i++) {
        if (ids[this._rows[i].$id]) {
            var pos = MochiKit.Base.findIdentical(this._selected, i);
            if (pos >= 0) {
                this._selected.splice(i, 1);
                this._unmarkSelection(i);
                res.push(this._rows[i].$id);
            }
        }
    }
    if (res.length > 0) {
        MochiKit.Widget.emitSignal(this, "onselect");
    }
    return res;
}

/**
 * Handles the mouse selection events.
 *
 * @param {Event} evt the MochiKit.Signal.Event object
 */
MochiKit.Widget.Table.prototype._handleSelect = function(evt) {
    var tr = MochiKit.DOM.getFirstParentByTagAndClassName(evt.target(), "TR");
    if (tr == null || tr.rowNo == null || !MochiKit.DOM.isChildNode(tr, this)) {
        evt.stop();
        return false;
    }
    var row = tr.rowNo;
    if (this.multiple) {
        if (evt.modifier().ctrl || evt.modifier().meta) {
            if (MochiKit.Base.findIdentical(this._selected, row) >= 0) {
                this._unmarkSelection(row);
                // TODO: Remove ArrayUtil
                ArrayUtil.removeElem(this._selected, row);
            } else {
                this._selected.push(row);
                this._markSelection(row);
            }
        } else if (evt.modifier().shift) {
            var start = row;
            if (this._selected.length > 0) {
                start = this._selected[0];
            }
            this._unmarkSelection();
            this._selected = [];
            if (row >= start) {
                for (var i = start; i <= row; i++) {
                    this._selected.push(i);
                }
            } else {
                for (var i = start; i >= row; i--) {
                    this._selected.push(i);
                }
            }
            this._markSelection();
        } else {
            this._unmarkSelection();
            this._selected = [row];
            this._markSelection(row);
        }
    } else {
        this._unmarkSelection();
        this._selected = [row];
        this._markSelection(row);
    }
    evt.stop();
    MochiKit.Widget.emitSignal(this, "onselect");
    return false;
}

/**
 * Marks selected rows.
 *
 * @param {Number} indexOrNull the row index, or null for the array
 */
MochiKit.Widget.Table.prototype._markSelection = function(indexOrNull) {
    if (indexOrNull == null) {
        for (var i = 0; i < this._selected.length; i++) {
            this._markSelection(this._selected[i]);
        }
    } else {
        var tbody = this.firstChild.lastChild;
        var tr = tbody.childNodes[indexOrNull];
        MochiKit.DOM.addElementClass(tr, "selected");
    }
}

/**
 * Unmarks selected rows.
 *
 * @param {Number} indexOrNull the row index, or null for the array
 */
MochiKit.Widget.Table.prototype._unmarkSelection = function(indexOrNull) {
    if (indexOrNull == null) {
        for (var i = 0; i < this._selected.length; i++) {
            this._unmarkSelection(this._selected[i]);
        }
    } else {
        var tbody = this.firstChild.lastChild;
        var tr = tbody.childNodes[indexOrNull];
        MochiKit.DOM.removeElementClass(tr, "selected"); 
    }
}

/**
 * Creates a new data table column widget.
 *
 * @constructor
 * @param {Object} attrs the widget and node attributes
 * @param {String} attrs.title the column title
 * @param {String} attrs.field the data property name
 * @param {String} [attrs.type] the data property type, one of
 *            "string", "number", "date", "time", "datetime" or
 *            "html"
 * @param {String} [attrs.sort] the initial sort direction, one of
 *            "asc", "desc" or "none" (disabled)
 * @param {Number} [attrs.maxLength] the maximum data length,
 *            overflow will be displayed as a tooltip
 * @param {Boolean} [attrs.key] the unique key value flag, only to be
 *            set for a single column per table
 * @param {String} [attrs.tooltip] the tooltip text to display on the
 *            column header
 *
 * @return {Widget} the widget DOM node
 *
 * @class The table column widget class. Used to provide a sortable
 *     data table column, using a &lt;th&gt; HTML element for the
 *     header (and rendering data to &lt;td&gt; HTML elements).
 * @extends MochiKit.Widget
 */
MochiKit.Widget.TableColumn = function(attrs) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(attrs, MochiKit.Base.extend(null, arguments, 1));
    }
    if (attrs.field == null) {
        throw new Error("The 'field' attribute cannot be null for a TableColumn");
    }
    var o = MochiKit.DOM.TH();
    MochiKit.Base.updatetree(o, this);
    o.addClass("widget", "widgetTableColumn");
    o.setAttrs(MochiKit.Base.update({ title: attrs.field, type: "string", key: false }, attrs));
    MochiKit.Signal.connect(o, "onclick", o, "_handleClick");
    return o;
}
MochiKit.Widget.TableColumn.prototype = MochiKit.Base.clone(MochiKit.Widget.prototype);

/**
 * Updates the widget or HTML DOM node attributes. Note that some
 * updates will not take effect until the parent table is cleared
 * or data is reloaded.
 *
 * @param {Object} attrs the widget and node attributes to set
 * @param {String} [attrs.title] the column title
 * @param {String} [attrs.field] the data property name
 * @param {String} [attrs.type] the data property type, one of
 *            "string", "number", "date", "time", "datetime" or
 *            "html"
 * @param {String} [attrs.sort] the sort direction, one of "asc",
 *            "desc", "none" (disabled) or null (unsorted)
 * @param {Number} [attrs.maxLength] the maximum data length,
 *            overflow will be displayed as a tooltip
 * @param {Boolean} [attrs.key] the unique key value flag, only to be
 *            set for a single column per table
 * @param {String} [attrs.tooltip] the tooltip text to display on the
 *            column header
 */
MochiKit.Widget.TableColumn.prototype.setAttrs = function(attrs) {
    attrs = MochiKit.Base.update({}, attrs);
    var locals = MochiKit.Base.mask(attrs, ["title", "field", "type", "sort", "maxLength", "key", "tooltip"]);
    if (typeof(locals.title) != "undefined") {
        MochiKit.DOM.replaceChildNodes(this, locals.title);
    }
    if (typeof(locals.field) != "undefined") {
        this.field = locals.field;
    }
    if (typeof(locals.type) != "undefined") {
        this.type = locals.type;
    }
    if (typeof(locals.sort) != "undefined") {
        this.sort = locals.sort;
        if (locals.sort == null || locals.sort == "none") {
            MochiKit.DOM.removeElementClass(this, "sortAsc"); 
            MochiKit.DOM.removeElementClass(this, "sortDesc"); 
        } else if (locals.sort == "desc") {
            MochiKit.DOM.removeElementClass(this, "sortAsc"); 
            MochiKit.DOM.addElementClass(this, "sortDesc");
        } else {
            MochiKit.DOM.removeElementClass(this, "sortDesc"); 
            MochiKit.DOM.addElementClass(this, "sortAsc");
        }
    }
    if (typeof(locals.maxLength) != "undefined") {
        this.maxLength = parseInt(locals.maxLength);
    }
    if (typeof(locals.key) != "undefined") {
        this.key = !MochiKit.Base.isFalse(locals.key);
    }
    if (typeof(locals.tooltip) != "undefined") {
        this.title = locals.tooltip;
    }
    MochiKit.DOM.updateNodeAttributes(this, attrs);
}

/**
 * Maps the column field from one object onto another. This method
 * will also convert the data depending on the column data type.
 *
 * @param src                the source object (containing the field)
 * @param dst                the destination object
 */
MochiKit.Widget.TableColumn.prototype._map = function(src, dst) {
    var value = src[this.field];

    if (value != null) {
        if (this._key) {
            dst.$id = value;
        }
        switch (this.type) {
        case "number":
            if (value instanceof Number) {
                value = value.valueOf();
            } else if (typeof(value) != "number") {
                value = parseFloat(value);
            }
            break;
        case "date":
            if (value instanceof Date) {
                value = MochiKit.DateTime.toISODate(value);
            } else {
                value = MochiKit.Format.truncate(value, 10);
            }
            break;
        case "datetime":
            if (value instanceof Date) {
                value = MochiKit.DateTime.toISOTimestamp(value);
            } else {
                value = MochiKit.Format.truncate(value, 19);
            }
            break;
        case "time":
            if (value instanceof Date) {
                value = MochiKit.DateTime.toISOTime(value);
            } else {
                if (typeof(value) != "string") {
                    value = value.toString();
                }
                if (value.length > 8) {
                    value = value.substring(value.length - 8);
                }
            }
            break;
        default:
            if (typeof(value) != "string") {
                value = value.toString();
            }
        }
    }
    dst[this.field] = value;
}

/**
 * Renders the column field value into a table cell.
 *
 * @param obj                the data object (containing the field)
 *
 * @return the table cell DOM node
 */
MochiKit.Widget.TableColumn.prototype._render = function(obj) {
    var td = MochiKit.DOM.TD();
    var value = obj[this.field];
    if (value == null) {
        value = "";
    } else if (typeof(value) != "string") {
        value = value.toString();
    }
    if (this.maxLength && this.maxLength < value.length) {
        td.title = value;
        value = MochiKit.Format.truncate(value, this.maxLength, "...");
    }
    if (this.type == "html") {
        td.innerHTML = value;
    } else {
        td.appendChild(MochiKit.DOM.createTextNode(value));
    }
    return td;
}

/**
 * Handles click events on the column header.
 */
MochiKit.Widget.TableColumn.prototype._handleClick = function() {
    if (this.parentNode != null) {
        var dir = (this.sort == "asc") ? "desc" : "asc";
        var tr = this.parentNode;
        var thead = tr.parentNode;
        var table = thead.parentNode;
        table.parentNode.sortData(this.field, dir);
    }
}

/**
 * Creates a new text area (or text box) widget.
 *
 * @constructor
 * @param {Object} attrs the widget and node attributes
 * @param {String} [attrs.helpText] the help text shown on empty
 *            input, defaults to ""
 * @param {String} [attrs.value] the field value, defaults to ""
 * @param {Object} [...] the initial text content
 *
 * @return {Widget} the widget DOM node
 *
 * @class The text area widget class. Used to provide a text input
 *     field spanning multiple rows, using the &lt;textarea&gt; HTML
 *     element.
 * @property {Boolean} disabled The widget disabled flag.
 * @property {Boolean} focused The read-only widget focused flag.
 * @property {String} defaultValue The value to use on form reset.
 * @extends MochiKit.Widget
 */
MochiKit.Widget.TextArea = function(attrs/*, ...*/) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(attrs, MochiKit.Base.extend(null, arguments, 1));
    }
    var o = MochiKit.DOM.TEXTAREA();
    MochiKit.Base.updatetree(o, this);
    o.addClass("widget", "widgetTextArea");
    o.focused = false;
    o.setAttrs(MochiKit.Base.update({ helpText: "" }, attrs));
    o.addAll(MochiKit.Base.extend(null, arguments, 1));
    MochiKit.Signal.connect(o, "onfocus", o, "_handleFocus");
    MochiKit.Signal.connect(o, "onblur", o, "_handleFocus");
    return o;
}
MochiKit.Widget.TextArea.prototype = MochiKit.Base.clone(MochiKit.Widget.prototype);

/**
 * Updates the widget or HTML DOM node attributes.
 *
 * @param {Object} attrs the widget and node attributes to set
 * @param {String} [attrs.helpText] the help text shown on empty input
 * @param {String} [attrs.value] the field value
 */
MochiKit.Widget.TextArea.prototype.setAttrs = function(attrs) {
    attrs = MochiKit.Base.update({}, attrs);
    var locals = MochiKit.Base.mask(attrs, ["helpText", "value"]);
    if (typeof(locals.helpText) != "undefined") {
        this.helpText = locals.helpText;
    }
    if (typeof(locals.value) != "undefined") {
        this.value = this.storedValue = locals.value;
    }
    if (!this.focused && MochiKit.Format.strip(this.value) == "") {
        this.value = this.helpText;
        this.addClass("widgetTextAreaHelp");
    }
    MochiKit.DOM.updateNodeAttributes(this, attrs);
}

/**
 * Resets the text area form value to the initial value.
 */
MochiKit.Widget.TextArea.prototype.reset = function() {
    this.setAttrs({ value: this.defaultValue });
}

/**
 * Returns the text area value. This function is slightly different
 * from using the "value" property directly, since it will always
 * return the actual value string instead of the temporary help text
 * displayed when the text area is empty and unfocused.
 *
 * @return {String} the field value
 */
MochiKit.Widget.TextArea.prototype.getValue = function() {
    return (this.focused) ? this.value : this.storedValue;
}

/**
 * Handles focus and blur events for this widget.
 *
 * @param evt the MochiKit.Signal.Event object
 */
MochiKit.Widget.TextArea.prototype._handleFocus = function(evt) {
    if (evt.type() == "focus") {
        this.focused = true;
        this.value = this.storedValue;
        this.removeClass("widgetTextAreaHelp");
    } else if (evt.type() == "blur") {
        this.focused = false;
        this.storedValue = this.value;
        if (MochiKit.Format.strip(this.value) == "") {
            this.value = this.helpText;
            this.addClass("widgetTextAreaHelp");
        }
    }
}

/**
 * Creates a new text field widget.
 *
 * @constructor
 * @param {Object} attrs the widget and node attributes
 * @param {String} [attrs.helpText] the help text shown on empty
 *            input, defaults to ""
 * @param {String} [attrs.value] the field value, defaults to ""
 * @param {Object} [...] the initial text content
 *
 * @return {Widget} the widget DOM node
 *
 * @class The text field widget class. Used to provide a text input
 *     field for a single line, using the &lt;input&gt; HTML element.
 *     The text field may also be connected to a popup (for auto-
 *     suggest or similar) and in that case the "onpopupselect" event
 *     will be triggered when an element is selected from the popup.
 * @property {Boolean} disabled The widget disabled flag.
 * @property {Boolean} focused The read-only widget focused flag.
 * @property {String} defaultValue The value to use on form reset.
 * @extends MochiKit.Widget
 */
MochiKit.Widget.TextField = function(attrs/*, ...*/) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(attrs, MochiKit.Base.extend(null, arguments, 1));
    }
    var text = "";
    if (attrs != null && attrs.value != null) {
        text = attrs.value;
    } 
    for (var i = 1; i < arguments.length; i++) {
        text += arguments[i].toString();
    }
    var o = MochiKit.DOM.INPUT({ value: text });
    MochiKit.Base.updatetree(o, this);
    o.addClass("widget", "widgetTextField");
    o.focused = false;
    o._popupCreated = false;
    o.setAttrs(MochiKit.Base.update({ helpText: "", value: text }, attrs));
    MochiKit.Signal.connect(o, "onfocus", o, "_handleFocus");
    MochiKit.Signal.connect(o, "onblur", o, "_handleFocus");
    return o;
}
MochiKit.Widget.TextField.prototype = MochiKit.Base.clone(MochiKit.Widget.prototype);

/**
 * Updates the widget or HTML DOM node attributes.
 *
 * @param {Object} attrs the widget and node attributes to set
 * @param {String} [attrs.helpText] the help text shown on empty input
 * @param {String} [attrs.value] the field value
 */
MochiKit.Widget.TextField.prototype.setAttrs = function(attrs) {
    attrs = MochiKit.Base.update({}, attrs);
    var locals = MochiKit.Base.mask(attrs, ["helpText", "value"]);
    if (typeof(locals.helpText) != "undefined") {
        this.helpText = locals.helpText;
    }
    if (typeof(locals.value) != "undefined") {
        this.value = this.storedValue = locals.value;
    }
    if (!this.focused && MochiKit.Format.strip(this.value) == "") {
        this.value = this.helpText;
        this.addClass("widgetTextFieldHelp");
    }
    MochiKit.DOM.updateNodeAttributes(this, attrs);
}

/**
 * Resets the text area form value to the initial value.
 */
MochiKit.Widget.TextField.prototype.reset = function() {
    this.setAttrs({ value: this.defaultValue });
}

/**
 * Returns the text field value. This function is slightly different
 * from using the "value" property directly, since it will always
 * return the actual value string instead of the temporary help text
 * displayed when the text field is empty and unfocused.
 *
 * @return {String} the field value
 */
MochiKit.Widget.TextField.prototype.getValue = function() {
    return (this.focused) ? this.value : this.storedValue;
}

/**
 * Returns (or creates) a popup for this text field. The popup will
 * not be shown by this method, only returned as-is. If the create
 * flag is specified, a new popup will be created if none has been
 * created previuosly.
 *
 * @param {Boolean} create the create popup flag
 *
 * @return {Widget} the popup widget, or
 *         null if none existed or was created
 */
MochiKit.Widget.TextField.prototype.popup = function(create) {
    if (!this._popupCreated && create) {
        this.autocomplete = "off";
        this._popupCreated = true;
        var style = { "max-height": "300px", "width": "300px" };
        var popup = new MochiKit.Widget.Popup({ style: style });
        MochiKit.DOM.insertSiblingNodesAfter(this, popup);
        MochiKit.DOM.makePositioned(this.parentNode);
        var pos = { x: this.offsetLeft + 1,
                    y: this.offsetTop + this.offsetHeight + 1 };
        MochiKit.Style.setElementPosition(popup, pos);
        MochiKit.Signal.connect(this, "onkeydown", this, "_handleKeyDown");
        MochiKit.Signal.connect(popup, "onclick", this, "_handleClick");
    }
    return (this._popupCreated) ? this.nextSibling : null;
}

/**
 * Shows a popup for the text field containing the specified items.
 * The items specified may be either a list of HTML DOM nodes or
 * text strings.
 *
 * @param {Object} [attrs] the popup attributes to set
 * @param {Number} [attrs.delay] the popup auto-hide delay, defaults
 *            to 30 seconds
 * @param {Array} [items] the items to show, or null to keep the
 *            previuos popup content
 */
MochiKit.Widget.TextField.prototype.showPopup = function(attrs, items) {
    var popup = this.popup(true);
    if (items) {
        popup.hide();
        MochiKit.DOM.replaceChildNodes(popup);
        for (var i = 0; i < items.length; i++) {
            if (typeof(items[i]) == "string") {
                var node = MochiKit.DOM.DIV({ "class": "widgetPopupItem" },
                                            "\u00BB " + items[i]);
                popup.appendChild(node);
            } else {
                MochiKit.DOM.appendChildNodes(popup, items[i]);
            }
        }
    }
    if (popup.childNodes.length > 0) {
        popup.setAttrs(MochiKit.Base.update({ delay: 30000 }, attrs));
        popup.show();
    }
}

/**
 * Handles focus and blur events for this widget.
 *
 * @param evt the MochiKit.Signal.Event object
 */
MochiKit.Widget.TextField.prototype._handleFocus = function(evt) {
    if (evt.type() == "focus") {
        this.focused = true;
        this.value = this.storedValue;
        this.removeClass("widgetTextFieldHelp");
    } else if (evt.type() == "blur") {
        this.focused = false;
        this.storedValue = this.value;
        if (MochiKit.Format.strip(this.value) == "") {
            this.value = this.helpText;
            this.addClass("widgetTextFieldHelp");
        }
        var popup = this.popup();
        if (popup != null && !popup.isHidden()) {
            popup.setAttrs({ delay: 250 });
        }
    }
}

/**
 * Handles the key down event for the text field.
 *
 * @param {Event} evt the MochiKit.Signal.Event object
 */
MochiKit.Widget.TextField.prototype._handleKeyDown = function(evt) {
    var popup = this.popup(false);
    if (popup != null) {
        popup.resetDelay();
        if (popup.isHidden()) {
            switch (evt.key().string) {
            case "KEY_ESCAPE":
                evt.stop();
                break;
            case "KEY_ARROW_UP":
            case "KEY_ARROW_DOWN":
                this.showPopup();
                popup.selectChild(0);
                evt.stop();
                break;
            }
        } else {
            switch (evt.key().string) {
            case "KEY_TAB":
            case "KEY_ENTER":
                popup.hide();
                evt.stop();
                if (popup.selectedChild() != null) {
                    MochiKit.Widget.emitSignal(this, "onpopupselect");
                }
                break;
            case "KEY_ESCAPE":
                popup.hide();
                evt.stop();
                break;
            case "KEY_ARROW_UP":
            case "KEY_ARROW_DOWN":
                popup.selectMove(evt.key().string == "KEY_ARROW_UP" ? -1 : 1);
                evt.stop();
                break;
            }
        }
    }
}

/**
 * Handles the mouse click event on the popup.
 *
 * @param evt the MochiKit.Signal.Event object
 */
MochiKit.Widget.TextField.prototype._handleClick = function(evt) {
    this.blur();
    this.focus();
    MochiKit.Widget.emitSignal(this, "onpopupselect");
}

/**
 * Creates a new tree widget.
 *
 * @constructor
 * @param {Object} attrs the widget and node attributes
 * @param {Widget} [...] the child tree node widgets
 *
 * @return {Widget} the widget DOM node
 *
 * @class The tree widget class. Used to provide a dynamic tree with
 *     expandable tree nodes, using a number of &lt;div&gt; HTML
 *     elements. The the "onexpand" and "onselect" event are emitted
 *     whenever a node is expanded, collapsed or selected.
 * @extends MochiKit.Widget
 */
MochiKit.Widget.Tree = function(attrs/*, ...*/) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(attrs, MochiKit.Base.extend(null, arguments, 1));
    }
    var o = MochiKit.DOM.DIV(attrs);
    MochiKit.Base.updatetree(o, this);
    o.addClass("widget", "widgetTree");
    o.resizeContent = MochiKit.Base.noop;
    o.selectedPath = null;
    o.addAll(MochiKit.Base.extend(null, arguments, 1));
    return o;
}
MochiKit.Widget.Tree.prototype = MochiKit.Base.clone(MochiKit.Widget.prototype);

/**
 * Adds a single child tree node widget to this widget.
 *
 * @param {Widget} child the tree node widget to add
 */
MochiKit.Widget.Tree.prototype.addChildNode = function(child) {
    if (!MochiKit.Widget.isWidget(child, "TreeNode")) {
        throw new Error("Tree widget can only have TreeNode children");
    }
    this.appendChild(child);
}

/**
 * Finds a root tree node with the specified name.
 *
 * @param {String} name the root tree node name
 *
 * @return {Widget} the root tree node found, or
 *         null if not found
 */
MochiKit.Widget.Tree.prototype.findRoot = function(name) {
    var children = this.getChildNodes();
    for (var i = 0; i < children.length; i++) {
        if (children[i].name == name) {
            return children[i];
        }
    }
    return null;
}

/**
 * Searches for a tree node from the specified path.
 *
 * @param {Array} path the tree node path (array of names)
 *
 * @return {Widget} the descendant tree node found, or
 *         null if not found
 */
MochiKit.Widget.Tree.prototype.findByPath = function(path) {
    if (path == null || path.length < 1) {
        return null;
    }
    var root = this.findRoot(path[0]);
    if (root != null) {
        return root.findByPath(path.slice(1));
    } else {
        return null;
    }
}

/**
 * Returns the currently selected tree node.
 *
 * @return {Widget} the currently selected tree node, or
 *         null if no node is selected
 */
MochiKit.Widget.Tree.prototype.selectedChild = function() {
    if (this.selectedPath == null) {
        return null;
    } else {
        return this.findByPath(this.selectedPath);
    }
}

/**
 * Sets the currently selected node in the tree. This method is only
 * called from the tree node select() and unselect() methods.
 *
 * @param {Widget} node the new selected tree node, or null for none
 */
MochiKit.Widget.Tree.prototype._handleSelect = function(node) {
    var prev = this.selectedChild();
    if (node == null) {
        this.selectedPath = null;
        MochiKit.Widget.emitSignal(this, "onselect", null);
    } else {
        if (prev != null && prev !== node) {
            prev.unselect();
        }
        this.selectedPath = node.path();
        MochiKit.Widget.emitSignal(this, "onselect", node);
    }
}

/**
 * Emits a signal when a node has been expanded or collapsed.
 *
 * @param {Widget} node the affected tree node
 */
MochiKit.Widget.Tree.prototype._emitExpand = function(node) {
    MochiKit.Widget.emitSignal(this, "onexpand", node);
}

/**
 * Recursively expands all nodes. If a depth is specified,
 * expansions will not continue below that depth.
 *
 * @param {Number} [depth] the optional maximum depth
 */
MochiKit.Widget.Tree.prototype.expandAll = function(depth) {
    if (typeof(depth) !== "number") {
        depth = 10;
    }
    var children = this.getChildNodes();
    for (var i = 0; depth > 0 && i < children.length; i++) {
        children[i].expandAll(depth - 1);
    }
}

/**
 * Recursively collapses all nodes. If a depth is specified, only
 * nodes below that depth will be collapsed.
 *
 * @param {Number} [depth] the optional minimum depth
 */
MochiKit.Widget.Tree.prototype.collapseAll = function(depth) {
    if (typeof(depth) !== "number") {
        depth = 0;
    }
    var children = this.getChildNodes();
    for (var i = 0; i < children.length; i++) {
        children[i].collapseAll(depth - 1);
    }
}

/**
 * Adds a path to the tree as a recursive list of child nodes. If
 * nodes in the specified path already exists, they will be used
 * instead of creating new nodes.
 *
 * @param {Array} path the tree node path (array of names)
 *
 * @return {Widget} the last node in the path
 */
MochiKit.Widget.Tree.prototype.addPath = function(path) {
    if (path == null || path.length < 1) {
        return null;
    }
    var node = this.findRoot(path[0]);
    if (node == null) {
        node = new MochiKit.Widget.TreeNode({ name: path[0] });
        this.addChildNode(node);
    }
    for (var i = 1; i < path.length; i++) {
        var child = node.findChild(path[i]);
        if (child == null) {
            child = new MochiKit.Widget.TreeNode({ name: path[i] });
            node.addChildNode(child);
        }
        node = child;
    }
    return node;
}

/**
 * Creates a new tree node widget.
 *
 * @constructor
 * @param {Object} attrs the widget and node attributes
 * @param {String} attrs.name the tree node name
 * @param {Boolean} [attrs.folder] the folder flag, defaults to false
 * @param {String} [attrs.icon] the icon reference to use, defaults
 *            to "FOLDER" for folders and "DOCUMENT" otherwise
 * @param {Widget} [...] the child tree node widgets
 *
 * @return {Widget} the widget DOM node
 *
 * @class The tree node widget class. Used to provide a tree node in
 *     a tree, using a number of &lt;div&gt; HTML elements. Note that
 *     events should normally not be listened for on individual tree
 *     nodes, but rather on the tree as a whole.
 * @extends MochiKit.Widget
 */
MochiKit.Widget.TreeNode = function(attrs/*, ...*/) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(attrs, MochiKit.Base.extend(null, arguments, 1));
    }
    var icon = MochiKit.Widget.Icon({ ref: "BLANK" });
    var label = MochiKit.DOM.SPAN({ "class": "widgetTreeNodeText" });
    var div = MochiKit.DOM.DIV({ "class": "widgetTreeNodeLabel" }, icon, label);
    var o = MochiKit.DOM.DIV({}, div);
    MochiKit.Base.updatetree(o, this);
    o.addClass("widget", "widgetTreeNode");
    attrs = MochiKit.Base.update({ name: "Tree Node", folder: false }, attrs);
    if (typeof(attrs.icon) == "undefined") {
        attrs.icon = attrs.folder ? "FOLDER" : "DOCUMENT";
    }
    o.setAttrs(attrs);
    o.addAll(MochiKit.Base.extend(null, arguments, 1));
    MochiKit.Signal.connect(icon, "onclick", o, "toggle");
    MochiKit.Signal.connect(div, "onclick", o, "select");
    return o;
}
MochiKit.Widget.TreeNode.prototype = MochiKit.Base.clone(MochiKit.Widget.prototype);

/**
 * Returns and/or creates the child container DOM node. If a child
 * container is created, it will be hidden by default.
 *
 * @param {Boolean} create the optional create flag, defaults to false
 *
 * @return {Node} the child container DOM node found or created
 */
MochiKit.Widget.TreeNode.prototype._container = function(create) {
    var container = this.lastChild;
    if (MochiKit.DOM.hasElementClass(container, "widgetTreeNodeContainer")) {
        return container;
    } else if (create) {
        container = MochiKit.DOM.DIV({ "class": "widgetTreeNodeContainer widgetHidden" });
        this.appendChild(container);
        var imgNode = this.firstChild.firstChild;
        imgNode.setAttrs({ ref: "PLUS" });
        this.setAttrs({ icon: "FOLDER" });
        return container;
    } else {
        return null;
    }
}

/**
 * Updates the widget or HTML DOM node attributes.
 *
 * @param {Object} attrs the widget and node attributes to set
 * @param {String} [attrs.name] the tree node name
 * @param {Boolean} [attrs.folder] the folder flag, cannot be
 *            reverted to false once set (implicitly or explicitly)
 * @param {Icon/Object/String} [attrs.icon] icon the icon to set, or
 *            null to remove
 */
MochiKit.Widget.TreeNode.prototype.setAttrs = function(attrs) {
    attrs = MochiKit.Base.update({}, attrs);
    var locals = MochiKit.Base.mask(attrs, ["name", "folder", "icon"]);
    if (typeof(locals.name) != "undefined") {
        this.name = locals.name;
        var node = this.firstChild.firstChild;
        while (!MochiKit.DOM.hasElementClass(node, "widgetTreeNodeText")) {
            node = node.nextSibling;
        }
        MochiKit.DOM.replaceChildNodes(node, locals.name);
    }
    if (!MochiKit.Base.isFalse(locals.folder)) {
        this._container(true);
    }
    if (typeof(locals.icon) != "undefined") {
        var imgNode = this.firstChild.firstChild;
        var iconNode = imgNode.nextSibling;
        if (!MochiKit.Widget.isWidget(iconNode, "Icon")) {
            iconNode = null;
        }
        if (iconNode == null && locals.icon != null) {
            if (typeof(locals.icon) === "string") {
                locals.icon = new MochiKit.Widget.Icon({ ref: locals.icon });
            } else if (!MochiKit.Widget.isWidget(locals.icon, "Icon")) {
                locals.icon = new MochiKit.Widget.Icon(locals.icon);
            }
            MochiKit.DOM.insertSiblingNodesAfter(imgNode, locals.icon);
        } else if (iconNode != null && locals.icon != null) {
            if (MochiKit.Widget.isWidget(locals.icon, "Icon")) {
                MochiKit.DOM.swapDOM(iconNode, locals.icon);
            } else if (typeof(locals.icon) === "string") {
                iconNode.setAttrs({ ref: locals.icon });
            } else {
                iconNode.setAttrs(locals.icon);
            }
        } else if (iconNode != null && locals.icon == null) {
            MochiKit.Widget.destroyWidget(iconNode);
        }
    }
    MochiKit.DOM.updateNodeAttributes(this, attrs);
}

/**
 * Returns an array with all child tree node widgets. Note that the
 * array is a real JavaScript array, not a dynamic NodeList.
 *
 * @return {Array} the array of child tree node widgets
 */
MochiKit.Widget.TreeNode.prototype.getChildNodes = function() {
    var container = this._container();
    if (container == null) {
        return [];
    } else {
        return MochiKit.Base.extend([], container.childNodes);
    }
}

/**
 * Adds a single child tree node widget to this widget.
 *
 * @param {Widget} child the tree node widget to add
 */
MochiKit.Widget.TreeNode.prototype.addChildNode = function(child) {
    if (!MochiKit.Widget.isWidget(child, "TreeNode")) {
        throw new Error("TreeNode widget can only have TreeNode children");
    }
    this._container(true).appendChild(child);
}

/**
 * Removes a single child tree node widget from this widget.
 *
 * @param {Widget} child the tree node widget to remove
 */
MochiKit.Widget.TreeNode.prototype.removeChildNode = function(child) {
    var container = this._container();
    if (container != null) {
        container.removeChild(child);
    }
}

/**
 * Checks if this node is a folder.
 *
 * @return {Boolean} true if this node is a folder, or
 *         false otherwise
 */
MochiKit.Widget.TreeNode.prototype.isFolder = function() {
    return this._container() != null;
}

/**
 * Checks if this folder node is expanded.
 *
 * @return {Boolean} true if this node is expanded, or
 *         false otherwise
 */
MochiKit.Widget.TreeNode.prototype.isExpanded = function() {
    var container = this._container();
    return container != null &&
           !MochiKit.DOM.hasElementClass(container, "widgetHidden");
}

/**
 * Checks if this node is selected.
 *
 * @return {Boolean} true if the node is selected, or
 *         false otherwise
 */
MochiKit.Widget.TreeNode.prototype.isSelected = function() {
    return MochiKit.DOM.hasElementClass(this.firstChild, "selected");
}

/**
 * Returns the ancestor tree widget.
 *
 * @return {Widget} the ancestor tree widget, or
 *         null if none was found
 */
MochiKit.Widget.TreeNode.prototype.tree = function() {
    var parent = this.parent();
    if (parent != null) {
        return parent.tree();
    }
    if (MochiKit.Widget.isWidget(this.parentNode, "Tree")) {
        return this.parentNode;
    } else {
        return null;
    }
}

/**
 * Returns the parent tree node widget.
 *
 * @return {Widget} the parent tree node widget, or
 *         null if this is a root node
 */
MochiKit.Widget.TreeNode.prototype.parent = function() {
    var node = this.parentNode;
    if (MochiKit.DOM.hasElementClass(node, "widgetTreeNodeContainer")) {
        return node.parentNode;
    } else {
        return null;
    }
}

/**
 * Returns the path to this tree node.
 *
 * @return {Array} the tree node path, i.e an array of node names
 */
MochiKit.Widget.TreeNode.prototype.path = function() {
    var parent = this.parent();
    if (parent == null) {
        return [this.name];
    } else {
        var path = parent.path();
        path.push(this.name);
        return path;
    }
}

/**
 * Finds a child tree node with the specified name.
 *
 * @param {String} name the child tree node name
 *
 * @return {Widget} the child tree node found, or
 *         null if not found
 */
MochiKit.Widget.TreeNode.prototype.findChild = function(name) {
    var children = this.getChildNodes();
    for (var i = 0; i < children.length; i++) {
        if (children[i].name == name) {
            return children[i];
        }
    }
    return null;
}

/**
 * Searches for a descendant tree node from the specified path.
 *
 * @param {Array} path the tree node path (array of node names)
 *
 * @return {Widget} the descendant tree node found, or
 *         null if not found
 */
MochiKit.Widget.TreeNode.prototype.findByPath = function(path) {
    var node = this;

    for (var i = 0; node != null && path != null && i < path.length; i++) {
        node = node.findChild(path[i]);
    }
    return node;
}

/**
 * Selects this tree node.
 */
MochiKit.Widget.TreeNode.prototype.select = function() {
    MochiKit.DOM.addElementClass(this.firstChild, "selected");
    var tree = this.tree();
    if (tree != null) {
        tree._handleSelect(this);
    }
    this.expand();
}

/**
 * Unselects this tree node.
 */
MochiKit.Widget.TreeNode.prototype.unselect = function() {
    if (this.isSelected()) {
        MochiKit.DOM.removeElementClass(this.firstChild, "selected");
        var tree = this.tree();
        if (tree != null) {
            tree._handleSelect(null);
        }
    }
}

/**
 * Expands this node to display any child nodes. If the parent node
 * is not expanded, it will be expanded as well.
 */
MochiKit.Widget.TreeNode.prototype.expand = function() {
    var parent = this.parent();
    if (parent != null && !parent.isExpanded()) {
        parent.expand();
    }
    var container = this._container();
    if (container != null && !this.isExpanded()) {
        var imgNode = this.firstChild.firstChild;
        imgNode.setAttrs({ ref: "MINUS" });
        MochiKit.DOM.removeElementClass(container, "widgetHidden");
        var tree = this.tree();
        if (tree != null) {
            tree._emitExpand(this);
        }
    }
}

/**
 * Recursively expands this node and all its children. If a depth is
 * specified, expansions will not continue below that depth.
 *
 * @param {Number} [depth] the optional maximum depth
 */
MochiKit.Widget.TreeNode.prototype.expandAll = function(depth) {
    if (typeof(depth) !== "number") {
        depth = 10;
    }
    this.expand();
    var children = this.getChildNodes();
    for (var i = 0; depth > 0 && i < children.length; i++) {
        children[i].expandAll(depth - 1);
    }
}

/**
 * Collapses this node to hide any child nodes.
 */
MochiKit.Widget.TreeNode.prototype.collapse = function() {
    var container = this._container();
    if (container != null && this.isExpanded()) {
        var imgNode = this.firstChild.firstChild;
        imgNode.setAttrs({ ref: "PLUS" });
        MochiKit.DOM.addElementClass(container, "widgetHidden");
        var tree = this.tree();
        if (tree != null) {
            tree._emitExpand(this);
        }
    }
}

/**
 * Recursively collapses this node and all its children. If a depth
 * is specified, only children below that depth will be collapsed.
 *
 * @param {Number} [depth] the optional minimum depth
 */
MochiKit.Widget.TreeNode.prototype.collapseAll = function(depth) {
    if (typeof(depth) !== "number") {
        depth = 0;
    }
    if (depth <= 0) {
        this.collapse();
    }
    var children = this.getChildNodes();
    for (var i = 0; i < children.length; i++) {
        children[i].collapseAll(depth - 1);
    }
}

/**
 * Toggles expand and collapse for this node.
 */
MochiKit.Widget.TreeNode.prototype.toggle = function(evt) {
    if (evt) {
        evt.stop();
    }
    if (this.isExpanded()) {
        this.collapse();
    } else {
        this.expand();
    }
}

/**
 * Creates a new wizard widget.
 *
 * @constructor
 * @param {Object} attrs the widget and node attributes
 * @param {Widget} [...] the child widgets or DOM nodes (should be
 *            Pane widgets)
 *
 * @return {Widget} the widget DOM node
 *
 * @class The wizard widget class. Used to provide a sequence of
 *     pages, where the user can step forward and backward with
 *     buttons. Internally it uses a &lt;div&gt; HTML element
 *     containing Pane widgets that are hidden and shown according
 *     to the page transitions. In addition to standard HTML events,
 *     the "onchange" event is triggered on page transitions, the
 *     "oncancel" event is triggered if a user cancels an operation,
 *     and the "onclose" event is triggered when the wizard
 *     completes.
 * @extends MochiKit.Widget
 */
MochiKit.Widget.Wizard = function(attrs/*, ... */) {
    var cls = arguments.callee;
    if (!(this instanceof cls)) {
        return new cls(attrs, MochiKit.Base.extend(null, arguments, 1));
    }
    var o = MochiKit.DOM.DIV(attrs);
    MochiKit.Base.updatetree(o, this);
    o.addClass("widget", "widgetWizard");
    o._selectedIndex = -1;
    o.appendChild(MochiKit.DOM.H3({ "class": "widgetWizardTitle" }));
    var bCancel = MochiKit.Widget.Button({ style: { "margin-right": "10px" } },
                                         MochiKit.Widget.Icon({ ref: "CANCEL" }),
                                         " Cancel");
    var bPrev = MochiKit.Widget.Button({ style: { "margin-right": "10px" } },
                                       MochiKit.Widget.Icon({ ref: "PREVIOUS" }),
                                       " Previous");
    var bNext = MochiKit.Widget.Button({},
                                       "Next ",
                                       MochiKit.Widget.Icon({ ref: "NEXT" }));
    var bDone = MochiKit.Widget.Button({ highlight: true },
                                       MochiKit.Widget.Icon({ ref: "OK" }),
                                       " Finish");
    bCancel.hide();
    o.appendChild(MochiKit.DOM.DIV({ "class": "widgetWizardButtons" },
                                   bCancel, bPrev, bNext, bDone));
    MochiKit.Signal.connect(bCancel, "onclick", o, "cancel");
    MochiKit.Signal.connect(bPrev, "onclick", o, "previous");
    MochiKit.Signal.connect(bNext, "onclick", o, "next");
    MochiKit.Signal.connect(bDone, "onclick", o, "done");
    o._updateStatus();
    o.addAll(MochiKit.Base.extend(null, arguments, 1));
    return o;
}
MochiKit.Widget.Wizard.prototype = MochiKit.Base.clone(MochiKit.Widget.prototype);

/**
 * Returns an array with all child pane widgets. Note that the array
 * is a real JavaScript array, not a dynamic NodeList.
 *
 * @return {Array} the array of child wizard page widgets
 */
MochiKit.Widget.Wizard.prototype.getChildNodes = function() {
    return MochiKit.Base.extend([], this.childNodes, 2);
}

/**
 * Adds a single child page widget to this widget. The child widget
 * should be a MochiKit.Widget.Pane widget, or it will be added to a
 * new one.
 *
 * @param {Widget} child the page widget to add
 */
MochiKit.Widget.Wizard.prototype.addChildNode = function(child) {
    if (!MochiKit.Widget.isWidget(child, "Pane")) {
        child = new MochiKit.Widget.Pane(null, child);
    }
    MochiKit.Style.registerSizeConstraints(child, "100%", "100%-65");
    child.hide();
    this.appendChild(child);
    if (this.getChildNodes().length == 1) {
        this.activatePage(0);
    } else {
        this._updateStatus();
    }
}

// TODO: handle removes by possibly selecting new page...

/**
 * Updates the wizard status indicators, such as the title and the
 * current buttons.
 */
MochiKit.Widget.Wizard.prototype._updateStatus = function() {
    var h3 = this.childNodes[0];
    var bCancel = this.childNodes[1].childNodes[0];
    var bPrev = this.childNodes[1].childNodes[1];
    var bNext = this.childNodes[1].childNodes[2];
    var bDone = this.childNodes[1].childNodes[3];
    var page = this.activePage();
    var status = MochiKit.Widget.Pane.FORWARD;
    var title = null;
    var info = "(No pages available)";
    var icon = null;

    if (page != null) {
        status = page.pageStatus || MochiKit.Widget.Pane.ANY;
        title = page.pageTitle;
        info = " (Step " + (this._selectedIndex + 1) + " of " +
               this.getChildNodes().length + ")";
    }
    if (status === MochiKit.Widget.Pane.WORKING) {
        bCancel.show();
        bPrev.hide();
        icon = { ref: "LOADING", "class": "widgetWizardWait" };
        icon = MochiKit.Widget.Icon(icon);
    } else {
        bCancel.hide();
        bPrev.show();
    }
    if (this._selectedIndex >= this.getChildNodes().length - 1) {
        bNext.hide();
        bDone.show();
    } else {
        bNext.show();
        bDone.hide();
    }
    bPrev.disabled = (this._selectedIndex <= 0) || !status.previous;
    bNext.disabled = !status.next;
    bDone.disabled = !status.next;
    info = MochiKit.DOM.SPAN({ "class": "widgetWizardInfo" }, info);
    MochiKit.DOM.replaceChildNodes(h3, icon, title, info);
}

/**
 * Returns the active page.
 *
 * @return {Widget} the active page, or
 *         null if no pages have been added
 */
MochiKit.Widget.Wizard.prototype.activePage = function() {
    if (this._selectedIndex >= 0) {
        return this.childNodes[this._selectedIndex + 2];
    } else {
        return null;
    }
}

/**
 * Returns the active page index.
 *
 * @return the active page index, or
 *         -1 if no page is active
 */
MochiKit.Widget.Wizard.prototype.activePageIndex = function() {
    return this._selectedIndex;
}

/**
 * Activates a new page.
 *
 * @param {Number/Widget} indexOrPage the page index or page DOM node
 */
MochiKit.Widget.Wizard.prototype.activatePage = function(indexOrPage) {
    if (typeof(indexOrPage) == "number") {
        var index = indexOrPage;
        var page = this.childNodes[index + 2];
    } else {
        var page = indexOrPage;
        var index = MochiKit.Base.findIdentical(this.childNodes, page, 2) - 2;
    }
    if (index < 0 || index >= this.getChildNodes().length) {
        throw new RangeError("Page index out of bounds: " + index);
    }
    var oldPage = this.activePage();
    if (oldPage != null) {
        if (!oldPage._handleExit({ validateForm: this._selectedIndex < index })) {
            // Old page blocked page transition
            return;
        }
    }
    this._selectedIndex = index;
    this._updateStatus();
    page._handleEnter({ validateReset: true });
    MochiKit.Widget.emitSignal(this, "onchange");
    // TODO: MochiKit.Widget.emitSignal(this, "onchange", index, page);
}

/**
 * Cancels the active page operation. This method will also reset
 * the page status of the currently active page to "ANY".
 */
MochiKit.Widget.Wizard.prototype.cancel = function() {
    var page = this.activePage();
    page.setAttrs({ pageStatus: MochiKit.Widget.Pane.ANY });
    MochiKit.Widget.emitSignal(this, "oncancel");
}

/**
 * Moves the wizard backward to the previous page.
 */
MochiKit.Widget.Wizard.prototype.previous = function() {
    if (this._selectedIndex > 0) {
        this.activatePage(this._selectedIndex - 1);
    }
}

/**
 * Moves the wizard forward to the next page. The page will not be
 * changed if the active page fails a validation check.
 */
MochiKit.Widget.Wizard.prototype.next = function() {
    if (this._selectedIndex < this.getChildNodes().length - 1) {
        this.activatePage(this._selectedIndex + 1);
    }
}

/**
 * Sends the wizard onclose signal when the user presses the finish
 * button.
 */
MochiKit.Widget.Wizard.prototype.done = function() {
    var page = this.activePage();
    if (page != null) {
        if (!page._handleExit({ validateForm: true })) {
            // Page blocked wizard completion
            return;
        }
    }
    MochiKit.Widget.emitSignal(this, "onclose");
}

/**
 * Resizes the current wizard page. This method need not be called
 * directly, but is automatically called whenever a parent node is
 * resized. It optimizes the resize chain by only resizing those DOM
 * child nodes that are visible.
 */
MochiKit.Widget.Wizard.prototype.resizeContent = function() {
    var page = this.activePage();
    if (page != null) {
        MochiKit.Style.resizeElements(page);
    }
}


/**
 * The registered widget class names and constructor functions. All
 * the default widgets in the MochiKit.Widget namespace are defined
 * here, using their constructor function names. It is possible to
 * override or add new classes by simply modifying this global data
 * object.
 */
MochiKit.Widget.Classes = {
    Button: MochiKit.Widget.Button,
    Dialog: MochiKit.Widget.Dialog,
    Field: MochiKit.Widget.Field,
    Form: MochiKit.Widget.Form,
    FormValidator: MochiKit.Widget.FormValidator,
    Icon: MochiKit.Widget.Icon,
    Overlay: MochiKit.Widget.Overlay,
    Popup: MochiKit.Widget.Popup,
    Pane: MochiKit.Widget.Pane,
    ProgressBar: MochiKit.Widget.ProgressBar,
    TabContainer: MochiKit.Widget.TabContainer,
    Table: MochiKit.Widget.Table,
    TableColumn: MochiKit.Widget.TableColumn,
    TextArea: MochiKit.Widget.TextArea,
    TextField: MochiKit.Widget.TextField,
    Tree: MochiKit.Widget.Tree,
    TreeNode: MochiKit.Widget.TreeNode,
    Wizard: MochiKit.Widget.Wizard
};
