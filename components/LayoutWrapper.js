import Header from '@/components/Header'
import Footer from '@/components/Footer'

const LayoutWrapper = ({ children }) => {
  return (
    <div>
      <video
        className="fixed h-full max-h-full w-full max-w-full object-cover"
        src="/background.mp4"
        autoPlay={true}
        loop={true}
        muted={true}
      />
      <div className="fixed h-full max-h-full w-full max-w-full bg-[#00000077]" />
      <div className="flex h-screen flex-col items-center justify-between">
        <Header />
        <main className="z-10 mb-auto">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default LayoutWrapper
