import PropTypes from 'prop-types';

const Paginado = ({ getChararters, info }) => {
    return (
        <div className="row">
            <div className="col-md-12 d-flex justify-content-between py-3">
                <button className={"btn btn-primary " + (info?.prev === null ? "disabled": "")} onClick={() => {
                    if(info?.prev !== null){
                        getChararters(info?.prev);
                    }
                }}>Prev</button>
                <span className="text-muted"><small>Total: {info?.count} Paginas: {info?.pages}</small></span>
                <button className={"btn btn-primary " + (info?.next === null ? "disabled": "")} onClick={() => {
                    if(info?.next !== null){
                        getChararters(info?.next);
                    }
                }}>Next</button>
            </div>
        </div>
    )
}


Paginado.propTypes = {
    getChararters: PropTypes.func.isRequired,
    info: PropTypes.object.isRequired
}

export default Paginado;