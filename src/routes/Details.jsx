import { Header } from '../components'

import { useTheme } from "../hooks/useTheme";

const Details = () => {
  const {theme, toggleTheme } = useTheme()
  return (
    <div className="bg-Light dark:bg-Dark" >
      <Header theme={theme} toggleTheme={toggleTheme} />
    </div>
  )
}

export default Details