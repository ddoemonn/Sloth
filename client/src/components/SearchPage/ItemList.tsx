import React from 'react';
import { IItem } from '../../types/type';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ItemsLayout from '../../layouts/ItemsLayout';

export default function ItemList() {
    const items: IItem[] = useSelector((state: RootState) => state.Items.items);

    return (
        <ItemsLayout items={items} />
    );
}

