import React, { useState, useEffect } from "react";

function Landing() {
  
  const [Quote, setQuote] = useState();

  // calling api for generating random quotes
  const randomQuote = () =>{
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(result =>{
        console.log(result);

      setQuote(result.content);
      })
  }
  const callalert=()=>{

    setTimeout(() => {
      alert("Pls refresh the page if you are not able to read the text properly or to change the background");
    }, 3000);
  }
  

  useEffect(()=>{
     randomQuote();
     callalert();
  },[]);

  return(
  <div >
      <div  className="container mt-16 shadow-sm md:mx-auto md:mt-12  ">
        {/* <img src="https://images.pexels.com/photos/461593/pexels-photo-461593.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" /> */}
          <div Style={"background-image: url('https://source.unsplash.com/random/scenery')"} className="align-middle rounded-lg text-center  w-[90%] h-80 md:h-[32rem] mx-auto mb-20 ">
            <h1 className="inline-block my-4 font-bold text-2xl w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-serif md:text-3xl">Quote of the day</h1>
            
            <p className="inline-block px-4 text-center font-medium text-lg md:text-2xl md:px-32 md:my-8  text-white" >

              {Quote}
            </p>
            
          </div>
      </div>

      <div>
      <button onClick={randomQuote} S className="flex flex-row  md:w-[14rem] md:hover:w-[30rem] transition-all duration-300 rounded-full  text-white w-1/3 mx-auto my-4 py-1 bg-gradient-to-r from-purple-600 to-pink-500 ">
              <div className="px-4 md:px-4 md:py-2 md:font-bold md:text-xl md:mx-auto md:items-center font-semibold ">Next</div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:my-2 md:mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg>
              </div>
              
            </button>
      </div>

      {/* adding footer //  */}
      <footer class="text-gray-400 bg-gray-900 body-font mt-10 md:mt-[5rem]">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a href="https://www.linkedin.com/in/ashutosh-nautiyal-67bba4222/" class="flex title-font font-medium items-center md:justify-start justify-center text-white">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
      <span class="ml-3 text-xl">Ashutosh Nautiyal</span>
    </a>
    <p class="text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2022 QuoteMania
      <a href="https://twitter.com/knyttneve" class="text-gray-200 ml-6  " target="_blank" rel="noopener noreferrer">Mail_me:ashutoshnautiyal94@gmail.com</a>
    </p>
  </div>
</footer>
  </div>
  );
}

export default Landing;
