// auth.service.ts
    import { Injectable } from '@angular/core';
    import { BehaviorSubject, Observable } from 'rxjs';

    @Injectable({
      providedIn: 'root'
    })
    export class AuthService {
      private currentUserRoleSubject: BehaviorSubject<string | null>;
      public currentUserRole: Observable<string | null>;

      constructor() {
        // Initialize with role from local storage or null if not present
        this.currentUserRoleSubject = new BehaviorSubject<string | null>(localStorage.getItem('userRole'));
        this.currentUserRole = this.currentUserRoleSubject.asObservable();
      }

      // Method to set user role after successful login
      setUserRole(role: string): void {
        localStorage.setItem('userRole', role);
        this.currentUserRoleSubject.next(role);
      }

      // Method to check if the user is a master user
      isMasterUser(): boolean {
        return this.currentUserRoleSubject.value === 'master';
      }

      // Method to check if the user is a normal user
      isNormalUser(): boolean {
        return this.currentUserRoleSubject.value === 'normal';
      }

      // Method to clear user role on logout
      logout(): void {
        localStorage.removeItem('userRole');
        this.currentUserRoleSubject.next(null);
      }
    }