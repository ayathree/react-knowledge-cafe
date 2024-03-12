import PropTypes from 'prop-types';

const Vlog = ({vlog}) => {
    console.log(vlog)
    return (
        <div>
            
        </div>
    );
};

Vlog.propTypes = {
    vlog: PropTypes.object.isRequired
}

export default Vlog;