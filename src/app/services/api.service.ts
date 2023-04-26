import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface User {
  name: string;
  job: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers(page: string) {
    return this.httpClient.get<User[]>(`https://reqres.in/api/users?page=${page}`)
  }

  createUser(body: User) {
    return this.httpClient.post('https://reqres.in/api/users?page=2', body)
  }
}
