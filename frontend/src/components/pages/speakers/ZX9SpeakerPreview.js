import { Box } from '@chakra-ui/react';
import BaseProductPreview from '../../shared/productPreview/BaseProductPreview';

const ZX9SpeakerPreview = ({ productPreviewData }) => {
  return (
    <Box w="100%">
      <BaseProductPreview productPreviewData={productPreviewData} />
    </Box>
  );
};

export default ZX9SpeakerPreview;
