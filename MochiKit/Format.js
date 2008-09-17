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
 * @name MochiKit.Format
 * @namespace Provides string formatting functionality.
 */
// Check for loaded MochiKit.Format
if (typeof(MochiKit.Format) == "undefined") {
    throw new ReferenceError("MochiKit.Format must be loaded before loading this script");
}

/**
 * Returns a right-truncated copy of a string or an array. If the
 * string or array is shorter than the specified maximum length, the
 * object will be returned unmodified. If an optional tail string or
 * array is specified, additional elements will be removed in order
 * to also make space for the tail (that will be appended).
 *
 * @param {String/Array} obj the string or array to truncate
 * @param {Number} maxLength the maximum length
 * @param {String/Array} [tail] the tail to append on truncation
 *
 * @return {String/Array} the truncated string or array
 */
MochiKit.Format.truncate = function(obj, maxLength, tail) {
    var base = MochiKit.Base;
    if (obj != null && typeof(obj) != "string" && !base.isArrayLike(obj)) {
        obj = obj.toString();
    }
    if (obj == null || obj.length <= maxLength || maxLength < 0) {
        return obj;
    }
    if (typeof(tail) == "string" || base.isArrayLike(tail)) {
        obj = obj.slice(0, maxLength - tail.length);
        if (typeof(obj) == "string") {
            return obj + tail;
        } else {
            return base.extend(obj, tail);
        }
    } else {
        return obj.slice(0, maxLength);
    }
}

/**
 * Creates a formatter function for the specified formatter pattern
 * and locale. The returned function takes as many arguments as the
 * formatter pattern requires. See separate documentation for
 * information about the formatter pattern syntax.
 *
 * @param {String} pattern the formatter pattern string
 * @param {Object} [locale] the locale to use, defaults to
 *            LOCALE.en_US
 *
 * @return {Function} the formatter function created
 *
 * @throws FormatPatternError if the format pattern was invalid
 */
MochiKit.Format.formatter = function(pattern, locale) {
    if (typeof(locale) == "undefined") {
        locale = MochiKit.Format.formatLocale();
    } else if (typeof(locale) == "string") {
        locale = MochiKit.Format.formatLocale(locale);
    }
    var parts = MochiKit.Format._parsePattern(pattern);
    return function() {
        var values = MochiKit.Base.extend([], arguments);
        return MochiKit.Format._formatParts(parts, values, locale);
    }
}

/**
 * Formats the specified arguments according to a formatter pattern.
 * See separate documentation for information about the formatter
 * pattern syntax.
 *
 * @param {String} pattern the formatter pattern string
 * @param {Object} [...] the optional values to format
 *
 * @return {String} the formatted output string
 *
 * @throws FormatPatternError if the format pattern was invalid
 */
MochiKit.Format.format = function(pattern/*, ...*/) {
    var parts = MochiKit.Format._parsePattern(pattern);
    var values = MochiKit.Base.extend([], arguments, 1);
    var locale = MochiKit.Format.formatLocale();
    return MochiKit.Format._formatParts(parts, values, locale);
}

/**
 * Parses a format pattern and returns an array of constant strings
 * and format info objects.
 *
 * @param {String} pattern the format pattern to analyze
 *
 * @return {Array} an array of strings and format info objects
 *
 * @throws FormatPatternError if the format pattern was invalid
 */
MochiKit.Format._parsePattern = function(pattern) {
    var self = MochiKit.Format;
    var parts = [];
    var start = 0;
    var pos = 0;
    for (pos = 0; pos < pattern.length; pos++) {
        if (pattern[pos] == "{") {
            if (pos + 1 >= pattern.length) {
                var msg = "unescaped { char, should be escaped as {{";
                throw new self.FormatPatternError(pattern, pos, msg);
            } else if (pattern[pos + 1] == "{") {
                parts.push(pattern.substring(start, pos + 1));
                start = pos + 2;
                pos++;
            } else {
                if (start < pos) {
                    parts.push(pattern.substring(start, pos));
                }
                start = pattern.indexOf("}", pos) + 1;
                if (start <= 0) {
                    var msg = "unmatched { char, not followed by a } char";
                    throw new self.FormatPatternError(pattern, pos, msg);
                }
                parts.push(self._parseFormat(pattern, pos + 1, start - 1));
                pos = start - 1;
            }
        } else if (pattern[pos] == "}") {
            if (pos + 1 >= pattern.length || pattern[pos + 1] != "}") {
                var msg = "unescaped } char, should be escaped as }}";
                throw new self.FormatPatternError(pattern, pos, msg);
            }
            parts.push(pattern.substring(start, pos + 1));
            start = pos + 2;
            pos++;
        }
    }
    if (start < pos) {
        parts.push(pattern.substring(start, pos));
    }
    return parts;
}

