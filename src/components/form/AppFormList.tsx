import { memo, useContext } from 'react';
import WrapperContext from '@/context/WrapperContext';
import type { FormListRefProps, FormListRefState } from '@/types';
import AppFormCol from './AppFormCol';

/**
 * @function
 * @description form list basic
 * @returns {PureComponent}
 */
function AppFormList(props: FormListRefProps): JSX.Element {
    const { formList } = props;

    const context = useContext(WrapperContext);

    return (
        <>
            {formList?.map((item, index) => (
                <AppFormCol key={index} {...item} {...context} />
            ))}
        </>
    );
}
export default memo(AppFormList);
