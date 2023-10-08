import { HiLanguage } from 'react-icons/hi2'
import styled from './LanguageSelect.module.css'

export const LanguageSelect = () => {
  return (
    <div className={styled['language-select__container']}>
      <HiLanguage className={styled['language-select__icon']} />
      <select className={styled['language-select']}>
        <option> Polski </option>
        <option> English </option>
      </select>
    </div>
  )
}
