import { useEffect, useState } from 'react';
import type { FunctionComponent, OptgroupHTMLAttributes } from 'react';
import { Select } from 'antd';
import type { BaseOptionType, SelectProps } from 'antd/lib/select';
import type { OptionItem, OptionSource } from '@/types';
import { distpacthOptions } from '@/utils/form.utils';

interface OptGroupProps extends OptgroupHTMLAttributes<any> {
    options: Array<OptionItem>;
}

export interface Props extends SelectProps<any, BaseOptionType>, OptionSource {
    Options?: Array<OptionItem>;
    OptGroup?: Array<OptGroupProps>;
}

interface State {
    OptionGroup: Array<OptionItem>;
}

const { Option, OptGroup: OptGroupFC } = Select;

export type SelectFace = FunctionComponent<Props>;

export default function FormSelect(props: Props): JSX.Element {
    const { Group, Options, OptGroup, ...SProps } = props;
    const [OptionGroup, setOptionGroup] = useState<State['OptionGroup']>([]);

    /**
     * @description 计算Options
     * @date 2021-10-13
     * @returns {any}
     */
    function init(): void {
        distpacthOptions(props, (IProps) => {
            const { Options } = IProps;
            setOptionGroup(Options);
        });
    }

    /**
     * @description 生成 Options Element
     * @date 2022-10-28
     * @param {any} OptionsSource:State['OptionGroup']
     * @returns {any}
     */
    function createOptions(OptionsSource: State['OptionGroup']): JSX.Element {
        return (
            <>
                {OptionsSource.map((item: OptionItem, index: number) => (
                    <Option
                        value={item.value}
                        title={item.value}
                        key={item.value}
                        disabled={item.disabled ?? !1}
                        children={item.label}
                    />
                ))}
            </>
        );
    }

    useEffect(() => {
        init();
    }, [Group]);

    return (
        <Select {...SProps}>
            {OptGroup
                ? OptGroup.map((opt: OptGroupProps) => (
                      <OptGroupFC
                          label={opt.label}
                          key={opt.label}
                          children={createOptions(opt.options)}
                      />
                  ))
                : createOptions(OptionGroup)}
        </Select>
    );
}
