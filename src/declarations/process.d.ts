declare module 'process' {
    global {
        var process: NodeJS.Process;

        namespace NodeJS {
            type Platform = 'aix'
                | 'android'
                | 'darwin'
                | 'freebsd'
                | 'linux'
                | 'openbsd'
                | 'sunos'
                | 'win32'
                | 'cygwin'
                | 'netbsd';

            interface Process extends EventEmitter {
                platform: Platform;
            }

            interface Global {
                process: Process;
            }
        }
    }

    export = process;
}
