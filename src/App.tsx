import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { BoardPage } from './pages/BoardPage'
import { CommunityPage } from './pages/CommunityPage'
import { ContactPage } from './pages/ContactPage'
import { EventsPage } from './pages/EventsPage'
import { HomePage } from './pages/HomePage'

const routeMetadata: Record<
  string,
  {
    title: string
    description: string
  }
> = {
  '/': {
    title: 'TNCCMG | Home',
    description:
      'Master Gardeners of Cheatham County sharing horticulture education, events, and community service opportunities.',
  },
  '/events': {
    title: 'TNCCMG | Events',
    description:
      'View upcoming TNCCMG events, meeting schedules, and links to meeting minutes and supporting documents.',
  },
  '/executive-board': {
    title: 'TNCCMG | Executive Board & Committee',
    description:
      'Meet the TNCCMG executive board and committee leaders serving the gardening community in Cheatham County.',
  },
  '/community': {
    title: 'TNCCMG | Community',
    description:
      'Explore intern resources, neighboring county pages, and featured community projects led by TNCCMG.',
  },
  '/contact': {
    title: 'TNCCMG | Contact',
    description:
      'Contact TNCCMG by form, phone, or email for volunteer information, questions, and partnership inquiries.',
  },
}

function useRouteMetadata() {
  const location = useLocation()

  useEffect(() => {
    const metadata = routeMetadata[location.pathname] ?? routeMetadata['/']
    document.title = metadata.title

    let descriptionElement = document.querySelector('meta[name="description"]')

    if (!descriptionElement) {
      descriptionElement = document.createElement('meta')
      descriptionElement.setAttribute('name', 'description')
      document.head.append(descriptionElement)
    }

    descriptionElement.setAttribute('content', metadata.description)
  }, [location.pathname])
}

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

function App() {
  useRouteMetadata()

  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/executive-board" element={<BoardPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
