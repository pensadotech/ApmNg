import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

export const ProductDetailGuard = (route: ActivatedRouteSnapshot) => {

      const router = inject(Router);

      console.log('GUARD-ID:',route.paramMap.get('id'));

      const id = Number(route.paramMap.get('id'));

      if (isNaN(id) || id < 1) {
        alert('Invalid product Id');  // alert is for DEMO, should navigate to an error page
        router.navigate(['/products']);
        return false;
      }

    return true;
}
