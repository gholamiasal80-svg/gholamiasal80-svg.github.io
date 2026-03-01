import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PaperTexture } from "@/components/paper-texture"
import HomePage from "@/pages/HomePage"
import AboutPage from "@/pages/AboutPage"
import WorkPage from "@/pages/WorkPage"
import FineArtPage from "@/pages/FineArtPage"
import ContactPage from "@/pages/ContactPage"
import HeinzPage from "@/pages/work/HeinzPage"

export default function App() {
  return (
    <BrowserRouter>
      <PaperTexture />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/heinz" element={<HeinzPage />} />
        <Route path="/fine-art" element={<FineArtPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
