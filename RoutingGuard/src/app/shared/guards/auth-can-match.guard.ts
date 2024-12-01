import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const authCanMatchGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  console.log('inside authTwoGuard');
  return token ? true : router.navigateByUrl('/login');
};
