import React from 'react';
import { CategoryType } from './Header';

type HeaderCategoryProps = {
  category: CategoryType;
  onClick: () => void;
  onHover: () => void;
};

const HeaderCategory = ({
  category,
  onClick,
  onHover,
}: HeaderCategoryProps) => {
  return <div>{category.name}</div>;
};

export default HeaderCategory;
