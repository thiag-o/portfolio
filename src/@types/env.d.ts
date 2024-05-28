declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SMTP_USER: string;
      SMTP_PASS: string;
    }
  }
}

export {};
