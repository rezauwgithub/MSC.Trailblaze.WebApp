import React, { Component } from 'react';
import { Card, CardTitle } from 'react-md';

import CompilerSelectField from './Add_Instance/CompilerSelectField';
import ExistingInstancesTable from './Existing_Instances/ExistingInstancesTable';
import AddButton from './Add_Instance/AddButton';
import DeleteButton from './Existing_Instances/DeleteButton';
import ValidateButton from './Existing_Instances/ValidateButton';


export default class Define extends Component {
  render() {
    return (
      <div className="md-grid md-text-container">
        <h2 className="md-cell md-cell--12">
          Define
        </h2>
        <Card className="md-grid--12">
          <AddButton />
          <CardTitle title="Add Instance" />
          <CompilerSelectField />
        </Card>
        <Card className="md-grid--12">
          <DeleteButton />
          <ValidateButton />
          <CardTitle title="Existing Instances" />
          <ExistingInstancesTable />
        </Card>
      </div>
    );
  }
}