import { useState, useEffect, ReactNode } from 'react';
import { Popover } from 'antd';
import { ClearOutlined, SaveOutlined } from '@ant-design/icons';
import { connect, Dispatch, TemplateState } from 'umi';
import style from '@/styles/pages/dataManage.less';

type T = {
    icon: ReactNode;
    title: string;
    comment: string;
    method: Function;
};

interface Props {
    dispatch: Dispatch;
}

interface State {}

function MainOperation(props: Props, state: State): JSX.Element {
    const { dispatch } = props;

    /**
     * @description clear data
     * @date 2021-07-14
     * @returns {any}
     */
    const onClear = (): void => {
        dispatch({
            type: 'dataTemplate/clearData',
        }).then((data: TemplateState) => {
            // console.log('clear', data.template);
        });
    };

    /**
     * @description get data
     * @date 2021-07-14
     * @returns {any}
     */
    const onSave = (): void => {
        dispatch({
            type: 'dataTemplate/getData',
        }).then((data: TemplateState) => {
            //TODO
            console.log('save', data.template);
        });
    };

    const OperationList: Array<T> = [
        {
            icon: <ClearOutlined />,
            title: 'clear',
            comment: '清空',
            method: onClear,
        },
        {
            icon: <SaveOutlined />,
            title: 'save',
            comment: '保存',
            method: onSave,
        },
    ];

    return (
        <div className={style['edit-header']}>
            {OperationList.map((item: T) => (
                <Popover
                    key={item.title}
                    placement="top"
                    content={item.comment}
                >
                    <span
                        title={item.title}
                        className={style['oper-item']}
                        onClick={() => item.method()}
                    >
                        {item.icon}
                    </span>
                </Popover>
            ))}
        </div>
    );
}

const mapStateToProps = ({ dataTemplate }: { dataTemplate: TemplateState }) => {
    return {
        dataTemplate,
    };
};

export default connect(mapStateToProps)(MainOperation);
