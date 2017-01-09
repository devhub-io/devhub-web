import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const SiteType = new ObjectType({
  name: 'Site',
  fields: {
    id: { type: new NonNull(ID) },
    title: { type: StringType },
    url: { type: StringType },
    category: { type: StringType },
  },
});

export default SiteType;
