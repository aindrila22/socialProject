import React from 'react';
import RecipeReviewCard from '../Design/Body';


const Home = ()=>{
    return (
        <>
        <div className="body" style={{margin:"20px auto",display:"flex",justifyContent:"center",flexDirection:"column",
    alignItems:"center"}}>
        
        < RecipeReviewCard/>
        < RecipeReviewCard/>
        
        </div>      
          </>
    )
}

export default Home