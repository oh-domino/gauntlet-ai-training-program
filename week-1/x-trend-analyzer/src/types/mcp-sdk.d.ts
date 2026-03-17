declare module "@modelcontextprotocol/sdk/client" {
  export class Client {
    constructor(info: { name: string; version: string }, options?: any);
    connect(transport: any, options?: any): Promise<void>;
    callTool(params: { name: string; arguments?: Record<string, unknown> }, resultSchema?: any, options?: any): Promise<any>;
  }
}

declare module "@modelcontextprotocol/sdk/client/stdio" {
  export interface StdioServerParameters {
    command: string;
    args?: string[];
    env?: Record<string, string>;
    stderr?: any;
    cwd?: string;
  }

  export class StdioClientTransport {
    constructor(server: StdioServerParameters);
    start(): Promise<void>;
    close(): Promise<void>;
    readonly stderr: any;
    readonly pid: number | null;
  }
}

