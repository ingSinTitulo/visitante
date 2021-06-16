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
            var resultado = validacion[1].exec(userAgent);
            if (resultado !== null) {
                return [validacion[0], resultado[1]];
            }
        }
        // if (validacion[1].test(userAgent))
        //     return validacion[0];
        return 'Desconocido';
    };
    Visitante.OS = function (userAgent) {
        return this.parse(this.__OS, userAgent);
    };
    Visitante.__OS = [
        ['Windows Phone', /Windows\sPhone\s([\d\.]+)/],
        ['Windows Mobile', /(?:(?:Windows\sMobile)|(?:WhatsApp\/\d+\.\d+\.\d+ W))(?:\s([\d\.]+))?/],
        ['Windows NT', /(?:(?:Windows\sNT)|(?:win32)|(?:cygwin)|(?:windows))(?:\s([\d\.]+))?/],
        ['Windows', /Windows(?:\s([\d\.]+))?/],
        ['WebOS', /WebOS/],
        ['WatchOS', /(?:Watch\sOS)|(?:Watch\d,)/],
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
        ['PlayStation Vita System Software', /PlayStation\sVita/],
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
        ['ChromeOS', /(?:CrOS)|(?:CrKey)/],
        ['BlackBerry OS', /(?:BlackBerry)|(?:BB10)/],
        ['BeOS', /BeOS/i],
        ['Bada', /Bada/],
        ['Android x86', /Android\sx86/],
        ['Android', /Android/i],
        ['Vector Linux', /vectorlinux/],
        ['Arch Linux', /arch\slinux/i],
        ['Linux', /Linux/i],
        ['AmigaOS', /AmigaOS/],
        ['AIX', /AIX/i],
        ['MeeGo', /MeeGo/],
        ['Maemo', /Maemo/i],
        ['Tizen', /Tizen/i],
        ['QNX', /QNX/i],
        ['Sailfish OS', /sailfish/i],
        ['Firefox OS', /Mobile.*?Firefox/],
        ['Mageia Linux', /Mageia/i],
        ['Suse Linux', /(?:open)?suse/i],
        ['Gentoo Linux', /gentoo/i],
        ['Salckware Linux', /slackware/i],
        ['Fedora Linux', /fedora/i],
        ['Mandriva Linux', /mandriva/i],
        ['CentOS Linux', /centos/i],
        ['PCLinuxOS', /pclinuxos/i],
        ['Zenwalk Linux', /zenwalk/i],
        ['Linpus Linux', /linpus/i],
        ['Raspbian', /raspbian/i],
        ['Plan 9', /plan\s9/i],
        ['Minix', /minix/i],
        ['Contiki', /contiki/i],
        ['Deepin Linux', /deepin/i],
        ['Manjaro Linux', /manjaro/i],
        ['Elementary OS', /elementary\sos/i],
        ['Sabayon', /sabayon/i],
        ['GNU', /gnu/i],
        ['Hurd', /hurd/i],
        ['Solaris', /(?:open)?solaris/i],
        ['MorphOS', /morphos/i],
        ['OpenVMS', /openvms/i],
        ['HP-UX', /hp-ux/i],
        ['Fuchsia', /fuchsia/i],
        ['Unix', /(?:X11)|(?:UNIX)|(?:[Uu]nix)/]
    ];
    return Visitante;
}());
exports.default = Visitante;
/**
 * Crear nueva tarea en el workflow para compilar el typescript arriba y no incluirlo en el git
 * Terminar de escrapear todas las listas
 * Agregar columnas a todas las listas con los resultados esperados
 * Crear tester basado en las listas en CSV y las columnas de resultados esperados
 * Crear documentador para detectar en cuales registros no arrojo el resultado esperado
 * Agregar navegador
 * Agregar version del navegador
 * Agregar layout engine
 * Agregar version del layout engine
 * Agregar tipo de dispositivo
 * Agregar tipo de software
 * Agregar nombre de dispositivo
 * Agregar arquitectura
 * Crear slugger
 * Hacer funcion que pregunta directamente si es uno u otro preguntando por slugger o nombre
 * Hacer getters
 * Crear booleanos para saber si es uno u otro
 * En el caso de navegador, desempaquetar el objeto navigator para obtener informacion del dispositivo
 * En el caso de node, preguntar todas las cosas de hardware que se puedan
 * En el caso de deno, desenvolver todo el objeto Deno
 * Comparar con respuestas de otras librerias que hagan lo mismo
 * Crear API para extender o modificar validaciones
 * Crear una pagina que muestre los datos del cliente, y si no estan, que muestre un formulario para registrar
 * Crear una API y en caso de que no exista el registro enviarle una respuesta que pida el registro
 * Crear un parser para express
 * Crear inyectable para angular
 * Crear documentacion
 * Crear una landing para el proyecto
 */ 
