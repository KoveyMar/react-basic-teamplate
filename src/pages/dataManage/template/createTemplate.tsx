import { useEffect, createElement } from 'react';
import { Row, Col } from 'antd';
import style from '@/styles/normal.less';
import { RenderNode } from '@/types';
import ControllerList from './comp/ControllerList';
import Main from './comp/Main';
import BasicModal from '@/components/modal';
import Config from './comp/Config';

interface Props {
    children?: RenderNode;
    title?: string;
}

interface State {}

type Item = {
    span: number;
    Comp?: string | RenderNode | any;
    props?: any;
};

export default (props: Props, state: State): JSX.Element => {
    const { clientWidth: width, clientHeight: height } = window.document.body;
    const { children, title } = props;

    const CompList: Array<Item> = [
        {
            span: 4,
            Comp: ControllerList,
        },
        {
            span: 15,
            Comp: Main,
            props: { height },
        },
        {
            span: 5,
            Comp: Config,
        },
    ];

    useEffect;

    return (
        <BasicModal
            btn={children}
            modalProps={{
                title: title || '新增模板',
                footer: null,
                width,
                style: {
                    top: '10px',
                },
            }}
        >
            <div id="create-template-DG" style={{ height: height * 0.85 }}>
                <Row className={`${style['HGT-100']} ${style['BD-normal']}`}>
                    {CompList.map((item: Item, index: number) => (
                        <Col
                            key={index}
                            span={item.span}
                            className={style['HGT-100']}
                        >
                            {createElement(item.Comp, item.props, null)}
                        </Col>
                    ))}
                </Row>
            </div>
        </BasicModal>
    );
};
