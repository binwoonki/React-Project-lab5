import React from 'react';
import classNames from 'classnames';
import classes from './Input.module.scss';
import type { DebouncedFunc } from 'lodash';

interface Props {
  maxWidthValue: string | number;
  heightValue: string | number;
  labelText: string;
  placeHolder?: string;
  isA11yHidden?: boolean;
  className?: string;
  type?: string;
  onChange?: DebouncedFunc<() => void>;
  disabled?: boolean;
  value?: string;
}

export function Input({
  maxWidthValue,
  heightValue,
  labelText,
  placeHolder,
  isA11yHidden,
  className,
  type,
  disabled,
  onChange,
  value,
}: Props) {
  const inputStyle = {
    maxWidth: maxWidthValue,
    height: heightValue,
  };

  return (
    <React.Fragment>
      <label
        htmlFor={labelText}
        aria-label={labelText + ' 라벨'}
        className={classNames(classes.inputLabel, className, {
          ['a11yHidden']: isA11yHidden,
        })}
      >
        {labelText}
      </label>
      <input
        type={type}
        id={labelText}
        aria-label={labelText + ' 입력'}
        className={classNames(classes['inputList'], className)}
        style={inputStyle}
        placeholder={placeHolder}
        onChange={onChange}
        required
        disabled={disabled}
        value={value}
      />
    </React.Fragment>
  );
}
