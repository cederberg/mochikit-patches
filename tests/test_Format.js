if (typeof(tests) == 'undefined') { tests = {}; }

tests.test_Format = function (t) {
    t.is(format("plain text 123"), "plain text 123", "plain text is unmodified");
    t.is(format("{{}}abc}}{{123"), "{}abc}{123", "escaping { and } characters");
    try {
        format("{");
        t.ok(false, "should throw FormatPatternError on single {");
    } catch (e) {
        t.ok(e instanceof FormatPatternError, "should throw FormatPatternError on single {");
    }
    try {
        format("}");
        t.ok(false, "should throw FormatPatternError on single }");
    } catch (e) {
        t.ok(e instanceof FormatPatternError, "should throw FormatPatternError on single }");
    }
    try {
        format("{0");
        t.ok(false, "should throw FormatPatternError on missing }");
    } catch (e) {
        t.ok(e instanceof FormatPatternError, "should throw FormatPatternError on missing }");
    }
    t.is(format("a {0} text", "replaced"), "a replaced text", "simple positional insert");
    t.is(format("{1}{2}{0}{1}", "a", "b", "c"), "bcab", "positional reorderer insert");
    t.is(format("{name}: {value}", { name: "a", value: "b" }), "a: b", "simple named insert");
    t.is(format("{ 0.name }: {1. sub .value }", { name: "a" }, { sub: { value: "b" } }), "a: b", "combined pos & name insert");
    try {
        format("{0.}", "value");
        t.ok(false, "should throw FormatPatternError on blank format locator section");
    } catch (e) {
        t.ok(e instanceof FormatPatternError, "should throw FormatPatternError on blank format locator section");
    }
    t.is(format("{  }", "value"), "value", "blank format locator is similar to {0}");
    t.is(format("{}", 0.25), "0.25", "blank is string format");
    var o = { toString: function() { return "toString"; },
              repr: function() { return "repr"; } };
    t.is(format("{:s}", o), "toString", "string format type");
    t.is(format("{ :s }", null), "null", "null string format");
    t.is(format("abc {:s}", 0.25), "abc 0.25", "number string format");
    t.is(format("{:4s}", 2), "   2", "padded string format");
    t.is(format("{:<4}", 2), "2   ", "left-aligned padded string format");
    t.is(format("{:>4}", 2), "   2", "right-aligned padded string format");
    t.is(format("{:>6.4s}", o), "  toSt", "left-aligned padded truncated string format");
    t.is(format("{:r}", o), "repr", "repr format type");
    t.is(format("{:r}", null), "null", "null repr format");
    t.is(format("{:<5.3r}", o), "rep  ", "right-aligned padded truncated repr format");
    t.is(format("{:d}", 1.5), "1", "decimal format type");
    t.is(format("{:d}", null), "0", "null decimal format");
    t.is(format("{:4d}", 25), "  25", "padded decimal format");
    t.is(format("{:04d}", 25), "0025", "zero-padded decimal format");
    t.is(format("{:4d}", -25), " -25", "unsigned decimal format");
    t.is(format("{:04d}", -25), "-025", "unsigned zero-padded decimal format");
    t.is(format("{:+4d}", 25), " +25", "signed decimal format");
    t.is(format("{:+04d}", 25), "+025", "signed zero-padded decimal format");
    t.is(format("{: d}", 25), " 25", "spaced decimal format");
    t.is(format("{: 4d}", 25), "  25", "spaced padded decimal format");
    t.is(format("{: 04d}", 25), " 025", "spaced zero-padded decimal format");
    t.is(format("{:,d}", 1234567), "1,234,567", "grouped decimal format");
    t.is(format("{:,d}", 123), "123", "not grouped decimal format");
    t.is(format("{:,05d}", 25), "0,025", "grouped zero-padded decimal format");
    t.is(format("{:<4d}", 25), "25  ", "left-aligned decimal format");
    t.is(format("{:>4d}", 25), "  25", "right-aligned decimal format");
    t.is(format("{:f}", 1.5), "1.5", "floating format type");
    t.is(format("{:f}", null), "0", "null floating format");
    t.is(format("{:5f}", 1.5), "  1.5", "padded floating format");
    t.is(format("{:.5f}", 1.5), "1.50000", "precision floating format");
    t.is(format("{:05.2f}", 1.5), "01.50", "zero-padded floating format");
    t.is(format("{:6.2f}", -1.5), " -1.50", "unsigned floating format");
    t.is(format("{:05f}", -1.5), "-01.5", "unsigned zero-padded floating format");
    t.is(format("{:+5f}", 1.5), " +1.5", "signed floating format");
    t.is(format("{:+07.3f}", 1.5), "+01.500", "signed zero-padded floating format");
    t.is(format("{: f}", 1.5), " 1.5", "spaced floating format");
    t.is(format("{: 5f}", 1.5), "  1.5", "spaced padded floating format");
    t.is(format("{: 05f}", 1.5), " 01.5", "spaced zero-padded floating format");
    t.is(format("{:,f}", 1.5234), "1.523,4", "grouped precision floating format");
    t.is(format("{:,f}", 1.523), "1.523", "not grouped precision floating format");
    t.is(format("{:,08.4f}", 1.5), "01.500,0", "grouped precision floating format");
    t.is(format("{:<7.3f}", 1.5), "1.500  ", "left-aligned floating format");
    t.is(format("{:>5f}", 1.5), "  1.5", "right-aligned floating format");
    var f = formatter("{1}{2}{0}{1}");
    t.is(f("a", "b", "c"), "bcab", "formatter function creation");
    t.is(f("1", "2", "3"), "2312", "formatter function reuse");
    var f = formatter("{:,08.4f}");
    t.is(f(1.5), "01.500,0", "default locale formatter");
    var f = formatter("{:,08.4f}", formatLocale("fr_FR"));
    t.is(f(1.5), "01,500 0", "fr_FR precision locale formatter");
    var f = formatter("{:,08.4f}", "de_DE");
    t.is(f(1.5), "01,500.0", "de_DE precision locale formatter");
    try {
        format("{ :z }", o);
        t.ok(false, "should throw FormatPatternError on invalid format type");
    } catch (e) {
        t.ok(e instanceof FormatPatternError, "should throw FormatPatternError on invalid format type");
    }
};
