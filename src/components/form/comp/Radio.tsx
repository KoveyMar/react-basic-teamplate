import { Component } from 'react';
import type { ComponentClass } from 'react';
import { Radio } from 'antd';
import type { RadioProps } from 'antd/lib/radio';
import type { OptionItem, OptionSource } from '@/types';
import { distpacthOptions } from '@/utils/form.utils';

export interface Props extends RadioProps, OptionSource {
    isButton?: boolean;
    Options: Array<OptionItem>;
}

interface State {
    OptionGroup: Array<OptionItem>;
    // defalutProps: RadioProps;
}

const RGroup = Radio.Group;

const RButton = Radio.Button;

class FormRadio extends Component<Props, State> {
    public state: State = {
        OptionGroup: [],
        // defalutProps: {}
    };

    /**
     * @description 计算属性
     * @date 2021-09-02
     * @returns {any}
     */
    private init(): void {
        distpacthOptions(this.props, (IProps) => {
            const { Options } = IProps;
            this.setState({ OptionGroup: Options });
        });
    }

    public componentDidMount(): void {
        this.init();
    }

    // public shouldComponentUpdate(nextProps: any, nextState: any, nextContext: any): boolean {
    //     this.distrbutionAttr();
    //     return !0;
    // }

    public render(): JSX.Element {
        const { isButton, Options, Group, ...GProps } = this.props;
        return (
            <RGroup {...GProps}>
                {Options.map((item: OptionItem) =>
                    isButton ? (
                        <RButton
                            value={item.value}
                            key={item.value}
                            disabled={item.disabled}
                            children={item.label}
                        />
                    ) : (
                        <Radio
                            value={item.value}
                            key={item.value}
                            disabled={item.disabled}
                            children={item.label}
                        />
                    ),
                )}
            </RGroup>
        );
    }
}

export type RadioFace = ComponentClass<Props, State>;

export default FormRadio;
