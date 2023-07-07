import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { showUser } from '../features/userDetail';
import Popup from './Popup';

const Read = () => {
    const [view,setView]=useState(false);
    const [id,changeId]=useState();
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("useeffect running");
        dispatch(showUser());


    }, [])
    const { users, loading } = useSelector((state) => { return state.app })
    if (loading) {
        return (<p>Loading...</p>)

    }

    return (
        <div>
            {view && <Popup id={id} view={view} setView={setView}/>}
            {users && users.map((data,index) => {
                
                return (
                    <div className="card w-50 mx-auto my-2" key={index}>
                        <div className="card-body">
                            
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text">{data.age}</p>
                            <p className="card-text">{data.address}</p>
                            <p className="card-text">{data.gender}</p>

                            <button className="card-link" onClick={()=>{[setView(!view),changeId(index)]}}>View</button>
                            <a href="#" className="card-link">Edit</a>
                            <a href="#" className="card-link">Delete</a>
                            
                        </div>
                    </div>
                )

            })


            }
        </div>

    )
}

export default Read;