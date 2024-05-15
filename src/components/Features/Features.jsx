import { useEffect, useState } from 'react';
import FeaturesInfo from './FeaturesInfo';

const Features = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-11-server-two-navy.vercel.app/features`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setFeatures(data.slice(0, 6));
      });
  }, []);
  return (
    <div className="w-full  my-2 ">
      <h2 className="text-5xl font-extrabold text-center font-Raleway my-7">
        Highlighted <span className="text-rose-500">Features</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-4 lg:px-0">
        {features.map(feature => (
          <FeaturesInfo key={feature._id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
