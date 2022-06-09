import PropTypes from 'prop-types';
import './CharacterCard.css';

function CharacterCard({ image, name, status, gender }) {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start img-character" alt={image} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{gender}</p>
                        <p className="card-text"><small className="text-muted">{status}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

CharacterCard.defaultProps = {
    image: "https://via.placeholder.com/200x300.png",
    name: "Anonimous",
    status: "Unknown",
    gender: "Unknown"
}

CharacterCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string,
    gender: PropTypes.string
}

export default CharacterCard;