/**
 * Parses a format instruction and returns a format info object.
 *
 * @param {String} pattern the format pattern string
 * @param {Number} startPos the first index of the format instruction
 * @param {Number} endPos the last index of the format instruction
 *
 * @return {Object} the format info object
 *
 * @throws FormatPatternError if the format pattern was invalid
 */
MochiKit.Format._parseFormat = function(pattern, startPos, endPos) {
    var self = MochiKit.Format;
    var text = pattern.substring(startPos, endPos);
    var info;
    var pos = text.indexOf(":");
    if (pos == 0) {
        info = self._parseFormatFlags(pattern, startPos + 1, endPos);
        info.path = [0];
    } else if (pos > 0) {
        info = self._parseFormatFlags(pattern, startPos + pos + 1, endPos);
        info.path = text.substring(0, pos).split(".");
    } else {
        info = self._parseFormatFlags(pattern, endPos, endPos);
        info.path = text.split(".");
    }
    var DIGITS = /^\d+$/;
    for (var i = 0; i < info.path.length; i++) {
        var e = info.path[i];
        if (typeof(e) == "string") {
            e = self.strip(e);
            if (e == "" && info.path.length == 1) {
                e = 0;
            } else if (e == "") {
                var msg = "format value path contains blanks";
                throw new self.FormatPatternError(pattern, startPos, msg);
            } else if (DIGITS.test(e)) {
                e = parseInt(e);
            }
        }
        info.path[i] = e;
    }
    if (info.path.length < 0 || typeof(info.path[0]) != "number") {
        info.path.unshift(0);
    }
    return info;
}

/**
 * Parses a string with format flags and returns a format info object.
 *
 * @param {String} pattern the format pattern string
 * @param {Number} startPos the first index of the format instruction
 * @param {Number} endPos the last index of the format instruction
 *
 * @return {Object} the format info object
 *
 * @throws FormatPatternError if the format pattern was invalid
 */
MochiKit.Format._parseFormatFlags = function(pattern, startPos, endPos) {
    var self = MochiKit.Format;
    var info = { format: "s", width: 0, precision: -1, align: ">",
                 sign: "-", padding: " ", grouping: false };
    var flags = self.rstrip(pattern.substring(startPos, endPos));
    while (flags.length > 0) {
        switch (flags[0]) {
        case ">":
        case "<":
            info.align = flags[0];
            flags = flags.substring(1);
            break;
        case "+":
        case "-":
        case " ":
            info.sign = flags[0];
            flags = flags.substring(1);
            break;
        case ",":
            info.grouping = true;
            flags = flags.substring(1);
            break;
        case ".":
            var DIGITS = "0123456789";
            var pos = 1;
            while (pos < flags.length && DIGITS.indexOf(flags[pos]) >= 0) {
                pos++;
            }
            info.precision = parseInt(flags.substring(1, pos));
            flags = flags.substring(pos);
            break;
        case "0":
            info.padding = flags[0];
            flags = flags.substring(1);
            break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            var DIGITS = "0123456789";
            var pos = 1;
            while (pos < flags.length && DIGITS.indexOf(flags[pos]) >= 0) {
                pos++;
            }
            info.width = parseInt(flags.substring(0, pos));
            flags = flags.substring(pos);
            break;
        case "s":
        case "r":
        case "b":
        case "c":
        case "d":
        case "o":
        case "x":
        case "X":
        case "f":
        case "%":
            info.format = flags[0];
            flags = flags.substring(1);
            break;
        default:
            var msg = "unsupported format flag: " + flags[0];
            throw new self.FormatPatternError(pattern, startPos, msg);
        }
    }
    return info;
}

