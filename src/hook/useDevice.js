import { useEffect, useState } from 'react'

export const useDevice = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const isTablet = windowWidth < 1024
  const isLayout = windowWidth < 1200
  const isHeader = windowWidth < 1280
  const isPcSD = windowWidth < 1650
  const isMobile = windowWidth < 768
  const isTabletNew = windowWidth < 992

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    isTabletNew,
    isLayout,
    isMobile,
    isPcSD,
    isTablet,
    isHeader,
    windowWidth,
    windowHeight,
  }
}
