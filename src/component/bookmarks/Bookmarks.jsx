import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3 bg-slate-400 ml-4 pt-4 mt-4">
           <h1 className="text-3xl text-center">Bookmarked Blog: {bookmarks.length}</h1> 
           {
            bookmarks.map(bookmark =><Bookmark key={bookmark.id}
            bookmark={bookmark}></Bookmark>)
           }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;