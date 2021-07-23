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

function ConfigLayout(props: Props, state: State): JSX.Element {
    return <>Layout</>;
}

const mapStateToProps = ({ dataTemplate }: { dataTemplate: TemplateState }) => {
    return {
        tempData: dataTemplate.template,
    };
};

export default connect(mapStateToProps)(ConfigLayout);
