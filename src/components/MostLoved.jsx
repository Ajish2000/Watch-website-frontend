import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

// Import watch images
import watch1 from '../assets/watch_banner_1_1764666960565.png';
import watch2 from '../assets/watch_banner_2_1764666980783.png';
import watch3 from '../assets/watch_banner_3_1764666995991.png';
import watch4 from '../assets/watch_banner_4_1764667012294.png';
import watch5 from '../assets/watch_banner_5_1764667034108.png';
import watch6 from '../assets/watch_banner_6_1764667050684.png';
import womensWatch1 from '../assets/womens_watch_1_1764669184082.png';

export default function MostLoved() {
    const [activeTab, setActiveTab] = useState('WOMEN');
    const [favorites, setFavorites] = useState([]);

    // Men's Collection
    const menWatches = [
        {
            id: 1,
            image: watch2,
            brand: 'VICTORINOX',
            model: 'Men | MAVERICK',
            price: '₹45,800',
            originalPrice: '₹52,000',
        },
        {
            id: 2,
            image: watch4,
            brand: 'TAG HEUER',
            model: 'Men | Carrera Chronograph',
            price: '₹2,85,000',
            originalPrice: '₹3,10,000',
        },
        {
            id: 3,
            image: watch5,
            brand: 'FREDERIQUE CONSTANT',
            model: 'Men | Skeleton Heart Beat',
            price: '₹1,65,000',
            originalPrice: '₹1,85,000',
        },
        {
            id: 4,
            image: watch6,
            brand: 'OMEGA',
            model: 'Men | Seamaster Diver 300M',
            price: '₹4,25,000',
            originalPrice: '₹4,50,000',
        },
        {
            id: 5,
            image: watch1,
            brand: 'LONGINES',
            model: 'Men | Master Collection',
            price: '₹1,25,000',
            originalPrice: '₹1,40,000',
        },
        {
            id: 6,
            image: watch3,
            brand: 'TISSOT',
            model: 'Men | Gentleman Powermatic 80',
            price: '₹68,500',
            originalPrice: '₹75,000',
        },
    ];

    // Women's Collection - Using women's watch images
    const womenWatches = [
        {
            id: 1,
            image: womensWatch1,
            brand: 'CARTIER',
            model: 'Women | Ballon Bleu',
            price: '₹4,20,000',
            originalPrice: '₹4,65,000',
        },
        {
            id: 2,
            image: womensWatch1,
            brand: 'SWAROVSKI',
            model: 'Women | Crystalline Aura',
            price: '₹40,000',
            originalPrice: '₹45,000',
        },
        {
            id: 3,
            image: womensWatch1,
            brand: 'MOVADO',
            model: 'Women | Bold Iconic',
            price: '₹63,755',
            originalPrice: '₹72,000',
        },
        {
            id: 4,
            image: womensWatch1,
            brand: 'TISSOT',
            model: 'Women | Classic Dream',
            price: '₹35,500',
            originalPrice: '₹42,000',
        },
        {
            id: 5,
            image: womensWatch1,
            brand: 'RADO',
            model: 'Women | Centrix Diamonds',
            price: '₹89,000',
            originalPrice: '₹98,000',
        },
        {
            id: 6,
            image: womensWatch1,
            brand: 'HAMILTON',
            model: 'Women | Jazzmaster Lady',
            price: '₹72,300',
            originalPrice: '₹82,000',
        },
    ];

    const currentWatches = activeTab === 'MEN' ? menWatches : womenWatches;

    const toggleFavorite = (id) => {
        setFavorites(prev =>
            prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
        );
    };

    return (
        <section className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Radial gradients */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-100/40 via-rose-50/30 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-100/40 via-blue-50/30 to-transparent rounded-full blur-3xl"></div>

                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}>
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Elegant Header Section */}
                <div className="flex flex-col items-center mb-20">
                    {/* Decorative top line */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                        <svg className="w-3 h-3 text-amber-500" viewBox="0 0 6 6" fill="currentColor">
                            <circle cx="3" cy="3" r="3" />
                        </svg>
                        <span className="text-amber-600 uppercase tracking-[0.3em] text-xs font-semibold">
                            Curated Exclusives
                        </span>
                        <svg className="w-3 h-3 text-amber-500" viewBox="0 0 6 6" fill="currentColor">
                            <circle cx="3" cy="3" r="3" />
                        </svg>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent via-amber-400 to-transparent"></div>
                    </div>

                    {/* Premium Title */}
                    <h2 className="text-6xl md:text-7xl font-light tracking-tight text-slate-900 text-center mb-6 leading-tight">
                        <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-amber-900 to-slate-800">
                            Most Loved
                        </span>
                        <span className="block mt-2 text-4xl md:text-5xl font-light text-slate-700">
                            Timepieces
                        </span>
                    </h2>

                    {/* Elegant Description */}
                    <p className="text-slate-600 text-lg max-w-2xl text-center leading-relaxed">
                        Experience the pinnacle of horological artistry with our handpicked collection of
                        <span className="text-amber-700 font-medium"> extraordinary timepieces</span>
                    </p>
                </div>

                {/* Premium Tab Navigation */}
                <div className="flex justify-center items-center gap-16 mb-20">
                    <button
                        onClick={() => setActiveTab('MEN')}
                        className="group relative"
                    >
                        <div className={`flex flex-col items-center transition-all duration-500 ${activeTab === 'MEN' ? 'scale-110' : 'scale-100'
                            }`}>
                            <span className={`text-3xl font-light tracking-wider mb-3 transition-all duration-300 ${activeTab === 'MEN'
                                    ? 'text-slate-900 font-normal'
                                    : 'text-slate-400 group-hover:text-slate-600'
                                }`}>
                                For Him
                            </span>
                            <div className={`h-0.5 rounded-full transition-all duration-500 ${activeTab === 'MEN'
                                    ? 'w-20 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600'
                                    : 'w-16 bg-slate-300 group-hover:w-18 group-hover:bg-slate-400'
                                }`}></div>
                        </div>
                        {activeTab === 'MEN' && (
                            <div className="absolute -inset-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-full blur-xl opacity-40 -z-10"></div>
                        )}
                    </button>

                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>

                    <button
                        onClick={() => setActiveTab('WOMEN')}
                        className="group relative"
                    >
                        <div className={`flex flex-col items-center transition-all duration-500 ${activeTab === 'WOMEN' ? 'scale-110' : 'scale-100'
                            }`}>
                            <span className={`text-3xl font-light tracking-wider mb-3 transition-all duration-300 ${activeTab === 'WOMEN'
                                    ? 'text-slate-900 font-normal'
                                    : 'text-slate-400 group-hover:text-slate-600'
                                }`}>
                                For Her
                            </span>
                            <div className={`h-0.5 rounded-full transition-all duration-500 ${activeTab === 'WOMEN'
                                    ? 'w-20 bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-500'
                                    : 'w-16 bg-slate-300 group-hover:w-18 group-hover:bg-slate-400'
                                }`}></div>
                        </div>
                        {activeTab === 'WOMEN' && (
                            <div className="absolute -inset-6 bg-gradient-to-r from-rose-50 via-pink-50 to-fuchsia-50 rounded-full blur-xl opacity-40 -z-10"></div>
                        )}
                    </button>
                </div>

                {/* Premium Watch Grid */}
                <div className="relative">
                    {/* Watch Cards Grid - 3 Column Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {currentWatches.slice(0, 6).map((watch, index) => (
                            <div
                                key={watch.id}
                                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-slate-100 overflow-hidden"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                {/* Glassmorphism overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                {/* Ranking Badge */}
                                <div className="absolute top-6 left-6 z-30">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300 ${activeTab === 'MEN'
                                            ? 'bg-gradient-to-br from-blue-500 to-indigo-600'
                                            : 'bg-gradient-to-br from-rose-400 to-pink-600'
                                        }`}>
                                        <span className="text-white font-bold text-lg">#{index + 1}</span>
                                    </div>
                                </div>

                                {/* Favorite Button */}
                                <button
                                    onClick={() => toggleFavorite(watch.id)}
                                    className="absolute top-6 right-6 z-30 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group/fav"
                                >
                                    {favorites.includes(watch.id) ? (
                                        <HeartSolidIcon className="w-6 h-6 text-rose-500" />
                                    ) : (
                                        <HeartIcon className="w-6 h-6 text-slate-400 group-hover/fav:text-rose-500" />
                                    )}
                                </button>

                                {/* Watch Image Container */}
                                <div className="relative h-80 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
                                    <img
                                        src={watch.image}
                                        alt={`${watch.brand} ${watch.model}`}
                                        className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Subtle radial overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-100/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Watch Details */}
                                <div className="p-8 pt-6 bg-white relative">
                                    {/* Brand & Model */}
                                    <div className="mb-4">
                                        <h3 className={`text-2xl font-semibold mb-2 transition-all duration-300 ${activeTab === 'MEN'
                                                ? 'text-slate-900 group-hover:text-indigo-700'
                                                : 'text-slate-900 group-hover:text-rose-600'
                                            }`}>
                                            {watch.brand}
                                        </h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            {watch.model}
                                        </p>
                                    </div>

                                    {/* Price Section */}
                                    <div className="flex items-baseline gap-3 mb-6">
                                        <span className="text-3xl font-bold text-slate-900">
                                            {watch.price}
                                        </span>
                                        <span className="text-sm text-slate-400 line-through">
                                            {watch.originalPrice}
                                        </span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        <button className={`flex-1 py-3 px-4 rounded-xl font-medium text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ${activeTab === 'MEN'
                                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                                                : 'bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700'
                                            }`}>
                                            View Details
                                        </button>
                                        <button className="w-12 h-12 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group/cart">
                                            <ShoppingCartIcon className="w-5 h-5 text-slate-600 group-hover/cart:text-slate-900" />
                                        </button>
                                    </div>
                                </div>

                                {/* Decorative glow border */}
                                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${activeTab === 'MEN'
                                        ? 'shadow-[0_0_40px_rgba(99,102,241,0.3)]'
                                        : 'shadow-[0_0_40px_rgba(244,114,182,0.3)]'
                                    }`}></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <div className="flex justify-center mt-20">
                    <button className={`group relative px-10 py-4 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl ${activeTab === 'MEN'
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                            : 'bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700'
                        }`}>
                        <span className="relative z-10 text-white font-semibold text-lg tracking-wide flex items-center gap-2">
                            Explore Complete Collection
                            <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                </div>
            </div>

            {/* Animation Keyframes */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}