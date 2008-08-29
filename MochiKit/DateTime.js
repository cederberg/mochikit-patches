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

// Check for loaded MochiKit.DateTime
if (typeof(MochiKit.DateTime) == "undefined") {
    throw new ReferenceError("MochiKit.DateTime must be loaded before loading this script");
}

MochiKit.DateTime.MILLIS_PER_SECOND = 1000;
MochiKit.DateTime.MILLIS_PER_MINUTE = 60 * 1000;
MochiKit.DateTime.MILLIS_PER_HOUR = 60 * 60 * 1000;
MochiKit.DateTime.MILLIS_PER_DAY = 24 * 60 * 60 * 1000;
MochiKit.DateTime.MILLIS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;

/**
 * Formats a number using two digits, i.e. pads with a leading zero
 * character if the number is only one digit.
 *
 * @param {Number} value the number to format
 *
 * @return {String} the formatted number string
 *
 * @function
 */
MochiKit.DateTime._twoDigitNumber = MochiKit.Format.numberFormatter("00");

/**
 * Creates a new time period object from a number of milliseconds.
 *
 * @constructor
 * @param {Number} millis the number of milliseconds in the period
 *
 * @return {Object} new time period object
 *
 * @class The time period class. Used to encapsulate a structured
 *     time period, split up into its variuos components. For time
 *     period calculations, the total millisecond value is normally
 *     a better choice (to avoid overflow and underflow issues).
 * @property {Number} days The number of days in the period. This is
 *     an integer value from 0 and up.
 * @property {Number} hours The number of hours in the period. This
 *     is an integer value between 0 and 23.
 * @property {Number} minutes The number of minutes in the period.
 *     This is an integer value between 0 and 59.
 * @property {Number} seconds The number of seconds in the period.
 *     This is an integer value between 0 and 59.
 * @property {Number} millis The number of remaining milliseconds in
 *     the period. This is an integer value between 0 and 999.
 */
MochiKit.DateTime.TimePeriod = function(millis) {
    return {
        days: Math.floor(millis / MochiKit.DateTime.MILLIS_PER_DAY),
        hours: Math.floor(millis / MochiKit.DateTime.MILLIS_PER_HOUR) % 24,
        minutes: Math.floor(millis / MochiKit.DateTime.MILLIS_PER_MINUTE) % 60,
        seconds: Math.floor(millis / MochiKit.DateTime.MILLIS_PER_SECOND) % 60,
        millis: millis % 1000
    };
}

/**
 * Converts a number of milliseconds to an approximate time period.
 *
 * @param {Number} millis the number of milliseconds
 *
 * @return {String} the string representation of the period
 */
MochiKit.DateTime.toApproxPeriod = function(millis) {
    var p = MochiKit.DateTime.TimePeriod(millis); 

    if (p.days >= 10) {
        return p.days + " days";
    } else if (p.days >= 1) {
        return p.days + " days " + MochiKit.DateTime._twoDigitNumber(p.hours) + " hours";
    } else if (p.hours >= 1) {
        return p.hours + ":" + MochiKit.DateTime._twoDigitNumber(p.minutes) + " hours";
    } else if (p.minutes >= 1) {
        return p.minutes + ":" + MochiKit.DateTime._twoDigitNumber(p.seconds) + " minutes";
    } else if (p.seconds >= 1) {
        return p.seconds + " seconds";
    } else {
        return p.millis + " milliseconds";
    }
}
