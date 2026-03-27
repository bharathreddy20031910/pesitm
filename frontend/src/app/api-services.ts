import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServices {
  private baseUrl = 'http://localhost:3000'; // Backend URL

  constructor(private http: HttpClient) {}

  // Get all users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/user`);
  }

  // Create a new user
  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/user`, user);
  }

  // Update a user
  updateUser(id: string, user: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/user/${id}`, user);
  }

  // Get a single user by ID
  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/user/${id}`);
  }

  // Delete a user
  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/user/${id}`);
  }
}
