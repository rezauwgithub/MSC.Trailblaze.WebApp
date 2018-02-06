import React from 'react';
import { upperFirst } from 'lodash/string';
import {
  DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
  EditDialogColumn,
  SelectFieldColumn,
} from 'react-md';

import desserts from '../../../constants/sampleData/desserts';

const headers = Object.keys(desserts[0]).map((name, i) => ({
  key: name,
  name: upperFirst(name),
  numeric: i > 1,
  selectColumnHeader: i === 1,
}));

const types = desserts.reduce((list, dessert) => {
  if (list.indexOf(dessert.type) === -1) {
    list.unshift(dessert.type);
  }

  return list;
}, ['Other']);

const ExistingInstancesTable = () => (
  <DataTable baseId="table-with-interactions">
    <TableHeader>
      <TableRow>
        {headers.map(({ name, ...props }, i) => <TableColumn {...props} grow={i === 0}>{name}</TableColumn>)}
      </TableRow>
    </TableHeader>
    <TableBody>
      {desserts.map(({ name, type, calories, fat, carbs, protein, sodium, calcium, iron }) => (
        <TableRow key={name}>
          <EditDialogColumn defaultValue={name} inline inlineIcon={null}/>
          <SelectFieldColumn menuItems={types} defaultValue={type} />
          <EditDialogColumn defaultValue={calories} inline inlineIcon={null} />
          <TableColumn numeric>{fat}</TableColumn>
          <TableColumn numeric>{carbs}</TableColumn>
          <TableColumn numeric>{protein}</TableColumn>
          <TableColumn numeric>{sodium}</TableColumn>
          <TableColumn numeric>{calcium}</TableColumn>
          <TableColumn numeric>{iron}</TableColumn>
        </TableRow>
      ))}
    </TableBody>
  </DataTable>
);

export default ExistingInstancesTable;