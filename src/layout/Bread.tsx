import React, { Component } from 'react';
import { Link } from 'umi';
import { Breadcrumb, BreadcrumbItemProps } from 'antd';
// import { Route } from 'antd/lib/breadcrumb/Breadcrumb'; 
import routes, { RouterTypes } from '@/router/routerBasic';

interface Props {}

interface State {}

interface BreadRouteTypes extends RouterTypes, BreadcrumbItemProps {}

const BreadcrumbItem = Breadcrumb.Item;

class Bread extends Component<Props, State> {

    private BreadcrumbMenu: Array<BreadRouteTypes> = [
        {
            path: '/',
        }
    ];

    public render():JSX.Element {
        return (
            <Breadcrumb>
            {
                this.BreadcrumbMenu.map( (item: BreadRouteTypes, index: number) => (
                        <BreadcrumbItem 
                            key={index}>
                            <Link to={item.path}></Link>
                        </BreadcrumbItem>
                    )
                )
            }
            </Breadcrumb>
        ); 
    }
}

export default Bread;
