import Image from 'next/image';

const Banner = () => {

    return (
        <div id="home-section" className='bg-lightkblue'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-evenly'>
                        <div className='flex gap-2 mx-auto lg:mx-0'>
                            {/* <Image src="/assets/banner/check.svg" alt="check-image" width={20} height={20} /> */}
                            {/* <h3 className='text-kellygreen text-sm font-semibold text-center lg:text-start'>Get 30% off on first enroll</h3> */}
                        </div>
                        <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>Feel Whole in Body, Mind, and Spirit</h1>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>At our clinic, we believe in nurturing every aspect of your well-being. 
Living whole means being physically healthy, mentally strong, spiritually connected, and socially fulfilled. 
Our mission is to help you achieve harmony and peace through personalized care and support.
</h3>
<h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>The Path to Wholeness</h1>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>Life’s journey is full of challenges and opportunities. 
With the right guidance and a supportive community, you can navigate your unique path to wholeness. 
We’re here to help you love, heal, grow, and live fully.</h3>

                        

                        {/* <div className='flex items-center justify-between pt-10 lg:pt-4'>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Flexible</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Learning path</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Community</p>
                            </div>
                        </div> */}
                    </div>

                    <div className='col-span-6 flex justify-center'>
                        {/* <Image src="" alt="" width={1000} height={805} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
