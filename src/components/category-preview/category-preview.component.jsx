import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import {
  CategoryPreviewBlock,
  Preview,
  Title,
} from './category-preview.styles';
const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewBlock>
      <h2>
        <Link to={title}>
          <Title>{title.toUpperCase()}</Title>
        </Link>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewBlock>
  );
};

export default CategoryPreview;
