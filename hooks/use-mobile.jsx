import * as React from "react"

const MOBILE_BREAKPOINT = 768
const TABLET_BREAKPOINT = 1024
const LAPTOP_BREAKPOINT = 1200

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange);
  }, [])

  return !!isMobile
}

export function useDeviceType() {
  const [deviceType, setDeviceType] = React.useState("desktop")

  React.useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth
      if (width < MOBILE_BREAKPOINT) {
        setDeviceType("mobile")
      } else if (width < TABLET_BREAKPOINT) {
        setDeviceType("tablet")
      } else if (width < LAPTOP_BREAKPOINT) {
        setDeviceType("laptop")
      } else {
        setDeviceType("desktop")
      }
    }

    updateDeviceType()
    window.addEventListener("resize", updateDeviceType)
    return () => window.removeEventListener("resize", updateDeviceType)
  }, [])

  return deviceType
}
