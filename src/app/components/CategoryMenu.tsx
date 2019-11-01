import React from 'react';

const categoriesArray = [
  { label: 'İş Dünyası', value: 'business'},
  { label: 'Eğlence', value: 'entertainment'},
  { label: 'Sağlık', value: 'health'},
  { label: 'Bilim', value: 'science'},
  { label: 'Spor', value: 'sports'},
  { label: 'Teknoloji', value: 'technology'}
];

const CategoryMenu = (props) => (
  <>
    <h2>Kategoriler</h2>
    <ul>
      {categoriesArray.map((category) =>
        <li>
          <a onClick={() => { props.setCategory(category.value) }}>{category.label}</a>
        </li>
      )}
    </ul>
  </>
);

export default CategoryMenu;
