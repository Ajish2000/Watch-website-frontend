import watchImg from '../assets/watch.png';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-3 w-full pt-4"> {/* Changed */}
      <div>
        <h2 className="text-4xl font-bold mb-7">Premium Watches</h2> {/* Changed */}
        <p className="text-gray-600 mb-6">
          <span className="text-xl text-gray-800">Elegant designs with excellent craftsmanship.</span>
          <br />
          Discover timeless craftsmanship with our premium collection of watches, where precision meets luxury. Each timepiece is meticulously designed using the finest materials, ensuring durability, style, and sophistication that lasts a lifetime. Whether for everyday elegance or special occasions, our watches reflect excellence in every detail.
        </p>
        <button className="bg-yellow-500 text-white px-5 py-2 rounded-md hover:bg-yellow-900">
          Shop Now
        </button>
        <p className='text-gray-600 mt-6'> {/* Changed */}
          Discover timeless elegance with our collection of premium watches, where craftsmanship meets sophistication. Each timepiece is meticulously designed using the finest materials — from sapphire crystal glass to hand-stitched leather straps — ensuring both luxury and longevity. Our master watchmakers blend traditional artistry with modern innovation to create pieces that are not only precise in performance but also visually captivating.

          Every detail, from the intricate dial work to the precision-engineered movement, reflects a commitment to excellence. Whether you're seeking a bold statement piece for formal occasions or a subtle companion for everyday wear, our watches embody a perfect harmony of design and function. More than just instruments of time, they are symbols of heritage, individuality, and timeless sophistication.
          Every detail, from the intricate dial work to the precision-engineered movement, reflects a commitment to excellence. Whether you're seeking a bold statement piece for formal occasions or a subtle companion for everyday wear, our watches embody a perfect harmony of design and function. More than just instruments of time, they are symbols of heritage, individuality, and timeless sophistication.
          Discover timeless elegance with our collection of premium watches, where craftsmanship meets sophistication. Each timepiece is meticulously designed using the finest materials — from sapphire crystal glass to hand-stitched leather straps — ensuring both luxury and longevity. Our master watchmakers blend traditional artistry with modern innovation to create pieces that are not only precise in performance but also visually captivating.
        </p>
      </div>
      <img src={watchImg} alt="Watch" className="w-100 h-100" />
    </section>
  );
}