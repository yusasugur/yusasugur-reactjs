import React, { useEffect, useState } from 'react';
import { ItemObject, CategoryObject } from '../Types/types';
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
    const navigate = useNavigate();

    const [itemList, setItemList] = useState<ItemObject[]>([]);
    const [categoryList, setCategoryList] = useState<CategoryObject[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<String>('');

    useEffect(() => {
        fetch(
            'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/'
        )
            .then((response) => response.json())
            .then((data) => setItemList(data));
    }, []);
    useEffect(() => {
        fetch(
            'https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/'
        )
            .then((response) => response.json())
            .then((data) => setCategoryList(data));
    }, []);
    return (
        <div className='p-8 min-h-screen flex justify-center items-center flex-col '>
            <div className=' w-3/5 flex justify-around items-center'>
                {categoryList.length > 0 &&
                    categoryList.map((category) => {
                        return (
                            <span
                                key={category.id}
                                className={`px-4 py-2 rounded-full border  border-gray-300  font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease ${
                                    category.name === selectedCategory
                                        ? 'bg-sky-500/50 text-white'
                                        : 'text-gray-500'
                                }`}
                                onClick={() =>
                                    setSelectedCategory(category.name)
                                }
                            >
                                {category.name}
                            </span>
                        );
                    })}
                <span
                    className={`px-4 py-2 rounded-full border  border-gray-300  font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease ${
                        '' === selectedCategory
                            ? 'bg-sky-500/50 text-white'
                            : 'text-gray-500'
                    }`}
                    onClick={() => setSelectedCategory('')}
                >
                    All
                </span>
            </div>

            <div className='min-h-screen w-3/5 h-3/5 grid grid-cols-4 gap-4 pt-8 justify-items-center'>
                {itemList.length > 0 &&
                    itemList
                        .filter(
                            (item: ItemObject) =>
                                (selectedCategory &&
                                    selectedCategory === item.category) ||
                                !selectedCategory
                        )
                        .map((item: ItemObject) => {
                            return (
                                <div key={item.id} className='w-36'>
                                    <div
                                        className='rounded-xl w-36 h-48 bg-white flex justify-center items-center drop-shadow-xl
                                transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300
                                cursor-pointer
                                '
                                        onClick={() => navigate('/' + item.id)}
                                    >
                                        <img
                                            className='w-4/5 h-4/5  rounded-xl'
                                            src={item.avatar}
                                        />
                                    </div>
                                    <p className='pt-2'>{item.name}</p>
                                    <p>{item.price}$</p>
                                </div>
                            );
                        })
                        .reverse()}
            </div>
            <button
                className='fixed bottom-0 right-0 p-8'
                onClick={() => {
                    navigate('/add');
                }}
            >
                <AddCircleOutlineIcon />
            </button>
        </div>
    );
};

export default MainPage;

function AddCircleOutlineIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox='0 0 512 512'
            fill='currentColor'
            height='100px'
            width='100px'
            {...props}
        >
            <path
                fill='none'
                stroke='currentColor'
                strokeMiterlimit={10}
                strokeWidth={32}
                d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z'
            />
            <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={32}
                d='M256 176v160M336 256H176'
            />
        </svg>
    );
}
