import main from "../assets/main.jpeg"

function MainBanner() {

  return (
    <div className="w-full h-screen">
      <img src={main} alt="메인 배너" className="w-full h-full opacity-80 hover:opacity-100 transition-all duration-300"  />
    </div>
  )
}

export default MainBanner;