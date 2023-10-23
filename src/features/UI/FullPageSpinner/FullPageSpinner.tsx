import { Spinner } from '../Spinner/Spinner'
import styled from './FullPageSpinner.module.css'

export const FullPageSpinner = () => {
  return (
    <div className={styled.fullpagespinner}>
      <Spinner />
    </div>
  )
}
