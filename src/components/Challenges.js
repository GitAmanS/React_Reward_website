import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const challengesData = {
  physicalWorkout: [
    { id: 1, name: 'Push-ups', difficulty: 'Medium',fees:"400", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s',description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat." },
    { id: 2, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s',description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat." },
    { id: 3, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s',description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat." },
    { id: 4, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
    { id: 5, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
    { id: 6, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
    { id: 7, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
    { id: 8, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
    { id: 9, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
    { id: 10, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
    { id: 11, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
    { id: 12, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
    { id: 13, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
    { id: 14, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
    { id: 15, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},

    // Add more physical workout challenges as needed
  ],
  gamingChallenges: [
    { id: 101, name: 'Complete Level 1', difficulty: 'Easy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
    { id: 102, name: 'Score 100 points', difficulty: 'Medium', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
    { id: 103, name: 'Score 100 points', difficulty: 'Medium', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
    { id: 104, name: 'Score 100 points', difficulty: 'Medium', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
    { id: 105, name: 'Score 100 points', difficulty: 'Medium', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat." },

    // Add more gaming challenges as needed
  ],
};
const ChallengePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('physicalWorkout');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const navigate = useNavigate()


  
  const renderChallenges = () => {
    const challenges = selectedCategory === 'physicalWorkout' ? challengesData.physicalWorkout : challengesData.gamingChallenges;
  
    return (
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            onClick={() => navigate(`/challenges/${challenge.id}`)}
            className="w-full  md:w-2/3 lg:w-80 bg-gray-100 shadow-md rounded-lg overflow-hidden p-2 hover:shadow-lg hover:bg-gray-200 transition duration-200 ease-in-out transform hover:-translate-y-1" // Optional hover effects
          >
            <img src={challenge.image} alt={challenge.name} className="w-full h-48 object-cover rounded-md" />
            <div className="flex flex-col pl-1 pt-1 pb-2">
            <h3 className="text-lg font-semibold text-gray-800">Title: {challenge.name}</h3>
            <p className="text-sm font-italic text-gray-500">{`Difficulty: ${challenge.difficulty}`}</p>
          </div>
          </div>
        ))}
      </div>
    );
  };
  

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex mb-4 text-lg">
        <button
          onClick={() => handleCategoryClick('physicalWorkout')}
          className={`rounded-tl rounded-bl-lg flex-1 py-3 px-6 ${
            selectedCategory === 'physicalWorkout' ? 'bg-sky-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Physical Workout
        </button>
        <button
          onClick={() => handleCategoryClick('gamingChallenges')}
          className={`rounded-tr rounded-br-lg flex-1 py-3 px-6 ${
            selectedCategory === 'gamingChallenges' ? 'bg-sky-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Gaming Challenges
        </button>
      </div>

      {selectedCategory && (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">{`Available ${selectedCategory === 'physicalWorkout' ? 'Physical Workout' : 'Gaming'} Challenges`}</h2>
          {renderChallenges()}
        </div>
      )}
    </div>
  );
};

export default ChallengePage;
