import './globals.css'

// metadata is a reserved name, it's an object that contains what is usually in the html headers, applied to this layout
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
