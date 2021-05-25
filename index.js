"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Visitante = /** @class */ (function () {
    function Visitante() {
    }
    Visitante.parse = function (comparable) {
        var resultado = comparable[1].exec(Visitante.userAgent);
        return resultado === null ? null : [comparable[0], resultado[1]];
    };
    Visitante.navegador = function (userAgent) {
        if (!userAgent || typeof userAgent !== 'string' || userAgent.length == 0) {
            try {
                userAgent = navigator.userAgent;
            }
            catch (_a) {
                if (process) {
                    return ['NodeJS', 'N/A'];
                }
                else
                    return ['Desconocido', 'N/A'];
            }
        }
        Visitante.userAgent = userAgent;
        var resultado = Visitante.validacionesNavegador.map(function (validacionNavegador) { return Visitante.parse(validacionNavegador); });
        var aDevolver = ['Desconocido', 'N/A'];
        for (var _i = 0, resultado_1 = resultado; _i < resultado_1.length; _i++) {
            var navegador = resultado_1[_i];
            if (navegador !== null) {
                aDevolver = navegador;
                break;
            }
        }
        return aDevolver;
    };
    Visitante.sistemaOperativo = function (userAgent) {
        if (!userAgent || typeof userAgent !== 'string' || userAgent.length == 0) {
            try {
                userAgent = navigator.userAgent;
            }
            catch (_a) {
                if (process) {
                    switch (process.platform) {
                        case 'aix':
                            return ['AIX', 'N/A'];
                        case 'android':
                            return ['Android', 'N/A'];
                        case 'cygwin':
                            return ['Windows', 'N/A'];
                        case 'darwin':
                            return ['macOS', 'N/A'];
                        case 'freebsd':
                            return ['FreeBSD', 'N/A'];
                        case 'linux':
                            return ['Linux', 'N/A'];
                        case 'netbsd':
                            return ['NetBSD', 'N/A'];
                        case 'openbsd':
                            return ['OpenBSD', 'N/A'];
                        case 'sunos':
                            return ['SunOS', 'N/A'];
                        case 'win32':
                            return ['Windows', 'N/A'];
                        default:
                            return [process.platform, 'N/A'];
                    }
                }
                else
                    return ['Desconocido', 'N/A'];
            }
        }
        Visitante.userAgent = userAgent;
        var resultado = Visitante.validacionesSistemaOperativo.map(function (validacionSistemaOperativo) { return Visitante.parse(validacionSistemaOperativo); });
        var aDevolver = ['Desconocido', 'N/A'];
        for (var _i = 0, resultado_2 = resultado; _i < resultado_2.length; _i++) {
            var sistemaOperativo = resultado_2[_i];
            if (sistemaOperativo && (sistemaOperativo === null || sistemaOperativo === void 0 ? void 0 : sistemaOperativo.length) > 0) {
                if (sistemaOperativo[0] === 'Windows') {
                    switch (sistemaOperativo[1]) {
                        case '10.0':
                            sistemaOperativo[1] = '10';
                            break;
                        case '6.1':
                            sistemaOperativo[1] = '7';
                            break;
                        case '5.1':
                            sistemaOperativo[1] = 'XP';
                            break;
                    }
                }
                else if (['Android', 'macOS', 'iOS'].indexOf(sistemaOperativo[0]) !== -1) {
                    var tempVersion = /(\d+)([\._](\d+))?/.exec(sistemaOperativo[1]);
                    if (!tempVersion || !tempVersion[3] || (tempVersion && tempVersion[3] === '0'))
                        sistemaOperativo[1] = tempVersion ? tempVersion[1] : sistemaOperativo[1];
                    else
                        sistemaOperativo[1] = tempVersion[1] + "." + tempVersion[3];
                }
                aDevolver = sistemaOperativo;
            }
        }
        if (aDevolver[0] === 'macOS') {
            switch (aDevolver[1]) {
                case '10.0':
                    aDevolver[1] = 'Cheetah';
                    break;
                case '10.1':
                    aDevolver[1] = 'Puma';
                    break;
                case '10.2':
                    aDevolver[1] = 'Jaguar';
                    break;
                case '10.3':
                    aDevolver[1] = 'Panther';
                    break;
                case '10.4':
                    aDevolver[1] = 'Tiger';
                    break;
                case '10.5':
                    aDevolver[1] = 'Leopard';
                    break;
                case '10.6':
                    aDevolver[1] = 'Snow Leopard';
                    break;
                case '10.7':
                    aDevolver[1] = 'Lion';
                    break;
                case '10.8':
                    aDevolver[1] = 'Mountain Lion';
                    break;
                case '10.9':
                    aDevolver[1] = 'Mavericks';
                    break;
                case '10.10':
                    aDevolver[1] = 'Yosemite';
                    break;
                case '10.11':
                    aDevolver[1] = 'El Capitan';
                    break;
                case '10.12':
                    aDevolver[1] = 'Sierra';
                    break;
                case '10.13':
                    aDevolver[1] = 'High Sierra';
                    break;
                case '10.14':
                    aDevolver[1] = 'Mojave';
                    break;
                case '10.15':
                    aDevolver[1] = 'Catalina';
                    break;
                case '11.0':
                    aDevolver[1] = 'Big Sur';
                    break;
            }
        }
        return aDevolver;
    };
    Visitante.plataforma = function (userAgent) {
        if (!userAgent || typeof userAgent !== 'string' || userAgent.length == 0) {
            try {
                userAgent = navigator.userAgent;
            }
            catch (_a) {
                if (process) {
                    switch (process.platform) {
                        case 'android':
                            return ['Móvil', 'N/A'];
                        case 'darwin':
                            return ['Mac', 'N/A'];
                        default:
                            return ['PC', 'N/A'];
                    }
                }
                else
                    return ['Desconocido', 'N/A'];
            }
        }
        Visitante.userAgent = userAgent;
        var resultado = Visitante.validacionesPlataforma.map(function (validacionPlataforma) { return Visitante.parse(validacionPlataforma); });
        var aDevolver = ['Otro', 'Desconocido'];
        for (var _i = 0, resultado_3 = resultado; _i < resultado_3.length; _i++) {
            var plataforma = resultado_3[_i];
            if (plataforma && plataforma.length > 0) {
                if (plataforma[0] == 'Android')
                    aDevolver = ['Móvil', (plataforma && plataforma[1]) ? plataforma[1] : 'Teléfono o tablet'];
                else
                    aDevolver = plataforma;
                break;
            }
        }
        return aDevolver;
    };
    Object.defineProperty(Visitante, "acronimoSistema", {
        get: function () {
            var sistema = Visitante.sistemaOperativo();
            var aDevolver = 'Otro';
            if (sistema) {
                switch (sistema[0]) {
                    case 'Windows':
                        aDevolver = 'Win';
                        break;
                    case 'macOS':
                        aDevolver = 'Win';
                        break;
                    case 'iOS':
                    case 'Android':
                        aDevolver = sistema[0];
                        break;
                }
            }
            return aDevolver;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Visitante, "acronimoNavegador", {
        get: function () {
            var navegador = Visitante.navegador();
            var aDevolver = 'Desconocido';
            if (navegador) {
                aDevolver = navegador[0].replace(' ', '');
            }
            return aDevolver;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Visitante, "acronimoPlataforma", {
        get: function () {
            var plataforma = Visitante.plataforma();
            var aDevolver = 'Otra';
            if (plataforma) {
                aDevolver = plataforma[0];
            }
            return aDevolver;
        },
        enumerable: false,
        configurable: true
    });
    Visitante.userAgent = '';
    Visitante.validacionesNavegador = [
        ['Edge', /Edge\/([0-9\._]+)/],
        ['Edge Chromium Mobile', /EdgA\/([0-9\._]+)/],
        ['Edge Chromium', /Edg\/([0-9\._]+)/],
        ['Yandex Browser', /YaBrowser\/([0-9\._]+)/],
        ['Vivaldi', /Vivaldi\/([0-9\.]+)/],
        ['Vivaldi', /Viv\/([0-9\.]+)/],
        ['Samsung Browser', /SamsungBrowser\/([0-9\._]+)/],
        ['Chromium', /Chromium\/([0-9\._]+)/],
        ['KAKAOTALK', /KAKAOTALK\s([0-9\.]+)/],
        ['Chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
        ['PhantomJS', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
        ['CriOS', /CriOS\/([0-9\.]+)(:?\s|$)/],
        ['Firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
        ['FxiOS', /FxiOS\/([0-9\.]+)/],
        ['Opera', /Opera\/([0-9\.]+)(?:\s|$)/],
        ['Opera', /OPR\/([0-9\.]+)(:?\s|$)$/],
        ['Internet Explorer', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
        ['Internet Explorer', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
        ['Internet Explorer', /MSIE\s(7\.0)/],
        ['BB10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
        ['Android', /Android\s([0-9\.]+)/],
        ['Safari', /Version\/([0-9\._]+).*Safari/],
    ];
    Visitante.validacionesSistemaOperativo = [
        ['Windows', /Windows\sNT\s([0-9\._]+)/],
        ['Android', /Android\s([0-9\._]+)/],
        ['Linux', /(X11);\sLinux/],
        ['Ubuntu', /(X11);\sUbuntu/],
        ['macOS', /Mac\sOS\sX\s([0-9\._]+)/],
        ['iOS', /iPhone\sOS\s([0-9\._]+)/],
    ];
    Visitante.validacionesPlataforma = [
        ['PC', /(Win64|WOW64|x86_64|x64|Windows\sNT)/],
        ['Mac', /Macintosh;\s(Intel)/],
        ['iPhone', /(iPhone)/],
        ['iPad', /(iPad)/],
        ['Android', /\(Linux;(?:\s*U;)?\s*Android\s*[\d\._]+;(?:\s*\w{2,3}-\w{2,3};)?\s*(.*?)\)\s*Apple/i],
        ['Telefono', /(Mobile)/]
    ];
    return Visitante;
}());
exports.default = Visitante;
