import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingtime}) => {
    return (
        <div className="w-1/3 bg-slate-400 ml-4 pt-4 mt-4">
           <div>
            <h1 className='text-3xl text-center bg-slate-200 p-4 m-4 rounded-xl'>Reading Time: {readingtime} </h1>
           </div>
           <h1 className="text-3xl text-center bg-red-400 p-4 m-4">Bookmarked Blog: {bookmarks.length}</h1> 
           {
            bookmarks.map((bookmark, idx) =><Bookmark key={idx}
            bookmark={bookmark}></Bookmark>)
           }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingtime: PropTypes.number
}

export default Bookmarks;