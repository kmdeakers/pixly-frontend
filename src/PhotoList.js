import Photo from "./Photo"

/** PhotoList
 *
 * Presentational component: shows list of photos
 *
 * Props:
 * - photos : [{id, largeUrl, smallUrl, make, model, date}, ...]
 *
 * State: none
 *
 * App --> PhotoList --> Photo
 */

function PhotoList({photos}) {
  console.log("photos ", photos)
  return (
    <div className="PhotoList d-flex flex-wrap">
      {photos.map(photo => <Photo key={photo.id} photo={photo} url={photo.smallUrl}/>)}
    </div>
  );
}

export default PhotoList;