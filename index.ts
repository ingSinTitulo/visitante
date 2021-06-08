type Validacion = [string, RegExp];
declare var Deno: any;
declare var navigator: Navigator;
type Navigator = { userAgent: string };
declare var process: { platform: string };

export default class Visitante {

    private static userAgent: string;

    private static readonly __OS: Validacion[] = [
        [ 'Windows Phone', /Windows\sPhone/ ],
        [ 'Windows Mobile', /Windows\sMobile/ ],
        [ 'Windows 10 Mobile', /WhatsApp\/\d+\.\d+\.\d+ W/ ],
        [ 'Windows NT', /(?:Windows\sNT)|(?:win32)|(?:cygwin)|(?:windows)/ ],
        [ 'Windows', /Windows/ ],
        [ 'WebOS', /WebOS/ ],
        [ 'WatchOS', /(?:Watch\sOS)|(?:Watch\d,)/ ],
        [ 'tvOS', /[\s\(-]tvos/i ],
        [ 'Series40', /Series40/ ],
        [ 'Series60', /(?:Series60)|(?:\ss60-[a-z])/ ],
        [ 'Symbian', /Symbian/ ],
        [ 'SunOS', /SunOS/i ],
        [ 'Star-Blade OS', /Star-Blade\sOS/ ],
        [ 'Roku OS', /Roku/ ],
        [ 'RISC OS', /RISC\sOS/ ],
        [ 'RIM Tablet OS', /RIM\sTablet\sOS/ ],
        [ 'Remix OS', /(?:RemixOS)|(?:Remix\sMini)/ ],
        [ 'PalmOS', /(?:PalmSource)|(?:SPALM)|(?:PalmOS)|(?:Palm\d{3})/ ],
        [ 'OSF/1', /OSF1/ ],
        [ 'OS/2', /\bOS\/2\b/ ],
        [ 'OpenBSD', /OpenBSD/i ],
        [ 'NetBSD', /NetBSD/i ],
        [ 'macOS', /(?:Mac\sOS)|(?:Mac_PowerPC)/i ],
        [ 'PlayStation Vita System Software', /PlayStation\sVita/ ],
        [ 'Ubuntu', /Ubuntu/ ],
        [ 'Red Hat Enterprise Linux', /Red\sHat\sEnterprise(?:\sLinux)?/ ],
        [ 'Red Hat', /Red\sHat/ ],
        [ 'Debian', /Debian/ ],
        [ 'KAIOS', /KAIOS/ ],
        [ 'IRIX', /IRIX(?:64)?/ ],
        [ 'iOS', /(?:iPhone)|(?:WeatherReport.*?Darwin)/ ],
        [ 'Darwin', /Darwin/i ],
        [ 'iPadOS', /iPad/ ],
        [ 'HP WebOS', /hpwOS/ ],
        [ 'Haiku', /Haiku/ ],
        [ 'Glass OS', /Glass\s1/ ],
        [ 'FreeBSD', /FreeBSD/i ],
        [ 'FireOS', /(?:Silk)|(?:KFSUWI)|(?:Kindle\sFire)/ ],
        [ 'ChromeOS', /CrOS/ ],
        [ 'BlackBerry OS', /(?:BlackBerry)|(?:BB10)/ ],
        [ 'BeOS', /BeOS/i ],
        [ 'Bada', /Bada/ ],
        [ 'Android', /Android/i ],
        [ 'Linux', /Linux/i ],
        [ 'AmigaOS', /AmigaOS/ ],
        [ 'AIX', /AIX/i ],
        [ 'Unix', /(?:X11)|(?:UNIX)/ ],
        [ 'MeeGo', /MeeGo/ ],
        [ 'BingBot', /bingbot/ ]
    ];

    private static getUA (): string {
        if (this.userAgent && typeof this.userAgent === 'string' && this.userAgent.length > 0)
            return this.userAgent;
        
        try {
            return this.userAgent = Deno.build.os;
        }
        catch {
            try {
                let _proc = process;
                return this.userAgent = _proc.platform;
            }
            catch {
                try {
                    let inicio = (navigator as unknown);
                    let _ua = (inicio as Navigator)?.userAgent;
                    return this.userAgent = _ua;
                }
                catch {
                    return 'Desconocido';
                }
            }
        }
    }

    private static parse (validaciones: Validacion[], userAgent?: string) {
        if (!userAgent || typeof userAgent !== 'string' || userAgent.length == 0) {
            userAgent = this.getUA();
        }

        for (let validacion of validaciones)
            if (validacion[1].test(userAgent))
                return validacion[0];

        return 'Desconocido';
    }

    public static OS (userAgent?: string) {
        return this.parse(this.__OS, userAgent);
    }
}