import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryBlock } from './directory.styles';

const Directory = ({ categories }) => {
  return (
    <DirectoryBlock>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryBlock>
  );
};

export default Directory;
