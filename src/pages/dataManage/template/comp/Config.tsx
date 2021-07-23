import { useState, useEffect, createElement } from 'react';
import { Tabs, TabPaneProps } from 'antd';
import style from '@/styles/pages/dataManage.less';
import { RenderNode } from '@/types';
import ConfigLayout from './ConfigLayout';
import ConfigParams from './ConfigParams';

interface Props {}

interface State {}

type Tab = TabPaneProps & {
    key: string;
    tab: string;
    children: RenderNode | any;
};

const { TabPane } = Tabs;

const TabsList: Array<Tab> = [
    {
        key: 'params',
        tab: 'params',
        children: ConfigParams,
    },
    {
        key: 'layout',
        tab: 'layout',
        children: ConfigLayout,
    },
];

export default (props: Props, state: State): JSX.Element => {
    useEffect;

    return (
        <div className={style['config-content']}>
            <div className={style['hedaer']}>组件配置</div>
            <Tabs defaultActiveKey="params" tabBarGutter={40}>
                {TabsList.map((T: Tab) => (
                    <TabPane key={T.key} tab={T.tab}>
                        {createElement(T.children)}
                    </TabPane>
                ))}
            </Tabs>
        </div>
    );
};
