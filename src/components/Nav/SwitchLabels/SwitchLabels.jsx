import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { persistConfig } from '../../../redux/store';
import { getStoredState } from 'redux-persist';

export function SwitchLabels() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: true,
  });

  const handleChange = (event) => {
    console.log(getStoredState(persistConfig));
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Local Storage (all messages)"
      />
    </FormGroup>
  );
}
