import { genericGroupsWildcard } from "./genericGroups";

const basicTitle = {
  name: 'title',
  title: 'Title',
  type: 'string',
  group: genericGroupsWildcard,
  validation: (Rule) => Rule.required(),
};

export default basicTitle;