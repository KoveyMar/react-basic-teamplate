import { useState, useEffect } from 'react';
import { Col, Row, Button, Form, FormInstance } from 'antd';
import { SearchOutlined, RedoOutlined } from '@ant-design/icons';
import { SearchTypes as S, BtnTypes as B, Header } from '@/types';
import { FormList } from '@/components/form';
import style from '@/styles/tableList.less';

interface Props {
    header?: Header | void;
    queryTableList: Function;
}

interface State {}

const ColStyle = {
    md: 6,
    sm: 8,
};

const tralLayout = {
    labelCol: {
        // span: 6,
        md: 6,
        sm: 8,
    },
    wrapperCol: {
        // span: 18,
        md: 18,
        sm: 16,
    },
};

/**
 * @description 表头查询栏
 * @date 2021-07-09
 * @returns {any}
 */
export default (props: Props, state: State): JSX.Element => {
    const { header, queryTableList } = props;
    const [formList, setFormList] = useState<S>([]);
    const [queryBtn, setQueryBtn] = useState<B>(!0);
    const [formRef]: [FormInstance<FormInstance<any>>] =
        Form.useForm<FormInstance>();

    /**
     * @description 重置查询
     * @date 2021-07-09
     * @returns {any}
     */
    const onReset = (): void => {
        formRef.resetFields();
        queryTableList();
    };

    /**
     * @description 根据输入信息查询
     * @date 2021-07-09
     * @returns {any}
     */
    const queryByParams = (): void => {
        const parmas = formRef.getFieldsValue(!0);
        queryTableList(parmas);
    };

    /**
     * @description 初始化
     * @date 2021-07-09
     * @returns {any}
     */
    const init = (): void => {
        if (header) {
            const { Search, Btn } = header;
            Search && Search.length && setFormList(Search);
            Btn !== void 0 && setQueryBtn(Btn);
        }
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <div className={style['table-header']}>
            <Form form={formRef} layout="inline" {...tralLayout}>
                <FormList formList={formList} />
                {queryBtn !== !1 && (
                    <Col {...ColStyle}>
                        <Button
                            type="primary"
                            icon={<SearchOutlined />}
                            onClick={queryByParams}
                        >
                            查询
                        </Button>
                        <Button icon={<RedoOutlined />} onClick={onReset}>
                            重置
                        </Button>
                        {queryBtn}
                    </Col>
                )}
            </Form>
        </div>
    );
};
