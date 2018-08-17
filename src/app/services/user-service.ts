import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../users/user';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Array<User>> {
    return this.http.get<Array<User>>(
      'http://localhost:8080/users', {observe: 'body'}
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post('http://localhost:8080/addUser', user);
  }
}
