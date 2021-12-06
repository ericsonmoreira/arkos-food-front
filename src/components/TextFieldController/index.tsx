/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField, TextFieldProps } from '@mui/material';
import { Controller } from 'react-hook-form';

interface TextFieldControllerProps {
  control: any;
  name: string;
}

const TextFieldController: React.FC<TextFieldControllerProps & TextFieldProps> =
  (props) => {
    const { name, control, ...rest } = props;

    return (
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { invalid, error } }) => (
          <TextField
            {...field}
            {...rest}
            variant="outlined"
            fullWidth
            error={invalid}
            helperText={error?.message}
          />
        )}
      />
    );
  };

export default TextFieldController;
