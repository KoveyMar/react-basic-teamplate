import { ReactNode } from 'react';
import type { Operation } from '@/types';
import style from '@/styles/tableList.less';

interface Props {
    operation: Operation | void;
}

interface State {}

/**
 * @description 表头操作栏按钮
 * @date 2021-07-09
 * @returns {any}
 */
export default (props: Props): JSX.Element => {
    const { operation } = props;

    return (
        <div
            className={
                operation && operation.length > 0
                    ? style['table-operation']
                    : style['no-operation']
            }
        >
            {operation?.map((element: ReactNode, index: number) =>
                element ? <span key={index}>{element}</span> : null,
            )}
        </div>
    );
};
