const colorSolid = {
  name: 'colorSolid',
  title: 'Background Color',
  type: 'color',
  validation: (Rule) => Rule.required(), // Required custom validation as validation only checks for the existence of the field, not it actually being properly set
  hidden: ({ parent }) => parent?.type !== 'solid',
};

export default colorSolid;
