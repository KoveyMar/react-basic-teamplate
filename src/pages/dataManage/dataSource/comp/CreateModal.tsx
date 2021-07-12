import { FC, ComponentClass, ReactNode } from 'react';
import BasicModal from '@/components/modal/BasicModal';

interface Props {
    children?: FC | ComponentClass | ReactNode;
}

interface State {}

export default (props: Props, state: State): JSX.Element => {
    const { children } = props;

    const onOk = (close: any): void => {
        alert(1);
        close();
    };

    const onCancel = (): void => {
        alert(2);
    };

    return (
        <BasicModal
            btn={children}
            modalProps={{
                title: 'alert',
                onOk,
                onCancel,
            }}
        >
            <p>1</p>
            <p>2</p>
            <p>3</p>
        </BasicModal>
    );
};
