import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GithubService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubService {
  data: any = null;

  constructor(public http: Http) {}

  getRepos(username) {
        let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
        return repos;
    }
    
    getDetails(repo) {
        let headers = new Headers();
        headers.append('Accept','application/vnd.github.VERSION.html');
        
        return this.http.get(`${repo.url}/readme`, { headers: headers });
   }
}

