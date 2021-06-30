import { Component, ComponentClass } from 'react';
import { Radio, RadioProps } from 'antd';

type D = {
    label: string;
    value: string;
    checked?: boolean;
};

export interface Props extends RadioProps {
    isButton?: boolean;
    options: Array<D>;
}

interface State {}

const Group = Radio.Group;

const RButton = Radio.Button;

class FormRadio extends Component<Props, State> {
    public state: State = {};

    public render(): JSX.Element {
        const { isButton, options, ...GProps } = this.props;
        return (
            <Group {...GProps}>
                {options.map((item: D) =>
                    isButton ? (
                        <RButton value={item.value} key={item.value}>
                            {item.label}
                        </RButton>
                    ) : (
                        <Radio value={item.value} key={item.value}>
                            {item.label}
                        </Radio>
                    ),
                )}
            </Group>
        );
    }
}

export type RadioFace = ComponentClass<RadioProps, any>;

export default FormRadio;
