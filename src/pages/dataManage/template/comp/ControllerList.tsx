import { useEffect, ReactNode } from 'react';
import { Button, Tooltip } from 'antd';
import {
    CloudUploadOutlined,
    CheckSquareOutlined,
    ArrowDownOutlined,
    EditOutlined,
    FormOutlined,
    FieldTimeOutlined,
    CheckCircleOutlined,
} from '@ant-design/icons';
import { MouseDrag } from '@/types';
import style from '@/styles/pages/dataManage.less';

interface Props {}

interface State {}

type Controller = {
    icon: ReactNode;
    text: string;
    type: string;
    tip?: string;
};

export default (props: Props, state: State): JSX.Element => {
    const controller: Array<Controller> = [
        {
            text: '输入框',
            type: 'Input',
            icon: <EditOutlined />,
            tip: '需要用户输入表单域内容时',
        },
        {
            text: '选择框',
            type: 'Select',
            icon: <ArrowDownOutlined />,
            tip: '弹出一个下拉菜单给用户选择操作',
        },
        {
            text: '复选框',
            type: 'Checkbox',
            icon: <CheckSquareOutlined />,
            tip: '在一组可选项中进行多项选择时',
        },
        // {
        //     text: '上传',
        //     type: 'Upload',
        //     icon: <CloudUploadOutlined />,
        //     tip: '当需要上传一个或一些文件时'
        // },
        // {
        //     text: '文本域',
        //     type: 'TextArea',
        //     icon: (<FormOutlined />),
        //     tip: '用于多行输入'
        // },
        {
            text: '时间选择器',
            type: 'Date',
            icon: <FieldTimeOutlined />,
            tip: '当用户需要输入一个时间',
        },
        {
            text: '时间间隔器',
            type: 'Range',
            icon: <FieldTimeOutlined />,
            tip: '当用户需要输入从开始到结束的某一个时间段',
        },
        {
            text: '单选框',
            type: 'Radio',
            icon: <CheckCircleOutlined />,
            tip: '用于在多个备选项中选中单个状态',
        },
    ];

    /**
     * @description drag start event
     * @date 2021-07-13
     * @returns {any}
     */
    const onDragStart = (e: MouseDrag, o: Controller): void => {
        const data = JSON.stringify({
            name: o.text,
            type: o.type,
        });
        e.dataTransfer.setData('data', data);
    };

    /**
     * @description drag event
     * @date 2021-07-13
     * @returns {any}
     */
    const onDrag = (e: MouseDrag, o: Controller): void => {};

    /**
     * @description drag end event
     * @date 2021-07-13
     * @returns {any}
     */
    const onDragEnd = (e: MouseDrag, o: Controller): void => {
        e.dataTransfer.clearData();
    };

    useEffect;

    return (
        <div className={style['controller-box']}>
            <p className={style['title']}>通用组件菜单</p>
            <div className={style['controller-content']}>
                {controller.map((o: Controller, index: number) => (
                    <div className={style['controller-item']} key={index}>
                        <Tooltip placement="topLeft" title={o.tip}>
                            <Button
                                block
                                size="large"
                                icon={o.icon}
                                onClick={() => !1}
                                draggable
                                onDragStart={(e) => onDragStart(e, o)}
                                onDrag={(e) => onDrag(e, o)}
                                onDragEnd={(e) => onDragEnd(e, o)}
                            >
                                {o.text}
                            </Button>
                        </Tooltip>
                    </div>
                ))}
            </div>
        </div>
    );
};
