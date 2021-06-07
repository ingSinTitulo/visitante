declare module 'process' {
    global {
        let process: NodeJS.Process;

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

            interface Process {
                platform: Platform;
            }

            interface Global {
                process: Process;
            }
        }
    }

    export = process;
}
