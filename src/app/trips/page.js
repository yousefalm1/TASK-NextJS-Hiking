'use client';

import Link from 'next/link';
import { useState } from 'react';

import trips from '@/data/trips';

import SearchBar from '@/components/SearchBar';
import TripCard from '@/components/TripCard';
import { useSearchParams } from 'next/navigation';

function TripListPage() {
  const activeStyle =
    'bg-primary hover:bg-primarydark text-white  py-5 px-6 rounded-lg text-lg mx-2 mb-2';

  const inActiveStyle =
    'bg-gray-300 text-gray-500 py-5 px-6 rounded-lg text-lg mx-2 mb-2';

  const [query, setQuery] = useState('');

  const searchPrams = useSearchParams();
  const getDifficulty = searchPrams.get('difficulty');

  const tripCards = trips
    .filter(
      (trip) =>
        (trip.name.toLowerCase().includes(query.toLowerCase()) &&
          getDifficulty === trip.difficulty) ||
        !getDifficulty
    )
    .map((trip, index) => <TripCard trip={trip} key={index} />);

  return (
    <section className="py-24 bg-white" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-center uppercase text-3xl md:text-4xl font-bold text-secondary mb-0">
          Explore Trips
        </h2>
        <br />
        <SearchBar setQuery={setQuery} />
        <div className="text-center mt-8">
          <Link
            href={{
              pathname: '/trips',
              query: { difficulty: 'easy' },
            }}
            className={getDifficulty === 'easy' ? activeStyle : inActiveStyle}
          >
            Easy
          </Link>
          <Link
            href={{
              pathname: '/trips',
              query: { difficulty: 'moderate' },
            }}
            className={
              getDifficulty === 'moderate' ? activeStyle : inActiveStyle
            }
          >
            Moderate
          </Link>
          <Link
            href={{
              pathname: '/trips',
              query: { difficulty: 'hard' },
            }}
            className={getDifficulty === 'hard' ? activeStyle : inActiveStyle}
          >
            Hard
          </Link>
        </div>
        <div className="flex justify-center items-center my-8">
          <div className="w-[10%] h-1 rounded bg-secondary"></div>
          <div className="mx-4 text-secondary text-2xl">
            <i className="fas fa-star"></i>
          </div>
          <div className="w-[10%] h-1 rounded bg-secondary"></div>
        </div>
        <div className="flex flex-wrap mx-4 justify-center items-center">
          {tripCards}
        </div>
      </div>
    </section>
  );
}

export default TripListPage;
