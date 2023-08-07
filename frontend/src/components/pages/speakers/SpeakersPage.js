import { useLoaderData } from 'react-router-dom';
import BaseProductCategoryPage from '../../shared/baseProductCategoryPage.js/BaseProductCategoryPage';
import ZX9SpeakerPreview from './ZX9SpeakerPreview';
import ZX7SpeakerPreview from './ZX7SpeakerPreview';

const SpeakersPage = () => {
  const headphonePageContent = useLoaderData();
  const productCategory = headphonePageContent.productCategory;
  const ZX9SpeakerPreviewData = headphonePageContent.products.primary;
  const ZX7SpeakerPreviewData = headphonePageContent.products.secondary;
  const ZX9SpeakerKey = headphonePageContent.products.primary.name;
  const ZX7SpeakerKey = headphonePageContent.products.secondary.name;

  const productPreviewComponents = [
    <ZX9SpeakerPreview
      key={ZX9SpeakerKey}
      productPreviewData={ZX9SpeakerPreviewData}
    />,
    <ZX7SpeakerPreview
      key={ZX7SpeakerKey}
      productPreviewData={ZX7SpeakerPreviewData}
    />,
  ];

  return (
    <BaseProductCategoryPage
      productCategory={productCategory}
      productPreviewComponents={productPreviewComponents}
    />
  );
};

export default SpeakersPage;
