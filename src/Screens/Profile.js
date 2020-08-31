import React from 'react';


const Profile = ()=>{
    return (
        <>
        
        <div style={{maxWidth:"750px",margin:"10px auto"}}>
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"28px 0px",
            borderBottom:"1px solid grey"

        }}>
        <div>
        <img style={{width:"180px",height:"180px",borderRadius:"90px",padding:"20px"}}
        src="https://images.unsplash.com/photo-1551625864-3e291c567ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="pic"
        />
        </div>
        <div>
        <h4 style={{display:"flex",justifyContent:"space-between"}}>Aindrila Bhattacharjee</h4>
        <div style={{display:"flex",justifyContent:"space-between", alignItems:"center", width:"98%", padding:"10px"}}>
        
        <h6>40 posts</h6>
        <h6>40 followers</h6>
        <h6>40 followings</h6>
        </div>
        </div>
        </div>
        <div className="gallery">
        <img className="item" alt="pic" src="https://images.unsplash.com/photo-1551625864-3e291c567ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        <img className="item" alt="pic" src="https://images.unsplash.com/photo-1551625864-3e291c567ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        <img className="item" alt="pic" src="https://images.unsplash.com/photo-1551625864-3e291c567ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        <img className="item" alt="pic" src="https://images.unsplash.com/photo-1551625864-3e291c567ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        <img className="item" alt="pic" src="https://images.unsplash.com/photo-1551625864-3e291c567ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        <img className="item" alt="pic" src="https://images.unsplash.com/photo-1551625864-3e291c567ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />

        
        
        </div></div>
        </>
    )
}

export default Profile