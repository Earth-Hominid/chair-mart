import ImageColumn from '../image-section/ImageColumn';
import Details from '../detail-section/Details';
import { ProductPageSection, ProductPageRow } from './Styles';

const BendtSection = () => {
  return (
    <>
      <ProductPageSection>
        <ProductPageRow>
          <ImageColumn />
          <Details />
        </ProductPageRow>
      </ProductPageSection>
    </>
  );
};

export default BendtSection;
