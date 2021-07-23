import { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { Row, Col, Button, Form, Empty } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import {
    connect,
    Dispatch,
    TemplateState,
    SortItemFace,
    TempList as List,
} from 'umi';
import { FormCol } from '@/components/form/FormList';
import { FormSingleProps, FormItemCol, MouseDrag } from '@/types';
import { getRandomValue } from '@/utils/RandomValue';
import style from '@/styles/pages/dataManage.less';
import normalStyle from '@/styles/normal.less';
import MainOperation from './MainOperation';

type CMProps = {
    [keys: string]: FormSingleProps;
};

interface Props {
    dispatch: Dispatch;
    tempData: List;
    height?: number;
}

interface State {}

const TrailLayout: FormItemCol = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 20,
    },
};

const ComponentProps: CMProps = {
    Input: {
        NodeProps: {
            placeholder: '请输入内容',
        },
    },
    Select: {
        NodeProps: {
            placeholder: '请选择内容',
        },
    },
    Checkbox: {
        NodeProps: {
            defaultValue: 'Alpha',
            Options: [
                { value: 'Alpha', label: 'Alpha' },
                { value: 'Beta', label: 'Beta' },
            ],
        },
    },
    Upload: {},
    Radio: {
        NodeProps: {
            defaultValue: 'Alpha',
            Options: [
                { value: 'Alpha', label: 'Alpha' },
                { value: 'Beta', label: 'Beta' },
            ],
        },
    },
};

const dragOptions = {
    animation: 200,
    group: 'description',
    disabled: !1,
    ghostClass: style['sort-item-active'],
};

function Main(props: Props, state: State): JSX.Element {
    const { dispatch, tempData, height } = props;
    const [dragAble, setDragAble] = useState<boolean>(!1);

    /**
     * @description onDragOver Event
     * @date 2021-07-13
     * @param {any} e:MouseDrag
     * @returns {any}
     */
    const onDragOver = (e: MouseDrag): void => {
        e.preventDefault();
        e.stopPropagation();
    };

    /**
     * @description onDrop Event
     * @date 2021-07-13
     * @param {any} e:MouseDrag
     * @returns {any}
     */
    const onDrop = (e: MouseDrag): void => {
        e.stopPropagation();
        e.preventDefault();
        if (dragAble) return;
        const { type, name } = JSON.parse(e.dataTransfer.getData('data'));
        const R = new Date().toISOString();
        let data = {
            type,
            name,
            id: `${getRandomValue()}_${R}`,
        };
        dispatch({
            type: 'dataTemplate/singleUpdate',
            payload: data,
        });
    };

    /**
     * @description 拖拽排序后提交到model
     * @date 2021-07-14
     * @param {any} data:List
     * @returns {any}
     */
    const onBatch = (data: List): void => {
        //??? 拖拽排序后莫名其妙多出的空数据，filter过滤
        // if (dragAble) return;
        const filters = data.filter(
            (a: SortItemFace) => a.type?.trim().length !== 0,
        );
        dispatch({
            type: 'dataTemplate/batchUpdate',
            payload: filters,
        });
    };

    /**
     * @description 单个删除
     * @date 2021-07-15
     * @param {any} item:SortItemFace
     * @returns {any}
     */
    const onDeleteById = (item: SortItemFace): void => {
        dispatch({
            type: 'dataTemplate/singleDelete',
            payload: item,
        });
    };

    return (
        <main
            className={style['main-edit-area']}
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
            <MainOperation />
            <Form {...TrailLayout}>
                <div
                    className={style['edit-content']}
                    style={{
                        height: `${height ? height * 0.8 : 700}px`,
                    }}
                >
                    {tempData.length > 0 ? (
                        <ReactSortable
                            list={tempData}
                            setList={onBatch}
                            onStart={() => setDragAble(!0)}
                            onEnd={() => setDragAble(!1)}
                            {...dragOptions}
                        >
                            {tempData.map((item: any) => (
                                <div
                                    key={item.id}
                                    className={style['sort-item']}
                                >
                                    <Row gutter={18}>
                                        <Col
                                            span={22}
                                            className={style['parent-content']}
                                        >
                                            <div
                                                className={style['abs-content']}
                                            ></div>
                                            <FormCol
                                                {...ComponentProps[item.type]}
                                                LabelProps={{
                                                    label: item.name,
                                                    className:
                                                        normalStyle['MG-0'],
                                                }}
                                                component={item.type}
                                            />
                                        </Col>
                                        <Col span={2}>
                                            <Button
                                                disabled={dragAble}
                                                className={style['del-btn']}
                                                type="link"
                                                icon={<DeleteOutlined />}
                                                onClick={() =>
                                                    onDeleteById(item)
                                                }
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </ReactSortable>
                    ) : (
                        <Empty
                            description={`无组件\n从组件菜单选择一个组件\n拖拽至此`}
                        />
                    )}
                </div>
            </Form>
        </main>
    );
}

const mapStateToProps = ({ dataTemplate }: { dataTemplate: TemplateState }) => {
    return {
        tempData: dataTemplate.template,
    };
};

export default connect(mapStateToProps)(Main);
