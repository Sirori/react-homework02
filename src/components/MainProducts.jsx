import mainAsset1 from '../assets/mainAsset1.jpeg';
import mainAsset2 from '../assets/mainAsset2.jpeg';
import mainAsset3 from '../assets/mainAsset3.jpeg';
import mainAsset4 from '../assets/mainAsset4.jpeg';
import mainAsset5 from '../assets/mainAsset5.jpeg';


function MainProducts() {

  return (
    <section className="bg-neutral-100 pt-12">
      <h2 className="text-center font-medium text-4xl">MAIN PRODUCTS</h2>
      <ul className=" flex flex-row px-10 py-16 justify-between">
        <li className="h-[300px]"><a href="#"><img src={mainAsset1} alt="" className="h-full hover:opacity-80 duration-150" /></a></li>
        <li className="h-[300px]"><a href="#"><img src={mainAsset2} alt="" className="h-full hover:opacity-80 duration-150" /></a></li>
        <li className="h-[300px]"><a href="#"><img src={mainAsset3} alt="" className="h-full hover:opacity-80 duration-150" /></a></li>
        <li className="h-[300px]"><a href="#"><img src={mainAsset4} alt="" className="h-full hover:opacity-80 duration-150" /></a></li>
        <li className="h-[300px]"><a href="#"><img src={mainAsset5} alt="" className="h-full hover:opacity-80 duration-150" /></a></li>
      </ul>
    </section>
  )
}

export default MainProducts;
