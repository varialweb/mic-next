import '../globals.css'

export default function LandingPageLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        nav
        {children}
        footer
      </body>
    </html>
  )
}