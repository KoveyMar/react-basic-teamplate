import { Component, ComponentClass } from 'react';
import { Select, SelectProps } from 'antd';
import { OptionItem } from '@/types/form';

type O = OptionItem & {};

export interface Props extends SelectProps<any> {
    Options?: Array<O>;
}

interface State {}

const Option = Select.Option;

class FormSelect extends Component<Props, State> {
    public state: State = {};

    public render(): JSX.Element {
        const { Options, ...defaultProps } = this.props;
        return (
            <>
                <Select {...defaultProps}>
                    {Options &&
                        Options.map((item: O, index: number) => (
                            <Option
                                value={item.value}
                                title={item.value}
                                key={item.value}
                            >
                                {item.label}
                            </Option>
                        ))}
                </Select>
            </>
        );
    }
}

export type SelectFace = ComponentClass<any, any>;

export default FormSelect;
