import { Button } from '../Button/Button'
import { CiSearch } from 'react-icons/ci'
import styled from './Search.module.css'
import { useState } from 'react'

export const Search = () => {
  const [isInputEnabled, setIsInputEnabled] = useState(false)

  return (
    <div className={styled.search}>
      <Button
        modifier="search"
        aria-label="Search a movie"
        onClick={() => setIsInputEnabled((prevInputState) => !prevInputState)}
      >
        <CiSearch />
      </Button>
      {isInputEnabled && (
        <input type="text" placeholder="Movie title" className={styled.search__input} />
      )}
    </div>
  )
}
