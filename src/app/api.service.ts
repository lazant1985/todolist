import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'd7d2d4a70d5b47009dcfe3b8f17c5fd2';

  constructor(private httpClient: HttpClient) { }

  public getRequestNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }

  public getRequestNBA(){
    return this.httpClient.get( '  https://api.spotify.com/v1/search');
  }

  public getApiServer(){
    return this.httpClient.get('https://localhost:5001/api/values');
  }

  public getApiValueServer(){
    return this.httpClient.get('https://localhost:5001/api/values/2');
  }

  public postApiValueServer(){
    return this.httpClient.post('https://localhost:5001/api/values', 'value');
  }

  public putApiValueServer(){
    return this.httpClient.put('https://localhost:5001/api/values/3', 'value');
  }

  public deleteApiValueServer(){
    return this.httpClient.delete('https://localhost:5001/api/values/4');
  }
}
