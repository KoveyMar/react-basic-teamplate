import { useEffect, useState } from 'react';
import type { FunctionComponent } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxGroupProps, CheckboxOptionType } from 'antd/lib/checkbox';
import type { OptionItem, OptionSource } from '@/types';
import { distpacthOptions } from '@/utils/form.utils';

export interface Props extends CheckboxGroupProps, OptionSource {
    Options: Array<OptionItem>;
}

interface State {
    OptionsList: Array<CheckboxOptionType>;
    // deafultProps: CheckboxGroupProps;
}

const { Group: CheckGroup } = Checkbox;

export type CheckboxFace = FunctionComponent<Props>;

export default function FormCheckbox(props: Props): JSX.Element {
    const { Group, ...deafultProps } = props;
    const [OptionsList, setOptionsList] = useState<State['OptionsList']>([]);

    /**
     * @description 计算Option
     * @date 2021-11-18
     * @returns {any}
     */
    function init(): void {
        distpacthOptions(props, (IProps) => {
            const { Options } = IProps;
            setOptionsList(Options);
        });
    }

    useEffect(() => {
        init();
    }, [Group]);

    return <CheckGroup {...deafultProps} options={OptionsList} />;
}
