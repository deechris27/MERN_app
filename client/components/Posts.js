import React from 'react';

export const Posts = ({posts, isLoading})=>{
    if(isLoading){
        return <h2>Loading.........</h2>
    }

    //console.log("****", posts[0]);

    return(
        <div>
            <ul>
                {posts.map(p=>{
                    console.log(p.employee_name);
                    return <li key={p.id} className="text-info">{p.employee_name}</li>
                })}
            </ul>
        </div>
    );
};