import { useNavigate } from 'react-router-dom';
import {
  BgImage,
  DirectoryBody,
  DirectoryItemBlock,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageURL, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemBlock onClick={onNavigateHandler}>
      <BgImage imageUrl={imageURL} />
      <DirectoryBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBody>
    </DirectoryItemBlock>
  );
};

export default DirectoryItem;
