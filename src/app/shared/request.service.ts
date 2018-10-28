import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, timeout } from 'rxjs/operators';

export class RequestService {
  constructor(protected _httpClient: HttpClient) {}

  protected request<T>(url: string, params?: HttpParams): Observable<T> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    const options = {
      headers: headers
    };

    if (params) {
      // @ts-ignore
      options.params = params;
    }

    return this._httpClient.get<T>(url, options).pipe(
      retry(3),
      timeout(3000)
    );
  }
}