/**
 * Formats an array of strings and format info objects with the
 * specified array of values.
 *
 * @param {Array} parts the array of strings and format infos
 * @param {Array} values the array of values to format
 * @param {Object} locale the formatting locale to use
 *
 * @return {String} the formatted output string
 */
MochiKit.Format._formatParts = function(parts, values, locale) {
    var self = MochiKit.Format;
    var result = "";
    for (var i = 0; i < parts.length; i++) {
        if (typeof(parts[i]) == "string") {
            result += parts[i];
        } else {
            var info = parts[i];
            var v = values;
            for (var j = 0; j < info.path.length; j++) {
                if (v != null) {
                    v = v[info.path[j]];
                }
            }
            var str = "";
            switch (info.format) {
            // TODO: implement remaining format types (with precision)
            case "d":
            case "f":
                var sign = (info.sign == "-") ? "" : info.sign;
                sign = (v < 0) ? "-" : sign;
                v = Math.abs(v);
                if (info.format == "d") {
                    str = self.truncToFixed(v, 0);
                } else if (info.precision >= 0) {
                    str = self.truncToFixed(v, info.precision);
                } else {
                    str = (v == null) ? "0" : v.toString();
                }
                var fracPos = str.indexOf(".");
                var whole = (fracPos < 0) ? str : str.substring(0, fracPos);
                var fraction = (fracPos < 0) ? "" : str.substring(fracPos + 1);
                if (info.padding == "0" ) {
                    var adjust = sign.length;
                    if (fraction.length > 0) {
                        adjust += 1 + fraction.length;
                    }
                    while (whole.length < info.width - adjust) {
                        whole = "0" + whole;
                    }
                }
                str = (fraction.length > 0) ? locale.decimal : "";
                while (info.grouping && fraction.length > 3) {
                    str = str + fraction.substring(0, 3) + locale.separator;
                    fraction = fraction.substring(3);
                    if (whole[0] == "0") {
                        whole = whole.substring(1);
                    }
                }
                if (fraction.length > 0) {
                    str += fraction;
                }
                while (info.grouping && whole.length > 3) {
                    var pos = whole.length - 3;
                    str = locale.separator + whole.substring(pos) + str;
                    if (whole[0] == "0") {
                        whole = whole.substring(1, pos);
                    } else {
                        whole = whole.substring(0, pos);
                    }
                }
                str = sign + whole + str;
                break;
            case "r":
            case "s":
            default:
                if (info.format == "r") {
                    str = MochiKit.Base.repr(v);
                } else {
                    str = (v == null) ? "null" : v.toString();
                }
                str = self.truncate(str, info.precision);
                break;
            }
            while (info.width > str.length) {
                if (info.align == "<") {
                    str += info.padding;
                } else {
                    str = info.padding + str;
                }
            }
            result += str;
        }
    }
    return result;
}

/**
 * Creates a new format pattern error.
 *
 * @param {String} pattern the format pattern string
 * @param {Number} pos the position of the error
 * @param {String} message the error message text
 *
 * @return {Error} the format pattern error
 *
 * @class The format pattern error class. This error is thrown when
 *     a syntax error is encountered inside a format string.
 * @property {String} pattern The format pattern string.
 * @property {Number} pos The position of the error.
 * @property {String} message The error message text.
 * @extends MochiKit.Base.NamedError
 */
MochiKit.Format.FormatPatternError = function(pattern, pos, message) {
    this.pattern = pattern;
    this.pos = pos;
    this.message = message;
}
MochiKit.Format.FormatPatternError.prototype =
    new MochiKit.Base.NamedError("MochiKit.Format.FormatPatternError");

// Export symbols to global namespace
MochiKit.Format.EXPORT.push("format");
MochiKit.Format.EXPORT.push("formatter");
MochiKit.Format.EXPORT.push("FormatPatternError");
MochiKit.Base._exportSymbols(this, MochiKit.Format);
