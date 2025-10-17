export interface IApiClientOptions {
  baseURL?: string;
  apiKey: string;
}

export interface IZccApiClient {
  get<T>(path: string, params?: Record<string, any>): Promise<T>;
  post<T>(path: string, body: Record<string, any>): Promise<T>;
}
