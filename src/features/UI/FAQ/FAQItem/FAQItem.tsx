import { FiPlus } from 'react-icons/fi'
import styled from './FAQItem.module.css'
import { Button } from '../../Button/Button'
import { useTranslation } from 'react-i18next'
import { FAQData } from '../FAQData'

type FAQItemDescription = {
  id: number
  description: (typeof FAQData)[number]['descriptions'][number]['description']
}

type FAQItemData = {
  id: number
  active: boolean
  title: (typeof FAQData)[number]['title']
  descriptions: FAQItemDescription[]
}

type FAQItemProps = {
  onSelectFaq: (id: number) => void
}

export const FAQItem = ({
  id,
  title,
  active,
  descriptions,
  onSelectFaq,
}: FAQItemData & FAQItemProps) => {
  const { t } = useTranslation()
  return (
    <li className={`${styled['faq-item']} ${active && styled.active}`}>
      <Button
        modifier="faq"
        id={`faq-button-${id}`}
        aria-expanded={active}
        aria-controls={`faq-${id}`}
        onClick={() => onSelectFaq(id)}
      >
        {t(title)} <FiPlus className={styled.icon} />
      </Button>

      <div
        className={styled['faq-description-container']}
        aria-labelledby={`faq-button-${id}`}
        id={`faq-${id}`}
      >
        {descriptions.map((description) => (
          <p className={styled['faq-description']} key={description.id}>
            {t(description.description)}
          </p>
        ))}
      </div>
    </li>
  )
}
