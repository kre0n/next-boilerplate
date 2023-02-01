import {PropsWithChildren} from 'react';

interface ButtonProps {

}

export function Button({
    children
}: PropsWithChildren<ButtonProps>) {
    return <button>
        {children}
    </button>
}
