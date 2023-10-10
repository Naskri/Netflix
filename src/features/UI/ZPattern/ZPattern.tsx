import { ZPatternItem } from './ZPatternItem/ZPatternItem'
import { ZPatternData } from './ZPatternData'

export const ZPattern = () => {
  return (
    <section>
      {ZPatternData.map((ZPatternItemData) => (
        <ZPatternItem key={ZPatternItemData.id} {...ZPatternItemData} />
      ))}
    </section>
  )
}
