import { FiPlus } from 'react-icons/fi'
import styled from './FAQItem.module.css'
import { Button } from '../../Button/Button'
import { useTranslation } from 'react-i18next'

type FAQItemDescription = {
  id: number
  description?: string
  subdescription?: string
}

type FAQItemData = {
  id: number
  active: boolean
  title: string
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
        id="faq-button-1"
        aria-expanded="true"
        aria-controls="faq-1"
        onClick={() => onSelectFaq(id)}
      >
        {t(title)} <FiPlus className={styled.icon} />
      </Button>
      {active && (
        <div
          className={styled['faq-description-container']}
          aria-labelledby="faq-button-1"
          id="faq-1"
        >
          {descriptions.map((description) => (
            <>
              {description.description && (
                <p key={description.id} className={styled['faq-description']}>
                  {t(description.description)}
                </p>
              )}
              {description.subdescription && (
                <p key={description.id} className={styled['faq-description']}>
                  {t(description.subdescription)}
                </p>
              )}
            </>
          ))}
        </div>
      )}
    </li>
  )
}
