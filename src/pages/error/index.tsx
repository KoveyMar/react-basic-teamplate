import { Component } from 'react';
import { Link, connect, ConnectProps, Dispatch, ErrorTypes } from 'umi';
import { Result, Button } from 'antd';

interface Props extends ConnectProps {
    error: ErrorTypes;
    dispatch: Dispatch;
}

interface State {
    info?: string;
}

class Error extends Component<Props, State> {
    private HomeBtn: JSX.Element = (
        <Button type="primary" key="Home">
            <Link to="/home">Go Home</Link>
        </Button>
    );

    public state: State = {
        info: 'Please check and modify the following information before resubmitting.',
    };

    public componentDidMount(): void {}

    public render(): JSX.Element {
        const { info } = this.state;
        const {
            error: { code, message },
        } = this.props;
        return (
            <Result
                status="error"
                title={`Submission Failed: ${code} - ${message}`}
                subTitle={info}
                extra={this.HomeBtn}
            />
        );
    }
}

const mapStateToProps = ({ error }: { error: ErrorTypes }) => {
    return {
        error,
    };
};

export default connect(mapStateToProps)(Error);
