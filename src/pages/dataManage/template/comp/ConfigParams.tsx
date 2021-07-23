import { useState, useEffect } from 'react';
import {
    connect,
    ConnectProps,
    Dispatch,
    TemplateState,
    TempList as List,
} from 'umi';

interface Props extends ConnectProps {
    dispatch: Dispatch;
    tempData: List;
}

interface State {}

function ConfigParams(props: Props, state: State): JSX.Element {
    return <>Params</>;
}

const mapStateToProps = ({ dataTemplate }: { dataTemplate: TemplateState }) => {
    return {
        tempData: dataTemplate.template,
    };
};

export default connect(mapStateToProps)(ConfigParams);
