import React from "react";

const StartPage = () => {
  return (
    <div> 
      <h1 className=" text-6xl text-center text-pale-green pt-3"> WELCOME</h1>
    <div className=" text-6xl desktop:flex desktop:justify-center desktop:space-x-5 
    desktop:pt-5 mobile:grid tablet:grid tablet:justify-items-center tablet:space-y-4
     mobile:justify-items-center mobile:space-y-4">
      <div><img className=" h-80" alt="cat1" src="cat1.jpeg"/></div>
      <div><img  className=" h-80" alt="cat2" src="cat2.jpeg"/></div>
      <div><img  className=" h-80" alt="cat3" src="cat3.jpeg"/></div>

    </div>
  </div>);
};

export default StartPage;
