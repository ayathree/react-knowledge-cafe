import PropTypes from 'prop-types';
import { FaBookmark} from "react-icons/fa"

const Vlog = ({vlog, handleAddToBookmarks}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags}=vlog
    console.log(vlog)
    return (
        <div >
            <img className='w-full mb-6' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-6'>
            <div className='flex'>
                <img className='w-11 rounded-full h-11' src={author_img} alt="" />
                <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>

              </div>
              <div>
                <span>{reading_time}min</span>
                <button onClick={()=>handleAddToBookmarks(vlog)} className='ml-2 text-red-600 text-2xl'><FaBookmark /></button>
    
            </div>
            </div>
            <h2 className="text-4xl mb-6">{title}</h2>
            <p className='mb-16'>
                {
                    hashtags.map((hash, idx)=><span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Vlog.propTypes = {
    vlog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired
}

export default Vlog;