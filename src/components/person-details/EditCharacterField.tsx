import React, { useState, useEffect, useRef } from 'react';

interface EditCharacterFieldProps {
    value: string;
    onChange: (value: string) => void;
}

export const EditCharacterField: React.FC<EditCharacterFieldProps> = ({ value, onChange }) => {
    const [editMode, setEditMode] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (!ref.current!.contains(e.target as Node)) {
                e.stopPropagation();
                setEditMode(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={ref} onDoubleClick={() => setEditMode(true)}>
            {editMode
                ? (
                    <input
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    />
                )
                : value
            }
        </div>
    )
}
