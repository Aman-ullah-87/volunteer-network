

import { Link } from "react-router-dom";

const Card = ({event}) => {
  const {title,_id,photo}=event;
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  let color = "#" + randomColor
  return (
    <div role='list '>
      <div className="group/item relative w-[270px] h-[320px] rounded-xl">
        <img
          src={photo}
          className="w-full h-[240px] object-cover rounded-t-lg"
          alt=""
        />
        <h2 style={{backgroundColor:`${color}`}} className={`bg-orange-300 text-center text-white w-full py-8  rounded-b-lg`}>
         {title}
        </h2>
       <Link to={`/event/${_id}`}> <button className="absolute top-1/2 left-1/3 group/item invisible group-hover/item:visible bg-blue-500 text-white p-2 rounded hover:bg-blue-800 m-2">
          Book Event
        </button></Link>
      </div>
    
    </div>
  );
};

export default Card;
