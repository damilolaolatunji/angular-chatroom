export class ChatManager {
  constructor(...args: any[]);
  apiInstance: any;
  filesInstance: any;
  cursorsInstance: any;
  presenceInstance: any;
  userId: any;
  connectionTimeout: any;
  connect: any;
  disconnect: any;
  connect(...args: any[]): any;
  disconnect(): void;
}
export class TokenProvider {
  constructor(...args: any[]);
  url: any;
  queryParams: any;
  headers: any;
  fetchToken: any;
  fetchFreshToken: any;
  cacheIsStale: any;
  cache: any;
  clearCache: any;
  setUserId: any;
  cache(e: any, t: any): void;
  cacheIsStale(): any;
  clearCache(): void;
  fetchFreshToken(): any;
  fetchToken(): any;
  setUserId(e: any): void;
}