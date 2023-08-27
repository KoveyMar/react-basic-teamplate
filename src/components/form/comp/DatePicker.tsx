import { Component } from 'react';
import type { ComponentClass } from 'react';
import moment, { Moment } from 'moment';
import { DatePicker, TimePicker } from 'antd';
import type { PickerBaseProps } from 'antd/lib/date-picker/generatePicker';
import type { PickerRef } from 'antd/es/date-picker/generatePicker/interface';

export interface Props extends PickerBaseProps<Moment> {
    isTime?: boolean;
}

interface State {}

type Instance = PickerRef<Props> | any;

const DateInstance: Instance = DatePicker;

class FormDate extends Component<Props, State> {
    public state: State = {};

    public render(): JSX.Element {
        const { isTime, ...dateProps } = this.props;
        return isTime ? (
            <TimePicker {...dateProps} />
        ) : (
            <DateInstance {...dateProps} />
        );
    }
}

export type DateFace = ComponentClass<Props, State>;

export default FormDate;
