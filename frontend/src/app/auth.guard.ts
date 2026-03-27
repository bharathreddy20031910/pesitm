import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    // AuthGuard is no longer required; allow all navigation to CRUD pages.
    return true;
  }
}