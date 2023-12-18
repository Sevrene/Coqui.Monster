import Header from '@/components/layout/header';

/**
 * The Home component is the main page of the application.
 *
 * @returns {ReactNode} The rendered Home component.
 */
export default function Home() {
  return (
    <>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: '1',
          margin: '0',
        }}
      >
        <Header />
        <div
          style={{ backgroundColor: 'purple', width: '100%', height: '3000px' }}
        ></div>
        <div
          style={{ backgroundColor: 'green', width: '100%', height: '100px' }}
        ></div>
        <div
          style={{ backgroundColor: 'blue', width: '100%', height: '100px' }}
        ></div>
      </main>
    </>
  );
}
