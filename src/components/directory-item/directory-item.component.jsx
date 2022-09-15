import { Link } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { imageURL, title } = category;
  return (
    <div className="directory-item-container">
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      />
      <div className="directoryBody-container">
        <Link to={`shop/${title.toLowerCase()}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
