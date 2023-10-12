import { useState } from 'react'
import styled from './FAQ.module.css'
import { FAQItem } from './FAQItem/FAQItem'
import { FAQData } from './FAQData'

export const FAQ = () => {
  const [selectedFaqID, setSelectedFaqID] = useState<number | null>(null)

  const selectFAQ = (id: number) => {
    setSelectedFaqID(id === selectedFaqID ? null : id)
  }

  return (
    <section className={styled.faq}>
      <h2 className={styled.faq__title}>Często zadawane pytania</h2>
      <ul className={styled.faq__list}>
        {FAQData.map((FAQ) => (
          <FAQItem
            active={selectedFaqID === FAQ.id}
            key={FAQ.id}
            onSelectFaq={selectFAQ}
            {...FAQ}
          />
        ))}
      </ul>
    </section>
  )
}
