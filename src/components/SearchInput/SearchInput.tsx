import { useState, useMemo, useEffect } from 'react'
import { Input } from '@pancakeswap/uikit'
import styled from 'styled-components'
import debounce from 'lodash/debounce'
import { useTranslation } from '@pancakeswap/localization'

const StyledInput = styled(Input)`
  margin-left: auto;
  background: transparent;
  border: 1px solid #1ECBDD;
  border-radius: 20px;
  color: white;
  ::placeholder {
    color: white;
  }
  box-shadow: none;
  &:focus {
    box-shadow: none !important;
  } 
`

const InputWrapper = styled.div`
  position: relative;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  initialValue?: string
}

const SearchInput: React.FC<React.PropsWithChildren<Props>> = ({
  onChange: onChangeCallback,
  placeholder = 'Search by name, symbol or address...',
  initialValue,
}) => {
  const [searchText, setSearchText] = useState('')
  const { t } = useTranslation()

  const debouncedOnChange = useMemo(
    () => debounce((e: React.ChangeEvent<HTMLInputElement>) => onChangeCallback(e), 500),
    [onChangeCallback],
  )

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
    debouncedOnChange(e)
  }
  useEffect(() => {
    if (initialValue) {
      setSearchText(initialValue)
    }
  }, [initialValue])

  return (
    <InputWrapper>
      <StyledInput value={searchText} onChange={onChange} placeholder={t(placeholder)} />
    </InputWrapper>
  )
}

export default SearchInput
