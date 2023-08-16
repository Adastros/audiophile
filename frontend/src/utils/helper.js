import { getPageContent } from './requests';

const getContent = async fileName => await getPageContent(fileName);

export { getContent };
