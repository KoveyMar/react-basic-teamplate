import type { FunctionComponent } from 'react';
import { TreeSelect } from 'antd';
import type { TreeSelectProps } from 'antd/lib/tree-select';

export interface Props extends TreeSelectProps<any> {}

interface State {}

export type TreeSelectFace = FunctionComponent<any>;

export default function FormTreeSelect(props: Props): JSX.Element {
    return <TreeSelect allowClear treeDefaultExpandAll {...props} />;
}
