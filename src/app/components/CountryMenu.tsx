import React from 'react';

const categoriesArray = [
  { label: 'Türkiye', value: 'tr'},
  { label: 'Amerika', value: 'abd'},
  { label: 'İngiltere', value: 'uk'},
  { label: 'Almanya', value: 'de'}
];

const CountryMenu = (props) => (
  <>
    <h2>Ülkeler</h2>
    <ul>
      {categoriesArray.map((category) =>
        <li>
          <a onClick={() => { props.setCountry(category.value) }}>{category.label}</a>
        </li>
      )}
    </ul>
  </>
);

export default CountryMenu;
