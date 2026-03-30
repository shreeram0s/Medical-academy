import { useEffect, useRef, useState } from 'react'
import './App.css'

const SOURCE_ORIGIN = 'https://erebuniacademy.am'

function absolutizeLegacyMarkup(html) {
  let next = html

  next = next.replace(/href=(['"])\/(?!\/)/g, `href=$1${SOURCE_ORIGIN}/`)
  next = next.replace(/src=(['"])\/(?!\/)/g, `src=$1${SOURCE_ORIGIN}/`)
  next = next.replace(/content=(['"])\/(?!\/)/g, `content=$1${SOURCE_ORIGIN}/`)

  if (!next.includes('<base ')) {
    next = next.replace('<head>', `<head><base href="${SOURCE_ORIGIN}/">`)
  }

  return next
}

function App() {
  const iframeRef = useRef(null)
  const [srcDoc, setSrcDoc] = useState('')
  const [frameHeight, setFrameHeight] = useState(1600)

  useEffect(() => {
    let active = true

    fetch('/old-home.html')
      .then((response) => response.text())
      .then((html) => {
        if (active) {
          setSrcDoc(absolutizeLegacyMarkup(html))
        }
      })
      .catch(() => {
        if (active) {
          setSrcDoc('<!doctype html><html><body><p>Unable to load legacy homepage.</p></body></html>')
        }
      })

    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    if (!srcDoc) {
      return undefined
    }

    const resizeFrame = () => {
      const iframe = iframeRef.current
      const doc = iframe?.contentDocument

      if (!doc) {
        return
      }

      const bodyHeight = doc.body?.scrollHeight || 0
      const htmlHeight = doc.documentElement?.scrollHeight || 0
      const nextHeight = Math.max(bodyHeight, htmlHeight, 1200)
      setFrameHeight(nextHeight)
    }

    const timer = window.setInterval(resizeFrame, 1000)
    window.setTimeout(resizeFrame, 150)
    window.setTimeout(resizeFrame, 800)
    window.setTimeout(resizeFrame, 1800)

    return () => {
      window.clearInterval(timer)
    }
  }, [srcDoc])

  return (
    <div className="legacy-shell">
      <iframe
        ref={iframeRef}
        className="legacy-frame"
        title="Erebuni Medical Academy Foundation legacy homepage"
        srcDoc={srcDoc}
        style={{ height: `${frameHeight}px` }}
      />
    </div>
  )
}

export default App
