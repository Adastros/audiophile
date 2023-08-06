import { useLoaderData } from 'react-router-dom';
import BaseProductCategoryPage from '../../shared/baseProductCategoryPage.js/BaseProductCategoryPage';
import ProductCategoryHeading from '../../shared/productCategories/ProductCategoryHeading';
import XX99MarkIIPreview from './XX99MarkIIPreview';
import XX99MarkIPreview from './XX99MarkIPreview';
import XX59Preview from './XX59ProductPreview';

const HeadphonesPage = () => {
  const headphonePageContent = useLoaderData();
  const productCategory = headphonePageContent.productCategory;
  const productCategoryHeading = (
    <ProductCategoryHeading productCategory={productCategory} />
  );
  const XX99MarkIIPreviewData = headphonePageContent.products.primary;
  const XX99MarkIPreviewData = headphonePageContent.products.secondary;
  const XX59PreviewData = headphonePageContent.products.tertiary;
  const XX99MarkIIKey = headphonePageContent.products.primary.name;
  const XX99MarkIKey = headphonePageContent.products.secondary.name;
  const XX59Key = headphonePageContent.products.tertiary.name;

  const productPreviewComponents = [
    <XX99MarkIIPreview
      key={XX99MarkIIKey}
      productPreviewData={XX99MarkIIPreviewData}
    />,
    <XX99MarkIPreview
      key={XX99MarkIKey}
      productPreviewData={XX99MarkIPreviewData}
    />,
    <XX59Preview key={XX59Key} productPreviewData={XX59PreviewData} />,
  ];

  return (
    <BaseProductCategoryPage
      productCategoryHeading={productCategoryHeading}
      productPreviewComponents={productPreviewComponents}
    />
  );
};

export default HeadphonesPage;
