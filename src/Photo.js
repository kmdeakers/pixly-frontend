import { Link } from "react-router-dom";
import "./Photo.css";

/** Photo
 *
 * Presentational component: shows photo as link to editor
 *
 * Props:
 * - photo : {id, largeUrl, smallUrl make, model, date}
 * - url
 * State: none
 *
 * PhotoList --> Photo
 */

//TODO: need description field

function Photo({ photo, url }) {
  const { id, make, model, date, description } = photo;

  return (
    <div className="Photo">
      <Link to={`/edit/${id}`}>
        <img className="Photo-image" src={url} alt={description} />
      </Link>
      <ul className="Photo-info">
        {make && <li>Make: {make}</li>}

        {model && <li>Model: {model}</li>}

        {date && <li>Date: {date}</li>}
      </ul>
    </div>
  );
}

export default Photo;
