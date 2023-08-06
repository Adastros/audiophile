import { Box } from '@chakra-ui/react';
import BaseProductPreview from './BaseProductPreview';

const XX99MarkIIPreview = ({ productPreviewData }) => {
  return (
    <Box w="100%" marginTop="64px">
      <BaseProductPreview productPreviewData={productPreviewData} />
    </Box>
  );
};

export default XX99MarkIIPreview;
