import classNames from 'classnames'
import {
  type FocusEventHandler,
  type ChangeEventHandler,
  type HTMLInputTypeAttribute,
} from 'react'

type Props = {
  className?: string
  placeholder?: string
  defaultValue?: string | number
  value?: string | number
  type?: HTMLInputTypeAttribute
  onChange?: ChangeEventHandler<HTMLInputElement>
  onChangeText?: (text: string) => void
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  disabled?: boolean
}

export const Input = ({
  className,
  placeholder,
  value,
  defaultValue,
  type,
  onChange,
  onChangeText,
  onFocus,
  onBlur,
  disabled,
  ...props
}: Props) => {
  return (
    <input
      placeholder={placeholder}
      className={classNames(
        'min-h-[3rem] w-full rounded-md border-2 border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700 px-3 text-gray-600 focus:border-indigo-500 focus:outline-none disabled:bg-slate-200',
        className
      )}
      type={type}
      defaultValue={defaultValue}
      value={value}
      onChange={(e) => {
        onChange?.(e)
        onChangeText?.(e.target.value)
      }}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      {...props}
    />
  )
}
