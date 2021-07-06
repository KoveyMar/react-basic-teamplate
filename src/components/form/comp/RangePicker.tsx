import { Component, ComponentClass } from 'react';
import { Moment } from 'moment';
import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/lib/date-picker/generatePicker';

export type Props = {} & RangePickerProps<Moment>;

interface State {}

const { RangePicker } = DatePicker;

class FormRangeDate extends Component<Props, State> {
    public state: State = {};

    public render(): JSX.Element {
        return <RangePicker {...this.props} />;
    }
}

export type DateRangeFace = ComponentClass<Props, State>;

export default FormRangeDate;
