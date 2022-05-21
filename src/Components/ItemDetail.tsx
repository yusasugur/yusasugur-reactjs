import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemObject } from '../Types/types';
const ItemDetail: React.FC = () => {
    let { id } = useParams();
    const [itemDetail, setItemDetail] = useState<ItemObject>();

    useEffect(() => {
        if (id) {
            fetch(
                'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/' +
                    id
            )
                .then((response) => response.json())
                .then((data) => setItemDetail(data));
        }
    }, [id]);

    return (
        <div className='min-h-screen text-left flex justify-center '>
            <div className='min-h-screen w-3/5 h-3/5 pt-8 '>
                {itemDetail && (
                    <div>
                        <div className='border-b-2 border-black pb-8 flex min-h-full min-w-full'>
                            <div className='rounded-xl w-44 h-54 bg-white flex justify-center items-center drop-shadow-xl p-4'>
                                <img src={itemDetail.avatar} />
                            </div>

                            <div className='pl-8'>
                                <article className='prose lg:prose-lg flex flex-col justify-center justify-between '>
                                    <h1>{itemDetail.name}</h1>
                                    <p>{itemDetail.price}$</p>
                                </article>
                            </div>
                        </div>
                        <article className='prose lg:prose-base pt-4 min-w-full'>
                            <h3 data-testid='settingsPane'>Description</h3>
                            <p>{itemDetail.description}</p>
                        </article>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
