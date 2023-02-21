import {
  useMemo,
  useState,
  type ChangeEvent,
  type ChangeEventHandler,
  type PropsWithChildren,
} from 'react'
import classNames from 'classnames'
import { HiOutlineChevronDown } from 'react-icons/hi'

import { useDisclosure, useOnClickOutside } from '@/hooks'
import { Input } from '@/components'

type OptionType = {
  label: string
  value: any
}

type Props = {
  className?: string
  name?: string
  placeholder?: string
  value?: any
  text?: any
  onChange?: ChangeEventHandler<HTMLInputElement>
  onChangeText?: (text: string) => void
  options?: OptionType[]
  clearable?: boolean
  disabled?: boolean
}

export const Select = ({
  className,
  name,
  placeholder,
  value,
  text,
  onChange,
  onChangeText,
  options,
  disabled,
}: Props) => {
  const [search, setSearch] = useState(text ?? '')
  const { isOpen, open, close } = useDisclosure()
  const containerRef = useOnClickOutside(close)

  const filteredOptions = useMemo(
    () =>
      options?.filter((option) =>
        option.label.match(
          new RegExp(
            (onChangeText ? text : search).replace(/[^a-zA-Z\d\s:]/g, ''),
            'i'
          )
        )
      ) || [],
    [text]
  )

  return (
    <div
      className={classNames('relative w-full', className)}
      ref={containerRef}
    >
      <div className="relative">
        <Input
          placeholder={placeholder}
          value={text}
          onChange={(e) => setSearch(e.target.value)}
          onChangeText={onChangeText}
          onFocus={open}
          disabled={disabled}
        />
        {value && (
          <div
            className={classNames(
              'pointer-events-none absolute inset-1 overflow-hidden whitespace-nowrap text-black dark:text-white bg-white dark:bg-slate-800 p-2',
              { 'bg-slate-200': disabled }
            )}
          >
            {options?.find((option) => option.value === value)?.label || value}
          </div>
        )}
        {!disabled && (
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2 text-black dark:text-white">
            <HiOutlineChevronDown className="text-xl" />
          </span>
        )}
      </div>

      {isOpen && filteredOptions.length > 0 && (
        <ul className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {filteredOptions.map((option) => (
            <SelectOption
              key={option.value}
              isSelected={option.value === value}
              onClick={() => {
                const target = { value: option.value, name: name ?? '' }
                close()
                return onChange?.({
                  target,
                } as ChangeEvent<HTMLInputElement>)
              }}
            >
              {option.label}
            </SelectOption>
          ))}
        </ul>
      )}
    </div>
  )
}

export const SelectOption = ({
  children,
  isSelected,
  onClick,
}: PropsWithChildren<{
  isSelected: boolean
  onClick?: () => void
}>) => {
  return (
    <li
      className={classNames(
        'relative cursor-pointer select-none py-2 pl-3 pr-6 text-gray-900 hover:bg-slate-100 hover:text-black',
        { 'bg-indigo-500 text-white': isSelected }
      )}
      onClick={onClick}
    >
      <div className="flex items-center truncate pl-2 font-normal">
        {children}
      </div>
    </li>
  )
}
