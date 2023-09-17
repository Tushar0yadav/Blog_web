import Cards from "../components/Cards";
import client from "../sanity/client";

const Tutorials = async () => {
  const res = await client.fetch(`*[_type == "tutorials"] `);
  console.log(res);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">
          Popular Tutorials
        </h1>
        <div class="h-1 w-20 bg-indigo-500 rounded m-auto"></div>
        <div className="flex flex-wrap -m-4 mt-10">
          {res.map((val) => {
            return (
              <Cards
              views={val.views}
              comments={val.comments}
              description={val.description}
              title={val.title}
              img={val.image}
              />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Tutorials;

//  "use client"
// import React, { useEffect, useState } from "react";
// import Cards from "../components/Cards";
// import client from "../sanity/client";

// const Tutorials = () => {
//   const [tutorialData, setTutorialData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await client.fetch(`*[_type == "tutorials"]`);
//         setTutorialData(res);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <section className="text-gray-600 body-font">
//         <div className="container px-5 py-4 mx-auto">
//           <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">
//             Popular Tutorials
//           </h1>
//           <div className="h-1 w-20 bg-indigo-500 rounded m-auto"></div>
//           <div className="flex flex-wrap -m-4 mt-10">
//             {tutorialData.map((val) => (
//               <Cards
//                 key={val._id}
//                 views={val.views}
//                 comments={val.comments}
//                 description={val.description}
//                 title={val.title}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Tutorials;