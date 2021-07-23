import { Component, ComponentClass } from 'react';
import { Select, SelectProps } from 'antd';
import { OptionItem } from '@/types/form';

type O = OptionItem & {};

export interface Props extends SelectProps<any> {
    Options?: Array<O>;
    Group?: {
        Value: string;
        Label: string;
        Source: Array<any>;
    };
}

interface State {
    OptionGroup: Array<O>;
    defaultProps: SelectProps<any>;
}

const Option = Select.Option;

class FormSelect extends Component<Props, State> {
    /**
     * @description 分发属性
     * @date 2021-07-23
     * @returns {any}
     */
    private distrbutionAttr = (): void => {
        const { Options, Group, ...defaultIP } = this.props;
        const IP = { defaultProps: defaultIP };
        if (Options) return this.setState({ OptionGroup: Options, ...IP });
        if (Group) {
            const { Value, Label, Source } = Group;
            let j: Array<any> = [];
            Source &&
                Source.map((V: any) => {
                    j.push({
                        label: V[Label],
                        value: V[Value],
                    });
                });
            this.setState({ OptionGroup: j, ...IP });
        }
    };

    public state: State = {
        OptionGroup: [],
        defaultProps: {},
    };

    public componentDidMount(): void {
        this.distrbutionAttr();
    }

    public render(): JSX.Element {
        const { OptionGroup, defaultProps } = this.state;
        return (
            <>
                <Select {...defaultProps}>
                    {OptionGroup.map((item: O, index: number) => (
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
