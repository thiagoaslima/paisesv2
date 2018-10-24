import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

import { IRouterStateUrl } from '@root/store/reducers';

export class CustomRouterSerializer
  implements RouterStateSerializer<IRouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let data = {};
    let state: ActivatedRouteSnapshot = routerState.root;

    do {
      data = state.data ? {...data, ...state.data} : data;
      state = state.firstChild;
    } while (state.firstChild);

    const { params } = state;

    return { url, queryParams, params, data };
  }
}
