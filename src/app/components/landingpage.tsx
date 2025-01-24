import React from 'react'
import MainImage from '../../../public/assets/main image.png'
import Sideline from '../../../public/assets/sideline.png'
import food1 from '../../../public/assets/1.png'
import food2 from '../../../public/assets/2.png'
import food3 from '../../../public/assets/3.png'
import foodItems from '../../../public/assets/food items.png'
import IconBox from '../../../public/assets/Icon Box.png'
import OpacityImage from '../../../public/assets/opacImage.png'
import Image from 'next/image'
const LandingImage = () => {
  return (
    <div>
      <div className='mx-20 ml-8 flex flex-wrap'>
          <Image src={Sideline} alt='social media platforms' className='ml-4 mt-8'/>
          <div className='flex-auto ml-8 my-auto'>
          <h4 className='text-3xl flex font-GreatVibes  text-[#FF9F0D]'>It's Quick & amusing!</h4>
          <h1 className='text-white font-Helvetica text-5xl font-bold mt-4 mb-9'><span className='text-[#FF9F0D]'>Th</span>e Art of speed <br />food Quality</h1>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
          Varius sed pharetra dictum neque massa congue</p>
          <button className='bg-[#FF9F0D] px-6 py-4 mt-9 rounded-full text-white'>See Menu</button>
          </div>
          <Image src={MainImage} alt='Main Image' width={800} className='ms-auto mt-8'/>
      </div>
   
      {/* part2 of landing page */}

      <div className='my-40 mx-20 flex'>
        <div className='text-white mx-20 ml-12 text-left'>
          <h4 className='text-3xl font-GreatVibes  text-[#FF9F0D]'>About us</h4>
          <h3 className='text-5xl my-3 font-Helvetica font-bold'><span className='text-[#FF9F0D]'>We </span>Create the best <br />foody product</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          <br />
          <ul>
          <li className='flex'><p className='pl-3'>Lacus nisi, et ac dapibus sit eu velit in consequat.</p></li>
          <br />
          <li className='flex'><p className='pl-3'> Quisque diam pellentesque bibendum non dui volutpat fringilla </p></li>
          <br />
          <li className='flex'><p className='pl-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></li>
          </ul>
          <button className='bg-[#FF9F0D] px-6 py-4 mt-9 rounded-full'>Read More</button>
        </div>
        <div className='mr-5'>
          <Image src={food1} alt='food1' width={1900}/>
          <div className='flex pt-3'>
          <Image src={food2} alt='food2' width={300} className='pr-3'/>
          <Image src={food3} alt='food3' width={300}/>
        </div>
      </div>
    </div>
    
    {/* part 3 of landing page (food category) */}
    
      <div className='mt-0 place-items-center text-center'>
        <div className='text-white'>
          <h4 className='text-3xl font-GreatVibes  text-[#FF9F0D]'>Food Category</h4>
          <h3 className='text-5xl font-Helvetica font-bold'><span className='text-[#FF9F0D]'>Ch</span>oose food item </h3>
        </div>
          <br />
          <Image src={foodItems} alt='food items' width={1200}/>
      </div>

      {/* statistics of website and services */}

      <div className='relative mt-40 '>
        <Image src={OpacityImage} alt='' width={1200} className='absolute opacity-20'/>
        <Image src={IconBox} alt='IconBox' width={1000} className='absolute inset-0 mx-auto my-20'/>
      </div>

      
    </div>
  )
}

export default LandingImage