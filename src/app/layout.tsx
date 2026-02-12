import './globals.css'

export const metadata = {
  title: 'Whiteboard',
  description: 'This is an application that draws diagrams as if handwritten.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
