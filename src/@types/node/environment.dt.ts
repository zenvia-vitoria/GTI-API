declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      NODE_ENV: string;
      ZCC_API_KEY: string;
    }
  }
  namespace Express {
    interface Request {
      userId?: string | undefined;
    }
  }
}
export { };
