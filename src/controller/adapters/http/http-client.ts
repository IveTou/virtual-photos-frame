export interface HttpClient {
  fetch: (url: string) => Promise<any>
}