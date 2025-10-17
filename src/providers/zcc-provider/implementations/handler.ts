import { Exception } from "@/core/exception";
import {
  IApiClientOptions,
  IZccApiClient,
} from "@/providers/zcc-provider/zcc-provider.interface";
import axios, { AxiosInstance, isAxiosError } from "axios";

export class ZCCApiClient implements IZccApiClient {
  private readonly api: AxiosInstance;
  private readonly apiKey: string;

  constructor(options: IApiClientOptions) {
    this.apiKey = options.apiKey;

    this.api = axios.create({
      baseURL: options.baseURL || "https://api.zenvia.com/v2",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async get<T>(
    path: string,
    params: Record<string, any> = {},
  ): Promise<T> {
    try {
      const response = await this.api.get<T>(path, {
        params: { ...params, token: this.apiKey },
      });
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }

  public async post<T>(path: string, body: Record<string, any>): Promise<T> {
    try {
      const response = await this.api.post<T>(path, body, {
        params: { token: this.apiKey },
      });
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }

  private handleApiError(error: unknown): never {
    if (isAxiosError(error) && error.response) {
      const { status, data } = error.response;
      const errorMessage =
        data?.message || JSON.stringify(data) || "Erro na API Externa";

      throw new Exception(`Erro na API Movidesk: ${errorMessage}`, status);
    }

    throw new Exception("Erro de comunicação com a API Movidesk.", 503); // 503 Service Unavailable
  }
}
