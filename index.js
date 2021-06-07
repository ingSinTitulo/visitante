"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Visitante = /** @class */ (function () {
    function Visitante() {
    }
    Visitante.getUA = function () {
        var _a;
        if (this.userAgent && typeof this.userAgent === 'string' && this.userAgent.length > 0)
            return this.userAgent;
        try {
            return this.userAgent = Deno.build.os;
        }
        catch (_b) {
            try {
                var _proc = process;
                return this.userAgent = _proc.platform;
            }
            catch (_c) {
                try {
                    var inicio = navigator;
                    var _ua = (_a = inicio) === null || _a === void 0 ? void 0 : _a.userAgent;
                    return this.userAgent = _ua;
                }
                catch (_d) {
                    return 'Desconocido';
                }
            }
        }
    };
    Visitante.parse = function (validaciones, userAgent) {
        if (!userAgent || typeof userAgent !== 'string' || userAgent.length == 0) {
            userAgent = this.getUA();
        }
        for (var _i = 0, validaciones_1 = validaciones; _i < validaciones_1.length; _i++) {
            var validacion = validaciones_1[_i];
            if (validacion[1].test(userAgent))
                return validacion[0];
        }
        return 'Desconocido';
    };
    Visitante.OS = function (userAgent) {
        return this.parse(this.__OS, userAgent);
    };
    Visitante.__OS = [
        ['Windows Phone', /Windows\sPhone/],
        ['Windows Mobile', /Windows\sMobile/],
        ['Windows 10 Mobile', /WhatsApp\/\d+\.\d+\.\d+ W/],
        ['Windows NT', /(?:Windows\sNT)|(?:win32)|(?:cygwin)|(?:windows)/],
        ['Windows', /Windows/],
        ['WebOS', /WebOS/],
        ['Watch OS', /(?:Watch\sOS)|(?:Watch\d,)/],
        ['tvOS', /[\s\(-]tvos/i],
        ['Series40', /Series40/],
        ['Series60', /(?:Series60)|(?:\ss60-[a-z])/],
        ['Symbian', /Symbian/],
        ['SunOS', /SunOS/i],
        ['Star-Blade OS', /Star-Blade\sOS/],
        ['Roku OS', /Roku/],
        ['RISC OS', /RISC\sOS/],
        ['RIM Tablet OS', /RIM\sTablet\sOS/],
        ['Remix OS', /(?:RemixOS)|(?:Remix\sMini)/],
        ['PalmOS', /(?:PalmSource)|(?:SPALM)|(?:PalmOS)|(?:Palm\d{3})/],
        ['OSF/1', /OSF1/],
        ['OS/2', /\bOS\/2\b/],
        ['OpenBSD', /OpenBSD/i],
        ['NetBSD', /NetBSD/i],
        ['macOS', /(?:Mac\sOS)|(?:Mac_PowerPC)/i],
        ['PlayStation Vita System Sopftware', /PlayStation\sVita/],
        ['Ubuntu', /Ubuntu/],
        ['Red Hat Enterprise Linux', /Red\sHat\sEnterprise(?:\sLinux)?/],
        ['Red Hat', /Red\sHat/],
        ['Debian', /Debian/],
        ['KAIOS', /KAIOS/],
        ['IRIX', /IRIX(?:64)?/],
        ['iOS', /(?:iPhone)|(?:WeatherReport.*?Darwin)/],
        ['Darwin', /Darwin/i],
        ['iPadOS', /iPad/],
        ['HP WebOS', /hpwOS/],
        ['Haiku', /Haiku/],
        ['Glass OS', /Glass\s1/],
        ['FreeBSD', /FreeBSD/i],
        ['FireOS', /(?:Silk)|(?:KFSUWI)|(?:Kindle\sFire)/],
        ['ChromeOS', /CrOS/],
        ['BlackBerry OS', /(?:BlackBerry)|(?:BB10)/],
        ['BeOS', /BeOS/i],
        ['Bada', /Bada/],
        ['Android', /Android/i],
        ['Linux', /Linux/i],
        ['AmigaOS', /AmigaOS/],
        ['AIX', /AIX/i],
        ['Unix', /(?:X11)|(?:UNIX)/],
        ['MeeGo', /MeeGo/],
        ['BingBot', /bingbot/]
    ];
    return Visitante;
}());
exports.default = Visitante;
