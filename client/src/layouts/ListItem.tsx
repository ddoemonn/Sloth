import React from 'react';

interface ListItemProps {
    text: string;
    isActive: boolean;
    onClick: () => void;
}
const ListItem: React.FC<ListItemProps> = ({ text, isActive, onClick }) => {
    return (
        <>
        {isActive ? (
            <li className='underline  underline-offset-4 cursor-pointer mt-2' onClick={onClick}>{text}</li>
        ) : (
            <li className='cursor-pointer mt-2' onClick={onClick}>{text}</li>
        )}
        </>

    );
};

export default ListItem;
