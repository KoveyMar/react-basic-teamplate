import { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import type { ForwardedRef } from 'react';
import { Col, Button, Form } from 'antd';
import { SearchOutlined, RedoOutlined } from '@ant-design/icons';
import type {
    MouseClick,
    TableHeaderProps as Props,
    TableHeaderState as State,
} from '@/types';
import { FormList } from '@/components/form';

const ColStyle = {
    md: 6,
    sm: 8,
};

const trailLayout = {
    labelCol: {
        md: 6,
        sm: 8,
    },
    wrapperCol: {
        md: 16,
        sm: 8,
    },
};

/**
 * @function JSX
 * @description 表头查询栏
 * @date 2021-07-09
 * @returns {JSX.Element}
 */
function TableHeader(props: Props, ref: ForwardedRef<any>): JSX.Element {
    const { header, queryTableList, notFuzzy, tablePage } = props;
    const [formList, setFormList] = useState<State['formList']>([]);
    const [queryBtn, setQueryBtn] = useState<State['queryBtn']>(!0);
    const [formRef] = Form.useForm<any>();

    /**
     * @description 重置查询
     * @date 2021-07-09
     * @param {MouseClick}  e
     * @returns {void}
     */
    function onReset(e: MouseClick): void {
        e.stopPropagation();
        formRef.resetFields();
        queryTableList({ current: 1 });
    }

    /**
     * @description 根据输入信息查询
     * @date 2021-07-09
     * @param {MouseClick}  e
     * @returns {void}
     */
    function getQueryByParams(e: MouseClick): void {
        e.stopPropagation();
        const { pageSize: size } = tablePage;
        const params = {
            current: 1,
            size,
        };
        queryTableList(params);
    }

    /**
     * @description 初始化
     * @date 2021-07-09
     * @returns {void}
     */
    function init(): void {
        if (header) {
            const { Search, SearchButton } = header;
            Search && Search.length && setFormList(Search);
            SearchButton !== void 0 && setQueryBtn(SearchButton);
        }
    }

    /**
     * @description 模糊查询加上 * value *
     * @date 2021-09-24
     * @param {any} data 默认获取表单值
     * @returns {any}
     */
    function getFuzzy<R = any>(data: any = formRef.getFieldsValue(!0)): R {
        let NData: any = {};
        for (const v of Object.keys(data)) {
            NData[v] =
                notFuzzy && notFuzzy.length && notFuzzy.indexOf(v) > -1
                    ? data[v]
                    : `*${data[v]}*`;
        }
        return NData;
    }

    useEffect(() => {
        init();
    }, [header]);

    useImperativeHandle(ref, () => ({
        getFuzzy,
    }));

    return (
        <>
            <div className={formList.length ? 'table-header' : void 0}>
                <Form form={formRef} layout="inline" {...trailLayout}>
                    {formList.length ? (
                        <>
                            <FormList formList={formList} />
                            {queryBtn !== !1 && (
                                <Col {...ColStyle}>
                                    <Button
                                        type="primary"
                                        icon={<SearchOutlined />}
                                        onClick={getQueryByParams}
                                        children={'查询'}
                                    />
                                    <Button
                                        icon={<RedoOutlined />}
                                        onClick={onReset}
                                        children={'重置'}
                                    />
                                    {queryBtn}
                                </Col>
                            )}
                        </>
                    ) : null}
                </Form>
            </div>
        </>
    );
}

export default forwardRef(TableHeader);
