import React from 'react'
import { useFetchStickers } from '../../hooks/useFetchStickers';
import { StickerItem } from '../StikerItem/StickerItem';
import styled from './StickersGrid.module.css';

export const StickersGrid = ({item}) => {

    const {data: images, loading} = useFetchStickers(item);



    return (
        <>
            <h2>{item}</h2>
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}
            <div className={styled.cardGrid}>
                {
                    images.map(img => (
                        <StickerItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
