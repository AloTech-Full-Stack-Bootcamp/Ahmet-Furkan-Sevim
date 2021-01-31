import { useState, useEffect } from 'react';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

function GameSection() {
  const [cards] = useState([
    {
      id: uuidv4(),
      name: 'Naruto Uzumaki ',
      img: 'https://images5.alphacoders.com/413/thumb-1920-413842.jpg',
    },

    {
      id: uuidv4(),
      name: 'Sasuke Uchiha',
      img: 'https://images3.alphacoders.com/644/thumb-1920-644196.jpg',
    },

    {
      id: uuidv4(),
      name: 'Madara Uchiha',
      img: 'https://images6.alphacoders.com/647/thumb-350-647516.jpg',
    },

    {
      id: uuidv4(),
      name: 'Gaara',
      img: 'https://images8.alphacoders.com/665/thumb-350-665367.jpg',
    },

    {
      id: uuidv4(),
      name: 'Sakura Haruno',
      img: 'https://images4.alphacoders.com/605/thumb-1920-605594.jpg',
    },
    {
      id: uuidv4(),
      name: 'Neiji Hyuga',
      img: 'https://images6.alphacoders.com/644/thumb-1920-644180.jpg',
    },
    {
      id: uuidv4(),
      name: 'Kakashi Hatake',
      img: 'https://images4.alphacoders.com/221/thumb-350-221968.jpg',
    },
    {
      id: uuidv4(),
      name: 'Uchiha Itachi',
      img: 'https://images4.alphacoders.com/128/thumb-1920-128706.png',
    },

    {
      id: uuidv4(),
      name: 'Jiraiya',
      img: 'https://images8.alphacoders.com/940/thumb-350-940967.png',
    },
    {
      id: uuidv4(),
      name: 'Tsunade',
      img: 'https://images.alphacoders.com/106/thumb-350-106873.jpg',
    },
    {
      id: uuidv4(),
      name: 'Rock Lee',
      img: 'https://images2.alphacoders.com/954/thumb-350-954965.png',
    },
    {
      id: uuidv4(),
      name: 'Pain',
      img: 'https://images8.alphacoders.com/508/thumb-350-508284.jpg',
    },
  ]);

  let localhighScore = localStorage.getItem('highscore');
  let handHighScore = localhighScore ? JSON.parse(localhighScore) : 0;

  const [currentScore, setCurrentScore] = useState(0);

  const [highScore, setHighScore] = useState(handHighScore);

  const [handleCard, setHandleCard] = useState([]);

  // Shuffle array
  const shuffled = cards.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  let selected = shuffled.slice(0, 6);

  const changePage = name => {
    if (handleCard.includes(name)) {
      setCurrentScore(0);
      setHandleCard([]);
      if (highScore < currentScore) {
        setHighScore(currentScore);
      }
    } else {
      setHandleCard([...handleCard, name]);
      setCurrentScore(currentScore + 1);
    }
  };
  useEffect(() => {
    localStorage.setItem('highscore', JSON.stringify(highScore));
  }, [highScore]);

  return (
    <>
      <div className="container text-center" style={{ color: 'white' }}>
        <div className="row mt-3">
          <div className=" col-lg-6 ">
            <h1>
              CURRENT SCORE{' '}
              <span className="badge bg-secondary">{currentScore}</span>
            </h1>
          </div>
          <div className=" col-lg-6 ">
            <h1>
              HIGH SCORE{' '}
              <span className="badge bg-secondary">{handHighScore}</span>
            </h1>
          </div>
        </div>

        <div className="row mt-5">
          {selected.map(card => {
            return (
              <Card
                card={card}
                key={card.id}
                onClick={name => {
                  changePage(name);
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default GameSection;
