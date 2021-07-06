import { Component, ComponentClass } from 'react';
import { Radio, RadioProps } from 'antd';
import { OptionItem } from '@/types/form';

type D = OptionItem & {
    checked?: boolean;
};

export interface Props extends RadioProps {
    isButton?: boolean;
    Options: Array<D>;
}

interface State {}

const Group = Radio.Group;

const RButton = Radio.Button;

class FormRadio extends Component<Props, State> {
    public state: State = {};

    public render(): JSX.Element {
        const { isButton, Options, ...GProps } = this.props;
        return (
            <Group {...GProps}>
                {Options.map((item: D) =>
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

export type RadioFace = ComponentClass<Props, State>;

export default FormRadio;
