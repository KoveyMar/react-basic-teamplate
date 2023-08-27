import { useEffect, isValidElement } from 'react';
import type { FunctionComponent } from 'react';
import { Input } from 'antd';
import type { GroupProps } from 'antd/lib/input';
import type { RenderNode, FormListProps, FormItemTypes } from '@/types';
import { FormCol } from '../FormList';

export interface Props extends GroupProps {
    children: FormListProps | RenderNode | RenderNode[];
}

interface State {}

const { Group: InGroup } = Input;

export type InGroupFace = FunctionComponent<Props>;

export default function FormInGroup(props: Props): JSX.Element {
    const { children, ...IProps } = props;

    /**
     * @description children support FormListProps
     * @date 2021-12-15
     * @returns {any}
     */
    function getChild(): any {
        return Array.isArray(children)
            ? children.map((props: FormItemTypes | RenderNode, key: number) =>
                  isValidElement(props) ? (
                      props
                  ) : (
                      <FormCol key={key} {...props} noStyle={!0} />
                  ),
              )
            : children;
    }

    // useEffect;

    return <InGroup compact {...IProps} children={getChild()} />;
}
