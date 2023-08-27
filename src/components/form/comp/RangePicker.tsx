import { Component } from 'react';
import type { ComponentClass } from 'react';
import { DatePicker } from 'antd';
import type { RangePickerProps } from 'antd/lib/date-picker/index';
import type { PickerRef } from 'antd/lib/date-picker/generatePicker/interface';

export type Props = {} & RangePickerProps;

export type DateRangeFace = ComponentClass<Props, State>;

type Instance = PickerRef<Props> | any;

interface State {}

const RangePicker: Instance = DatePicker.RangePicker;

export default class FormRangeDate extends Component<Props, State> {
    public state: State = {};

    public render(): JSX.Element {
        return <RangePicker {...this.props} />;
    }
}
