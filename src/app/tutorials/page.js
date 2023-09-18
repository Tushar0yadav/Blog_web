import Cards from "../components/Cards";
import client from "../sanity/client";

const Tutorials = async () => {
  const res = await client.fetch(`*[_type == "tutorials"] `);
  console.log(res);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">
          Popular Tutorials
        </h1>
        <div className="h-1 w-20 bg-indigo-500 rounded m-auto"></div>
        <div className="flex flex-wrap -m-4 mt-10">
          {res.map((val) => (
            <Cards
              key={val._id} // Use a unique key (e.g., val._id if available)
              views={val.views}
              comments={val.comments}
              description={val.description}
              title={val.title}
              img={val.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutorials;



// import Cards from "../components/Cards";
// import client from "../sanity/client";

// const Tutorials = async () => {
//   const res = await client.fetch(`*[_type == "tutorials"] `);
//   console.log(res);
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-4 mx-auto">
//         <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">
//           Popular Tutorials
//         </h1>
//         <div class="h-1 w-20 bg-indigo-500 rounded m-auto"></div>
//         <div className="flex flex-wrap -m-4 mt-10">
//         {res.map((val, index) => {
//             return (
//               <Cards
//               key={index} // Use a unique key (e.g., val._id if available)
//               views={val.views}
//               comments={val.comments}
//               description={val.description}
//               title={val.title}
//               img={val.image}
//               />
//               );
//             })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Tutorials;
