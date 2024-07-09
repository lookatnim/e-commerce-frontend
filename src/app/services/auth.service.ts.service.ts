import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceTsService {

  constructor() { }

  public setUserRole(role : any){
    localStorage.setItem('userRole', role)
  }

  public getUserRole():any{
    return localStorage.getItem('userRole');
  }
  public setId(id: any): void {
    localStorage.setItem('id', id);
  }

  public getId(): any {
    return localStorage.getItem('id');
  }

  // First Name
  public setFirstName(firstName: any): void {
    localStorage.setItem('firstName', firstName);
  }

  public getFirstName(): any {
    return localStorage.getItem('firstName');
  }

  // Last Name
  public setLastName(lastName: any): void {
    localStorage.setItem('lastName', lastName);
  }

  public getLastName(): any {
    return localStorage.getItem('lastName');
  }

  // Username
  public setUserName(userName: any): void {
    localStorage.setItem('userName', userName);
  }

  public getUserName(): any {
    return localStorage.getItem('userName');
  }

  // Email
  public setEmail(email: any): void {
    localStorage.setItem('email', email);
  }

  public getEmail(): any {
    return localStorage.getItem('email');
  }

  // Mobile Number
  public setMobileNumber(mobileNumber: any): void {
    localStorage.setItem('mobileNumber', mobileNumber);
  }

  public getMobileNumber(): any {
    return localStorage.getItem('mobileNumber');
  }

  // Token
  public setToken(token: any): void {
    localStorage.setItem('token', token);
  }

  public getToken(): any {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.clear();
  }
}

