import React from 'react'
import useBillboard from '@/hooks/useBillboard'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const Billboard = () => {
    const { data } = useBillboard()

    return (
        <div className='relative h-[56.25vw]'>
            Copy code
            <div className="w-full h-[56.25vw] object-cover brightness-[60%]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `${data?.thumbnailURL}` }}
                ></div>
                <iframe
                    className="relative z-10"
                    width="560"
                    height="315"
                    src={data?.videoUrl}
                    title=""
                    allowFullScreen
                ></iframe>
            </div>
            {/* <video 
            className='w-full h-[56.25vw] object-cover brightness-[60%]'
            autoPlay
            muted
            loop
            poster={data?.thumbnailUrl} 
            src={data?.videoUrl}>
            </video> */}
            <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
                <p className='text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shoadow-xl'>{data?.title}</p>
                <p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[0%] md:w-[80%] lg:w-[50%] drop-shadow-xl'>{data?.description}</p>
                <div className='flex flex-row mt-3 md:mt-4 gap-3'>
                    <button className='bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition'>
                        <AiOutlineInfoCircle className="mr-1" />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Billboard