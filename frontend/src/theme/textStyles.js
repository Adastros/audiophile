// Due to some bugs in Chakra UI, certain css
// properties are not applied if they are not
// defined in Chakra UI. One way around it is to
// name the css style directly but error messages
// about using it due to kebab-case of css.
//
// See
// https://github.com/chakra-ui/chakra-ui/discussions/3612
// https://github.com/chakra-ui/chakra-ui/issues/3884
//
// For now, these styles will only apply to Text components
const textStyles = {
  textStyles: {
    thumbnailText: {
      fontSize: { base: '15px', lg: '18px' },
      fontWeight: '700',
      lineHeight: 'normal',
      letterSpacing: { base: '1.071px', md: '1.286px' },
      textTransform: 'uppercase',
    },
  },
};

export default textStyles;