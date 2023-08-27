import type { ReactNode } from 'react';
import type { TableOperationProps as Props } from '@/types';

/**
 * @description 表头操作栏按钮
 * @date 2021-07-09
 * @returns {any}
 */
export default function TableOperation(props: Props): JSX.Element {
    const { operation } = props;

    return (
        <div
            className={
                operation && operation.length > 0
                    ? 'table-operation'
                    : 'no-operation'
            }
        >
            {operation?.map((element: ReactNode, index: number) =>
                element ? <span key={index}>{element}</span> : null,
            )}
        </div>
    );
}
