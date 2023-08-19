function Footer() {

  return (
    <footer className="w-full bg-black text-white flex flex-row p-10 justify-between text-center">
      <div className="w-1/4">
        <h3 className="font-medium mb-3">COMPANY</h3>
        <p className="flex flex-col text-xs gap-1">
          <span>Company : Treemingbird | CEO : Min Kyung Kim</span>
          <span>Business Register : 357-81-02830 | On-Line Register : 2022-부산부산진-930</span>
          <span>E-mail : treemingbird@gmail.com</span>
          <address>Address : 47351 13F, 629-10, Jungang-daero, Busanjin-gu, Busan, Republic of Korea</address>
          <span>개인정보관리책임자 : 주식회사 트리밍버드홀딩스</span>
        </p>
      </div>
      <div className="w-1/4">
        <h3 className="font-medium mb-3">INFORMATION</h3>
        <p className="flex flex-col text-xs gap-1">
          <span className="">CS Center : Q&A (Board)</span>
          <span>MON-FRI 13:00-18:00</span>
        </p>
      </div>
      <div className="w-1/4">
        <h3 className="font-medium mb-3">PRIVACY</h3>
        <ul className="flex flex-col text-xs gap-1">
          <li>About us</li>
          <li>Agreement</li>
          <li>Privacy</li>
          <li>Guide</li>
        </ul>
      </div>
      <div className="w-1/4">
        <h3 className="font-medium mb-3">FOLLOW</h3>
        <p className="flex flex-col text-xs gap-1">
          <span>Instagram : treemingbird_official</span>
          <span>Copyright © 2022 TREEMINGBIRD</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer;
