import { fetchUsers, userDeleted } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";
import download from "./download.jpg";
import './user.css'
import { useHistory,useLocation } from "react-router-dom";

export function EventList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const userId = parseInt(pathname.replace("/edit-user/", ""));
  
  const { entities } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const user = useSelector((state) =>
  state.users.entities.find((user) => user.id === userId)
  );

  const handleClick = () => {
    console.log(user.id)
      dispatch(
        userDeleted({
          id: userId,
        })
      );
    
  };

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <div className="u-full-width">
            <div>
              {entities.length &&
                entities.map(({ id, title, body }, i) => (
                  <div className='All-Posts'>
            
          <div class="card">
          <img src={download} class="card-img-top" alt="..." style={{width:"100%",height:"4cm"}}/>
          <div class="card-body" >
            <h5 class="card-title" >{title}</h5>
            <p class="card-text" >{body}</p>
            <button className="delete-btn"  onClick={handleClick}>Delete</button>
          </div>
        </div>
        
        </div> 
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
