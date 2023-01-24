
import { ComponentProps } from 'react';
import { MainContainer } from '../features';
import * as paths from './const';

interface Routes {
    common: RoutesOption[];
    super: RoutesOption[];
}

interface RoutesOption {
    path: string;
    component: React.FunctionComponent<ComponentProps<any>>;
}

export const routes: Routes = {
    common: [
        {
            path: paths.ROUTE_ROOT,
            component: MainContainer
        }
    ],
    super: []
};