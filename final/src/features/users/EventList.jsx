import { userDeleted } from "./EventSlice";
import { useDispatch, useSelector } from "react-redux";
import download from "./download.jpg";
import './Event.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export function EventList() {
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.events);
  const loading = useSelector((state) => state.loading);
  const HandleDelete = (id) => {
    dispatch(userDeleted({ id }));
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
                  <div className='All-Posts'key={id}>
                   <div class="card" >
                    <img src={download} class="card-img-top" alt="..." style={{width:"100%",height:"4cm"}}/>
                    <div class="card-body" >
                      <h5 class="card-title" >{title}</h5>
                      <p class="card-text" >{body}</p>
                    </div>
                    <button  className="delete-btn" onClick={() => HandleDelete(id)}>Delete</button>
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
