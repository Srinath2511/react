import React, { Component , useState } from "react";
import ReactDOM from "react-dom/client";

export default function Movies()
{
  
  

           var movies = [ {
            title: "Forest Gump",
            yearReleased: 1994,
            director: "Robert Zemeckis",
            genre: "Comedy",
            wasSuccessfull: true
        }, {
            title: "Harry Potter",
            yearReleased: 2001,
            director: "Mike Newell",
            genre: "Fantasy Fiction",
            wasSuccessfull: true
        }, {
            title: "Titanic",
            yearReleased: 1998,
            director: "James Cameron",
            genre: "Romance",
            wasSuccessfull: true
        },{
            title: "Best Worst Movie",
            yearReleased: 2009,
            director: "Michael Stephen",
            genre: "Comedy",
            wasSuccessfull: false
        }, {
            title: "Troll 2",
            yearReleased: 2003,
            director: "Shawn Black",
            genre: "Horror",
            wasSuccessfull: false

        }
    ];
 
    
/* const TableHeadRow = () => {
        return    <tr><th>Title</th>
                <th>yearReleased</th>
                <th>director</th>
                <th>Genre</th>
                <th>Verdict</th> </tr> ;
 }
 const TableRow = ({movies}) => {
            return movies.map((movies) =>
              <tr>
               <td>{movies.title}</td>
               <td>{movies.yearReleased}</td>
               <td>{movies.director}</td>
               <td>{movies.genre}</td>
               <td>{movies.wasSuccessfull}</td>
              </tr>  );
 }*/
  /*const [items, setItems] = useState(movies);
  const removeItem = (index) => {
  setItems([
             ...items.slice(0, index),
             ...items.slice(index + 1)
           ]);
  }*/

   const [movie, setMovie] = useState([...movies]);
   const deleteMovies = (index) => {
      debugger
      let arr =[...movie]
      arr.splice(index,1)
      setMovie(arr);
   }
  
  const tableHeadRow = () => {
  return (<div className="App">
               <table className = "App">
                 <thead>
                  <tr>
                <th>Title</th>
                <th>yearReleased</th>
                <th>director</th>
                <th>Genre</th>
                <th>Verdict</th> 
                <th>Action</th>
                   </tr>
                 </thead>
                 <tbody>
                 {  movie.map((mov,i) => {
              return (<tr key={i}>
               <td>{mov.title}</td>
               <td>{mov.yearReleased}</td>
               <td>{mov.director}</td>
               <td>{mov.genre}</td>
               <td>{mov.wasSuccessfull?"yes":"No"}</td>
               <td><button onClick={(e)=>deleteMovies(i)}>Delete</button></td>
              </tr> 
              )})}
                 </tbody>
               </table>
          </div>);
      }
 
   return tableHeadRow(); 
  
}
