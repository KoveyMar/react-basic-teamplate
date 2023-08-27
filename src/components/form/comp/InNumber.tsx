import type { FunctionComponent } from 'react';
import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd/lib/input-number';

export interface Props extends InputNumberProps {}

export type InNumberFace = FunctionComponent<Props>;

export default function FormInNumber(props: Props): JSX.Element {
    return <InputNumber {...props} />;
}
