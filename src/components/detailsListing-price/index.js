import { Divider, Rate } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDevice } from '../../hook/useDevice';

const DetailsListingPrice = () => {
    const { isTabletNew } = useDevice()

    const [num, setNum] = useState(0);

    const handleIncrement = () => {
        setNum(num + 1);
    };

    const handleDecrement = () => {
        setNum(num - 1);
    };

    return (    
        <>
        {isTabletNew ? <div className='px-4 mt-5 xl:mt-0'>
            <h1 className='text-2xl font-medium text-center'>Vách ngăn cách nhiệt 1 cánh</h1>
            <Divider style={{margin: '6px 0'}} />
            <div className='flex justify-center items-center gap-3 mt-3'>
                <Rate disabled defaultValue={4} />
                <Divider type='vertical' />
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0" /></svg>
                <p className='text-lg'>1,2k</p>
            </div>
            <Divider style={{margin: '6px 0'}} />
            <div className=' border border-black rounded-lg w-[60%] text-center px-3 py-2 text-red-500 mt-3 text-xl mx-auto'>620.000đ<span className='line-through ml-2 text-lg text-gray-500'>1.100.000đ</span> </div>
            <div className='sm:flex items-center justify-around'>
            <div className="flex items-center sm:justify-start justify-center mt-5 gap-3">
                <p className='text-lg'>Số lượng: </p>
                <div>
                    <button
                        className="bg-[#3980F1] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-tl rounded-bl"
                        onClick={handleDecrement}
                    >
                        -1
                    </button>
                    <input
                        type="text"
                        value={num}
                        readOnly
                        className="px-2 py-2 border border-gray-300  w-[50px] text-center"
                    />
                    <button
                        className="bg-[#3980F1] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-tr rounded-br"
                        onClick={handleIncrement}
                    >
                        +1
                    </button>
                </div>
            </div>
            <div className='flex items-center sm:justify-end justify-center mt-5 gap-3'>
                <button className='px-5 py-2 rounded-xl bg-red-500 text-white'>Thêm vào giỏ hàng</button>
                <button className='px-5 py-2 rounded-xl bg-[#3980F1] text-white'>Tư vấn: 0775.452.291</button>
            </div>
            </div>
           

        </div> : <div className='px-4 mt-5 xl:mt-0'>
            <h1 className='text-2xl font-medium'>Vách ngăn cách nhiệt 1 cánh</h1>
            <Divider />
            <div className='flex items-center gap-3 mt-3'>
                <Rate disabled defaultValue={4} />
                <Divider type='vertical' />
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0" /></svg>
                <p className='text-lg'>1,2k</p>
            </div>
            <Divider />
            <div className=' border border-black rounded-lg w-[60%] text-center px-3 py-2 text-red-500 mt-3 text-xl'>620.000đ<span className='line-through ml-2 text-lg text-gray-500'>1.100.000đ</span> </div>
            <div className="flex items-center mt-5 gap-3">
                <p className='text-lg'>Số lượng: </p>
                <div>
                    <button
                        className="bg-[#3980F1] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-tl rounded-bl"
                        onClick={handleDecrement}
                    >
                        -1
                    </button>
                    <input
                        type="text"
                        value={num}
                        readOnly
                        className="px-2 py-2 border border-gray-300  w-[50px] text-center"
                    />
                    <button
                        className="bg-[#3980F1] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-tr rounded-br"
                        onClick={handleIncrement}
                    >
                        +1
                    </button>
                </div>
            </div>
            <div className='flex items-center mt-5 gap-3'>

                <button className='px-5 py-2 rounded-xl bg-red-500 text-white'>Thêm vào giỏ hàng</button>
                <button className='px-5 py-2 rounded-xl bg-[#3980F1] text-white'>Tư vấn: 0775.452.291</button>
            </div>

        </div>}
        </>
    )
}

export default DetailsListingPrice
