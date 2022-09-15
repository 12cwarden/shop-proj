import { Link } from 'react-router-dom';
import {
  BgImage,
  DirectoryBody,
  DirectoryItemBlock,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageURL, title } = category;
  return (
    <DirectoryItemBlock>
      <BgImage imageUrl={imageURL} />
      <DirectoryBody>
        <Link to={`shop/${title.toLowerCase()}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
      </DirectoryBody>
    </DirectoryItemBlock>
  );
};

export default DirectoryItem;
