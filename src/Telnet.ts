import Telnet from "telnet-client";
import { Queue } from "queue-system";

interface ExecOptions {
    shellPrompt?: string;
    loginPrompt?: string;
    failedLoginMatch?: string;
    timeout?: number;
    execTimeout?: number;
    irs?: string;
    ors?: string;
    echoLines?: number;
    maxBufferLength?: number;
}

class TelnetClient extends Telnet {
    private readonly _queue: Queue;

    public constructor() {
        super();
        this._queue = new Queue({ concurrency: 1 });
    }

    public exec(cmd: string, options?: ExecOptions) {
        const taskFn = () => super.exec(cmd, options);
        const task = this._queue.push(taskFn);
        return task.promise as Promise<string>;
    }
}

export { TelnetClient };
