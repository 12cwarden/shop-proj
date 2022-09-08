import './category-item.styles.scss';

const CategoryItem = ({category}) => {
    const {imageURL, title} = category;
    return (
        <div className="category-container">
          <div className='bg-image' style={{
            backgroundImage: `url(${imageURL})`,
          }} />
          <div className="categoryBody-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
    )
}

export default CategoryItem