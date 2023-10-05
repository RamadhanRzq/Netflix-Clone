import { Button, Link, Spacer } from '@chakra-ui/react';
import Logo from './netflix.png'
import {BiBell,BiSearch, BiCaretDown,BiPlay, BiSolidInfoCircle} from 'react-icons/bi'
import {GoPersonFill} from 'react-icons/go'
import { useEffect, useState } from 'react';
import { getMovieList } from './Api';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect (() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  })

  const PopularMovieList = () => {
    return popularMovies.map((movie, i ) => {
      return (
        <div className='w-1/3 space-y-5'>
    
        <p className='text-8xl'>{movie.title}</p>
        <p className='text-md'>{movie.overview}</p>
        <div className='flex space-x-6'>
        <Button leftIcon={<BiPlay/>} colorScheme='whiteAlpha' variant='solid' width={120} textColor='black'>
            Play
          </Button>
          <Button leftIcon={<BiSolidInfoCircle/>} colorScheme='whiteAlpha' variant='solid' width={120} textColor='black'>
            More Info
          </Button>
        </div>
       </div>   
      )
    })
  }

  return (
    <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
      <section>
    <div className="flex items-center">
        <Link href='#'>
          <img src={Logo} className="w-44 flex ml-5" alt='logonetflix'/>
          </Link>
        <div className="flex space-x-6 pl-5">
          <Link>Home</Link>
          <Link>TV Shows</Link>
          <Link>Movies</Link>
          <Link>New & Popular</Link>
          <Link>My List</Link>
          <Link>Browse By Language</Link>
        </div>
        <Spacer/>
        <div className='mr-5 flex space-x-4'>
          <BiSearch size={24}/>
          <BiBell size={24}/>
          <GoPersonFill size={24}/>
          <BiCaretDown size={24}/>
        </div>
    </div>
    </section>
    <section> 
      <div className='ml-10 mt-72'>
        <PopularMovieList/>
      </div>
    </section>
    <section>
    </section>
    </div>
  );
}

export default App;

