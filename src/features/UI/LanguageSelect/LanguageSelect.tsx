import { HiLanguage } from 'react-icons/hi2'
import { resources } from '../../../lib/i18n/i18n'
import styled from './LanguageSelect.module.css'
import { isLanguage, useLanguage } from '../../../context/LanguageContext'
import { ChangeEvent } from 'react'

export const LanguageSelect = () => {
  const { language, changeLanguage } = useLanguage()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const languageTarget = e.target.value

    if (!isLanguage(languageTarget)) return

    changeLanguage(languageTarget)
  }

  return (
    <div className={styled['language-select__container']}>
      <HiLanguage className={styled['language-select__icon']} />
      <select className={styled['language-select']} onChange={handleChange} defaultValue={language}>
        {Object.entries(resources).map(([languageOption, options]) => (
          <option key={languageOption} value={languageOption}>
            {options.title}
          </option>
        ))}
      </select>
    </div>
  )
}
