import batteryImg from '../assets/battery.jpg';
import strapImg from '../assets/strap.jpg';
import cleaningImg from '../assets/cleaning.jpg';
export default function Service() {
  return (
    <section className="bg-gray-400 text-center pb-5">
        <h2 className="flex justify-center text-3xl font-bold mb-10 pt-7">Our Services</h2>
<div className="grid md:grid-cols-3 gap-6 ml-5 mr-5">
  <div className=" bg-white shadow rounded-lg">
    <h3 className=" text-xl font-semibold  ">Battery Replacement</h3>
    <img src={batteryImg} alt="Battery" className="w-full   " />
    <p className="text-gray-600 text-left p-4"><span className='text-xl text-gray-800'>Fast and affordable battery services for your watch.</span><br/>Keep your watch running perfectly with our fast and affordable battery replacement service. Our expert technicians use high-quality, long-lasting batteries suitable for all major watch brands. Most replacements are completed within minutes, ensuring your timepiece is back on your wrist and ticking accurately without delay. Enjoy reliable performance with precision care at every step.</p>
  </div>
  <div className=" bg-white shadow rounded-lg">
    <h3 className=" text-xl font-semibold ">Strap Adjustment & Replacement</h3>
    <img src={strapImg} alt="Strap" className="w-full  " />
    <p className="text-gray-600 text-left p-4"><span className='text-xl text-gray-800'>Custom fitting for comfort and style.</span><br/>Achieve the perfect fit for your watch with our professional strap adjustment and custom fitting service. Whether you need links removed, a new strap installed, or a complete size adjustment, we ensure your watch feels as good as it looks. Our specialists handle every brand and strap type — metal, leather, or silicone — providing precision, comfort, and style tailored just for you.</p>
  </div>
  <div className=" bg-white shadow rounded-lg">
    <h3 className="text-xl font-semibold ">Cleaning & Maintenance</h3>
    <img src={cleaningImg} alt="Cleaning & Maintainance" className="w-full   " />
    <p className="text-gray-600 text-left p-4"><span className='text-xl text-gray-800'>Professional cleaning to keep your watch shining.</span><br/>Restore your watch’s brilliance with our professional cleaning and maintenance service. We carefully remove dirt, dust, and buildup from every part of your timepiece — from the strap to the case — using specialized tools and gentle, watch-safe solutions. Regular cleaning not only keeps your watch shining but also extends its lifespan and ensures smooth, accurate performance for years to come.</p>
  </div>
</div>
</section>
  )}
