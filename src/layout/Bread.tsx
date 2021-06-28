import { Component } from 'react';
import { history } from 'umi';
import { Breadcrumb, BreadcrumbItemProps } from 'antd';
import { RouterTypes } from '@/router/router.basic';

interface Props {}

interface State {}

interface BreadRouteTypes extends RouterTypes, BreadcrumbItemProps {}

const BreadcrumbItem = Breadcrumb.Item;

class Bread extends Component<Props, State> {
    private get BreadcrumbMenu(): Array<BreadRouteTypes> {
        const {
            location: { pathname },
        } = history;
        const group = pathname.split('/');
        let U: Array<BreadRouteTypes> = [];
        let o: string[] = [];
        for (let name of group) {
            o.push(name);
            U.push({
                name,
                path: `${o.join('/')}`,
            });
        }
        return U;
    }

    public componentDidMount(): void {
        this.BreadcrumbMenu;
    }

    public componentDidUpdate(): void {
        this.BreadcrumbMenu;
    }

    public render(): JSX.Element {
        return (
            <Breadcrumb
                style={{
                    padding: '15px 20px 0',
                }}
            >
                {this.BreadcrumbMenu.map(
                    (
                        item: BreadRouteTypes,
                        index: number,
                        array: Array<BreadRouteTypes>,
                    ) => (
                        <BreadcrumbItem
                            key={index}
                            href={
                                index < array.length - 1
                                    ? `#${item.path}`
                                    : void 0
                            }
                        >
                            {item.name}
                        </BreadcrumbItem>
                    ),
                )}
            </Breadcrumb>
        );
    }
}

export default Bread;
