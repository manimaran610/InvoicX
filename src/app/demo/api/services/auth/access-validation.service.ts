import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessValidationService {

  constructor() { }

 public static checkUserAccess(createdBy: string): boolean {
  console.log(sessionStorage.getItem('userId'));
  console.log(createdBy);

  if(sessionStorage.getItem('userId') === undefined) return false;
  
    return (createdBy === sessionStorage.getItem('userId') as string ||
      (
        createdBy !== sessionStorage.getItem('userId') as string &&
        (
          (sessionStorage.getItem('roles')?.includes('Admin') &&  !sessionStorage.getItem('roles')?.includes('SuperAdmin'))||
          sessionStorage.getItem('roles')?.includes('Supervisor') 
          // ||
          // sessionStorage.getItem('roles')?.includes('SuperAdmin')
        )
      )) as boolean


  }

}
