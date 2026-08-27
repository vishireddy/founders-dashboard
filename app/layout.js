import './globals.css'

export const metadata = {
  title: 'Draper University India',
  description: 'Build the future with Draper University India.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
