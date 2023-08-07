import { useLoaderData } from 'react-router-dom';
import BaseProductCategoryPage from '../../shared/baseProductCategoryPage.js/BaseProductCategoryPage';
import YX1WirelessEarphonePreview from './YX1WirelessEarphonePreview';

const EarphonesPage = () => {
  const headphonePageContent = useLoaderData();
  const productCategory = headphonePageContent.productCategory;
  const YX1WirelessPreviewData = headphonePageContent.products.primary;
  const YX1WirelessKey = headphonePageContent.products.primary.name;

  const productPreviewComponents = [
    <YX1WirelessEarphonePreview
      key={YX1WirelessKey}
      productPreviewData={YX1WirelessPreviewData}
    />,
  ];

  return (
    <BaseProductCategoryPage
      productCategory={productCategory}
      productPreviewComponents={productPreviewComponents}
    />
  );
};

export default EarphonesPage;
