import { Component } from 'react';
import { history } from 'umi';
import { Breadcrumb } from 'antd';
import type { BreadcrumbItemProps } from 'antd/lib/breadcrumb';
import { HomeOutlined } from '@ant-design/icons';
import type { RouterTypes } from '@/types/router';

interface Props {}

interface State {}

interface BreadRouteTypes extends RouterTypes, BreadcrumbItemProps {}

const BreadcrumbItem = Breadcrumb.Item;

class AppBread extends Component<Props, State> {
    private get BreadcrumbMenu(): Array<BreadRouteTypes> {
        const {
            location: { pathname },
        } = history;
        const group = pathname.split('/');
        let U: Array<BreadRouteTypes> = [];
        let o: string[] = [];
        for (const name of group) {
            if (!name) continue;
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
                    padding: '10px 40px',
                }}
            >
                <Breadcrumb.Item href="#home">
                    <HomeOutlined />
                </Breadcrumb.Item>
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
                                    ? `${item.path}`
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

export default AppBread;
