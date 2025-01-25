import React, { forwardRef, useId } from 'react'

function Input({
    label,
    type = 'text',
    className = '',
    ...props
}, ref) {

    const id = useId();
    return (
        <div>
            <label htmlFor={id}>
                {label}
            </label>
            <input
                type={type}
                className={`px-3 py-2 border border-black duration-200 ${className}`}
                {...props}
                ref={ref}
                id={id}
            />

        </div>
    )
}

export default forwardRef(Input)
