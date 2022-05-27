type Validacion = [string, RegExp];
declare var Deno: any;
declare var navigator: Navigator;
type Navigator = { userAgent: string };
declare var process: { platform: string };

export default class Visitante {

    private static userAgent: string;

    private static readonly __OS: Validacion[] = [
        [ 'Windows Phone', /Windows\sPhone\s([\d\.]+)/ ],
        [ 'Windows Mobile', /(?:(?:Windows\sMobile)|(?:WhatsApp\/\d+\.\d+\.\d+ W))(?:\s([\d\.]+))?/ ],
        [ 'Windows NT', /(?:(?:Windows\sNT)|(?:win32)|(?:cygwin)|(?:windows))(?:\s([\d\.]+))?/ ],
        [ 'Windows', /Windows(?:\s([\d\.]+))?/ ],
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
        [ 'ChromeOS', /(?:CrOS)|(?:CrKey)/ ],
        [ 'BlackBerry OS', /(?:BlackBerry)|(?:BB10)/ ],
        [ 'BeOS', /BeOS/i ],
        [ 'Bada', /Bada/ ],
        [ 'Android x86', /Android\sx86/ ],
        [ 'Android', /Android/i ],
        [ 'Vector Linux', /vectorlinux/ ],
        [ 'Arch Linux', /arch\slinux/i ],
        [ 'Linux', /Linux/i ],
        [ 'AmigaOS', /AmigaOS/ ],
        [ 'AIX', /AIX/i ],
        [ 'MeeGo', /MeeGo/ ],
        [ 'Maemo', /Maemo/i ],
        [ 'Tizen', /Tizen/i ],
        [ 'QNX', /QNX/i ],
        [ 'Sailfish OS', /sailfish/i ],
        [ 'Firefox OS', /Mobile.*?Firefox/ ],
        [ 'Mageia Linux', /Mageia/i ],
        [ 'Suse Linux', /(?:open)?suse/i ],
        [ 'Gentoo Linux', /gentoo/i ],
        [ 'Salckware Linux', /slackware/i ],
        [ 'Fedora Linux', /fedora/i ],
        [ 'Mandriva Linux', /mandriva/i ],
        [ 'CentOS Linux', /centos/i ],
        [ 'PCLinuxOS', /pclinuxos/i ],
        [ 'Zenwalk Linux', /zenwalk/i ],
        [ 'Linpus Linux', /linpus/i ],
        [ 'Raspbian', /raspbian/i ],
        [ 'Plan 9', /plan\s9/i ],
        [ 'Minix', /minix/i ],
        [ 'Contiki', /contiki/i ],
        [ 'Deepin Linux', /deepin/i ],
        [ 'Manjaro Linux', /manjaro/i ],
        [ 'Elementary OS', /elementary\sos/i ],
        [ 'Sabayon', /sabayon/i ],
        [ 'GNU', /gnu/i ],
        [ 'Hurd', /hurd/i ],
        [ 'Solaris', /(?:open)?solaris/i ],
        [ 'MorphOS', /morphos/i ],
        [ 'OpenVMS', /openvms/i ],
        [ 'HP-UX', /hp-ux/i ],
        [ 'Fuchsia', /fuchsia/i ],
        [ 'Unix', /(?:X11)|(?:UNIX)|(?:[Uu]nix)/ ],
        [ 'Other', /\w{7}/i ]
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
                    return 'Unknown';
                }
            }
        }
    }

    private static parse (validaciones: Validacion[], userAgent?: string) {
        if (!userAgent || typeof userAgent !== 'string' || userAgent.length == 0) {
            userAgent = this.getUA();
        }

        for (let validacion of validaciones) {
            let resultado = validacion[1].exec(userAgent);
            if (resultado !== null) {
                return [validacion[0], resultado[1]];
            }
        }

        return 'Unknown';
    }

    public static OS (userAgent?: string) {
        return this.parse(this.__OS, userAgent);
    }
}