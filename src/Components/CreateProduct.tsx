import React, { useEffect, useState } from 'react';
import { CategoryObject } from '../Types/types';
import { useNavigate } from 'react-router-dom';

const CreateProduct: React.FC = () => {
    const [categoryList, setCategoryList] = useState<CategoryObject[]>([]);

    const [productName, setProductName] = useState<String>();
    const [productDescription, setProductDescription] = useState<String>();
    const [productImageUrl, setProductImageUrl] = useState<String>();
    const [productCategory, setProductCategory] = useState<String>();
    const [productPrice, setProductPrice] = useState<Number>();
    const [developerEmail, setDeveloperEmail] = useState<String>(
        'yusasugur@protonmail.com'
    );

    const navigate = useNavigate();

    useEffect(() => {
        fetch(
            'https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/'
        )
            .then((response) => response.json())
            .then((data) => setCategoryList(data));
    }, []);

    const handleSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: productName,
                price: productPrice,
                avatar: productImageUrl,
                category: productCategory,
                developerEmail: developerEmail,
                description: productDescription,
            }),
        };

        fetch(
            'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products',
            requestOptions
        )
            .then((response) => response.json())
            .then(() => navigate('/'));
    };

    return (
        <div className='p-8 min-h-screen flex pt-20 items-center flex-col '>
            <div>
                <article className='prose lg:prose-xl'>
                    <h1>Create Product</h1>
                </article>
                <div className='block p-6 rounded-lg max-w-sm pt-20'>
                    <form>
                        <div className='form-group mb-6'>
                            <input
                                className='form-control
                                            block
                                            w-full
                                          px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                placeholder='Product Name'
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </div>
                        <div className='form-group mb-6'>
                            <textarea
                                className='
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      '
                                placeholder='Description'
                                onChange={(e) =>
                                    setProductDescription(e.target.value)
                                }
                            ></textarea>
                        </div>

                        <div className='form-group mb-6'>
                            <input
                                className='form-control block
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                placeholder='Image URL'
                                onChange={(e) =>
                                    setProductImageUrl(e.target.value)
                                }
                            />
                        </div>
                        <div className='form-group mb-6'>
                            <select
                                className='form-select appearance-none
                                            block
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding bg-no-repeat
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                aria-label='Default select example'
                                onChange={(e) =>
                                    setProductCategory(e.target.value)
                                }
                            >
                                <option hidden>Click for categories</option>
                                {categoryList.length > 0 &&
                                    categoryList.map((item: CategoryObject) => {
                                        return (
                                            <option value={item.name}>
                                                {item.name}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className='form-group mb-6'>
                            <input
                                className='form-control block
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                placeholder='Prices'
                                onChange={(e) =>
                                    setProductPrice(parseInt(e.target.value))
                                }
                            />
                        </div>
                        <div className='form-group mb-6'>
                            <button
                                className='
                                    w-full
                                    px-6
                                    py-2.5
                                    bg-white
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    rounded
                                    shadow-md
                                 '
                                onClick={(e) => handleSubmit(e)}
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateProduct;
