// import clsx from 'clsx';
import './LabeledInput.css';

import * as React from 'react';

class LabeledInput extends React.PureComponent {

  props: LabeledInputProps

  constructor(props: LabeledInputProps) {
    super(props);
    this.props= props
  }

  public render() {
    const labelClassName = "Label, LabelDisabled: disabled";
    return (
      <div className="LabeledInput">
        <label className={labelClassName} title={this.props.label}>
          {this.props.label}
        </label>
        <input
          aria-label={this.props.label}
          className="Input"
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          value={this.props.value}
          disabled={this.props.disabled}
        />
      </div>
    );
  }
}
export type LabeledInputProps = {
  disabled: boolean,
  label: string,
  name: string,
  onChange: any,
  placeholder: string,
  value: any,
};

export function InputRow(children: any) {
  return <div className="InputRow">{children}</div>;
}

export default LabeledInput;