import { Button, Checkbox, Radio, useToast } from '@sanity/ui';
import { PatchEvent, set } from 'sanity';

import React from 'react';

function InheritWrapper(props) {
  const toast = useToast();

  const handleClear = () => {
    if (props.value === undefined) {
      return;
    }

    try {
      props.onChange(PatchEvent.from(set(undefined)));
      toast.push({
        title: `${props.schemaType?.title} Field Cleared`,
        status: 'info',
        description: <span>Previous Value: <span style={{ color: 'orange' }}>{props.value.toString()}</span></span>,
        duration: 10000, // TODO: Make this configurable in a global config
        closable: true,
      });
    } catch (error) {
      toast.push({
        title: 'Error',
        status: 'error',
        description: `Failed to clear the field: ${error.message}`,
        duration: 10000, // TODO: Make this configurable in a global config
        closable: true,
      });
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      {props.renderDefault(props)}
      <Checkbox 
        label="Override" 
        onChange={handleClear} 
        checked={props.value === undefined} 
      />
      Override
    </div>
  );
}

export default InheritWrapper;
