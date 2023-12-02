import { useEffect } from 'react';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2'

import { ButtonIcon } from "../ui/ButtonIcon"

import { useThemeContext } from '../context/ThemeContext'

export const ChangeThemeButton = ({ className }) => {
  const { isDark, toggleDark } = useThemeContext();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark])

  return (
    <ButtonIcon icon={isDark ? <HiOutlineSun /> : <HiOutlineMoon />} onClick={toggleDark} className={className} />
  )
}
