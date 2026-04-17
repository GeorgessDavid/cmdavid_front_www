'use client';


import { useState } from 'react';

type Option = {
    value: string;
    label: string;
}

interface SelectProps {
    // className: string;
    options: Option[];
    value: string;
    defaultValue?: string;
    placeholder?: string;
    onChange: (value: string) => void;
}

const Select = ({ options, value, defaultValue, placeholder, onChange }: SelectProps) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className={`relative w-full bg-surface-container-highest border-0 focus:outline-none ${open ? 'rounded-b-none rounded-t-full' : 'rounded-full'} focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-high transition-all duration-300 cursor-pointer`}>
            <div onClick={toggleOpen} className={`py-4 flex justify-between items-center  pl-4 pr-10 w-full`}>
                <span className="text-on-surface-variant text-base">{options.find((option) => option.value === value)?.label || placeholder || defaultValue}</span>
                <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-base">{open ? 'expand_less' : 'expand_more'}</span>
            </div>
            <div className={`${open ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-surface-container-highest border-0 focus:outline-none rounded-b-full focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-high transition-all duration-300 cursor-pointer`}>
                {options.map((option) => (
                    <div key={option.value} onClick={() => { onChange(option.value); toggleOpen(); }} className="py-4 flex justify-between items-center pl-4 pr-10 w-full hover:bg-surface-container-high last:rounded-b-full group">
                        <span className="text-on-surface-variant text-base group group-hover:text-primary">{option.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Select;