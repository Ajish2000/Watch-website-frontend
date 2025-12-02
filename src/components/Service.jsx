import batteryImg from '../assets/battery.jpg';
import strapImg from '../assets/strap.jpg';
import cleaningImg from '../assets/cleaning.jpg';
import repairImg from '../assets/watch_banner_1_1764666960565.png';
import waterTestImg from '../assets/watch_banner_2_1764666980783.png';
import customizeImg from '../assets/watch_banner_3_1764666995991.png';

export default function Service() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 text-center py-16 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-100 to-rose-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      {/* Section Title */}
      <div className="relative z-10 mb-16">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 mb-3">
          Our Premium Services
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Expert care and precision craftsmanship for your treasured timepieces
        </p>
      </div>

      {/* Services Infinite Auto-Scroll Container */}
      <div className="relative z-10 overflow-hidden">
        <div className="flex gap-8 pb-8 animate-scroll">
          {/* First set of cards */}
          
          {/* Service Card 1 - Battery Replacement */}
          <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex-shrink-0 w-96 snap-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden h-56">
              <img 
                src={batteryImg} 
                alt="Battery Replacement" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-lg">
                Battery Replacement
              </h3>
            </div>
            <div className="p-6 relative">
              <p className="text-gray-700 text-left leading-relaxed">
                <span className="block text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                  Fast and affordable battery services for your watch.
                </span>
                Keep your watch running perfectly with our fast and affordable battery replacement service. Our expert technicians use high-quality, long-lasting batteries suitable for all major watch brands.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Service Card 2 - Strap Adjustment */}
          <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex-shrink-0 w-96 snap-center">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden h-56">
              <img 
                src={strapImg} 
                alt="Strap Adjustment & Replacement" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-lg">
                Strap Adjustment & Replacement
              </h3>
            </div>
            <div className="p-6 relative">
              <p className="text-gray-700 text-left leading-relaxed">
                <span className="block text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-2">
                  Custom fitting for comfort and style.
                </span>
                Achieve the perfect fit for your watch with our professional strap adjustment and custom fitting service. We ensure your watch feels as good as it looks.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Service Card 3 - Cleaning & Maintenance */}
          <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex-shrink-0 w-96 snap-center">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden h-56">
              <img 
                src={cleaningImg} 
                alt="Cleaning & Maintenance" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-lg">
                Cleaning & Maintenance
              </h3>
            </div>
            <div className="p-6 relative">
              <p className="text-gray-700 text-left leading-relaxed">
                <span className="block text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-2">
                  Professional cleaning to keep your watch shining.
                </span>
                Restore your watch's brilliance with our professional cleaning and maintenance service using specialized tools and gentle solutions.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Service Card 4 - Watch Repair & Servicing */}
          <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex-shrink-0 w-96 snap-center">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden h-56">
              <img 
                src={repairImg} 
                alt="Watch Repair & Servicing" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-lg">
                Watch Repair & Servicing
              </h3>
            </div>
            <div className="p-6 relative">
              <p className="text-gray-700 text-left leading-relaxed">
                <span className="block text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-2">
                  Complete mechanical repair and restoration services.
                </span>
                Expert repair services for all types of watches, from simple fixes to complex mechanical overhauls by our certified technicians.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Service Card 5 - Water Resistance Testing */}
          <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex-shrink-0 w-96 snap-center">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden h-56">
              <img 
                src={waterTestImg} 
                alt="Water Resistance Testing" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-lg">
                Water Resistance Testing
              </h3>
            </div>
            <div className="p-6 relative">
              <p className="text-gray-700 text-left leading-relaxed">
                <span className="block text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-2">
                  Professional seal integrity and waterproofing checks.
                </span>
                Ensure your watch's water resistance with our advanced pressure testing equipment. Perfect for divers and watch enthusiasts.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Service Card 6 - Watch Customization */}
          <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex-shrink-0 w-96 snap-center">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden h-56">
              <img 
                src={customizeImg} 
                alt="Watch Customization" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-lg">
                Watch Customization
              </h3>
            </div>
            <div className="p-6 relative">
              <p className="text-gray-700 text-left leading-relaxed">
                <span className="block text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 mb-2">
                  Personalization and premium engraving services.
                </span>
                Make your watch uniquely yours with our customization services, from elegant engraving to dial modifications and custom bezels.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          
          {/* Duplicate set of cards for seamless loop */}
          <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex-shrink-0 w-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden h-56">
              <img 
                src={batteryImg} 
                alt="Battery Replacement" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-lg">
                Battery Replacement
              </h3>
            </div>
            <div className="p-6 relative">
              <p className="text-gray-700 text-left leading-relaxed">
                <span className="block text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                  Fast and affordable battery services for your watch.
                </span>
                Keep your watch running perfectly with our fast and affordable battery replacement service. Our expert technicians use high-quality, long-lasting batteries suitable for all major watch brands.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex-shrink-0 w-96">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden h-56">
              <img 
                src={strapImg} 
                alt="Strap Adjustment & Replacement" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-lg">
                Strap Adjustment & Replacement
              </h3>
            </div>
            <div className="p-6 relative">
              <p className="text-gray-700 text-left leading-relaxed">
                <span className="block text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-2">
                  Custom fitting for comfort and style.
                </span>
                Achieve the perfect fit for your watch with our professional strap adjustment and custom fitting service. We ensure your watch feels as good as it looks.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex-shrink-0 w-96">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden h-56">
              <img 
                src={cleaningImg} 
                alt="Cleaning & Maintenance" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-lg">
                Cleaning & Maintenance
              </h3>
            </div>
            <div className="p-6 relative">
              <p className="text-gray-700 text-left leading-relaxed">
                <span className="block text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-2">
                  Professional cleaning to keep your watch shining.
                </span>
                Restore your watch's brilliance with our professional cleaning and maintenance service using specialized tools and gentle solutions.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex-shrink-0 w-96">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden h-56">
              <img 
                src={repairImg} 
                alt="Watch Repair & Servicing" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-lg">
                Watch Repair & Servicing
              </h3>
            </div>
            <div className="p-6 relative">
              <p className="text-gray-700 text-left leading-relaxed">
                <span className="block text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-2">
                  Complete mechanical repair and restoration services.
                </span>
                Expert repair services for all types of watches, from simple fixes to complex mechanical overhauls by our certified technicians.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex-shrink-0 w-96">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden h-56">
              <img 
                src={waterTestImg} 
                alt="Water Resistance Testing" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-lg">
                Water Resistance Testing
              </h3>
            </div>
            <div className="p-6 relative">
              <p className="text-gray-700 text-left leading-relaxed">
                <span className="block text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-2">
                  Professional seal integrity and waterproofing checks.
                </span>
                Ensure your watch's water resistance with our advanced pressure testing equipment. Perfect for divers and watch enthusiasts.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex-shrink-0 w-96">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden h-56">
              <img 
                src={customizeImg} 
                alt="Watch Customization" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-lg">
                Watch Customization
              </h3>
            </div>
            <div className="p-6 relative">
              <p className="text-gray-700 text-left leading-relaxed">
                <span className="block text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 mb-2">
                  Personalization and premium engraving services.
                </span>
                Make your watch uniquely yours with our customization services, from elegant engraving to dial modifications and custom bezels.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
