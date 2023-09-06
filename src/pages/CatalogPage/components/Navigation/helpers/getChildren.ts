import { ICategoryData } from 'types';

type GetChildren = (
  data: ICategoryData[] | null,
  parent: Pick<ICategoryData, 'id' | 'slug' | 'name'>
) => ICategoryData[] | undefined;

const getChildren: GetChildren = (data, parent) => {
  const children = data?.filter((cat) => cat.parent === parent.id);

  return children?.map((child) => {
    const { slug, name } = child;

    return {
      ...child,
      slug: `${parent.slug}/${slug}`,
      name: name.replace(` ${parent.name}`, ''),
    };
  });
};

export default getChildren;
