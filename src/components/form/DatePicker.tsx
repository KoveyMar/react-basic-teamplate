import { Component, ComponentClass } from 'react';
import { Moment } from 'moment';
import { DatePicker, TimePicker } from 'antd';
import { PickerBaseProps } from 'antd/lib/date-picker/generatePicker';

export interface Props extends PickerBaseProps<Moment> {
    isTime?: boolean;
}

interface State {}

class FormDate extends Component<Props, State> {
    public state: State = {};

    public render(): JSX.Element {
        const { isTime, ...dateProps } = this.props;
        return isTime ? (
            <TimePicker {...dateProps} />
        ) : (
            <DatePicker {...dateProps} />
        );
    }
}

export type DateFace = ComponentClass<Props, State>;

export default FormDate;
