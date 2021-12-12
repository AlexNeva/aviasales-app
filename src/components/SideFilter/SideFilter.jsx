import React from 'react';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import classes from './SideFilter.module.scss'

function SideFilter() {
  const checkboxes = [
    { id: 'all', title: 'Все' },
    { id: '0-transfer', title: 'Без пересадок' },
    { id: '1-transfer', title: '1 пересадка' },
    { id: '2-transfer', title: '2 пересадки' },
    { id: '3-transfer', title: '3 пересадки' },
  ]
  return (
    <div className={classes['side-filter']}>
      <div className={classes["side-filter__title"]}>
        Количество пересадок
      </div>
      <div className={classes["side-filter__checkboxes"]}>
        {
          checkboxes.map(checkbox => <CustomCheckbox key={checkbox.id} title={checkbox.title} label={checkbox.id} />)
        }
      </div>
    </div>
  );
}

export default SideFilter;