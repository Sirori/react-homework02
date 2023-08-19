const productData = [
  {
    id: 'listItem1',
    photo: '/listItem1.png',
    title: 'tmb Over Fit Half T-shirts [ White ]',
    price: 89000
  },
  {
    id: 'product-2',
    photo: '/listItem2.png',
    title: 'tmb Over Fit Half T-shirts [ Black ]',
    price: 89000
  },
  {
    id: 'product-3',
    photo: '/listItem3.png',
    title: 'TRMNGBD Ball Cap [ Black Denim ]',
    price: 63000
  },
  {
    id: 'product-4',
    photo: '/listItem4.png',
    title: 'TRMNGBD Ball Cap [ Black Cotton ]',
    price: 63000
  },
  {
    id: 'product-5',
    photo: '/listItem5.png',
    title: 'aeae x TREEMINGBIRD Web Logo Mesh Cap [ Leather / Cotton ]',
    price: 59000
  },
  {
    id: 'product-6',
    photo: '/listItem6.png',
    title: 'aeae x TREEMINGBIRD Web Logo Mesh Cap [ Leather ]',
    price: 69000
  },
  {
    id: 'product-7',
    photo: '/listItem7.png',
    title: 'Tree Overfit Long Sleeve T-shirts [ White ]',
    price: 119000
  },
  {
    id: 'product-8',
    photo: '/listItem8.png',
    title: 'Tree Overfit Long Sleeve T-shirts [ Black ]',
    price: 119000
  },
  {
    id: 'product-9',
    photo: '/listItem9.png',
    title: 'Half Neck 2-way Windbreaker Jacket [ Khaki Gray ]',
    price: 249000
  },
];


function ProductList() {
  return (
    <section className="w-full bg-gray-50 px-[15%] py-14">
      <h2 className="text-center font-medium text-4xl">PRODUCTS</h2>
      <ul className="flex flex-row flex-wrap justify-between py-16 ">
        {
          productData.map((product) => (
            <li key={product.id} className="ListItem w-[26%] flex flex-col justify-between mb-8">
              <a href="#" className="w-full">
                <figure className="Figure">
                  <img src={product.photo} alt="" className="w-full h-[380px]" />
                  <figcaption className="flex flex-col gap-2">
                    <span className="title text-base mt-3">{product.title}</span>
                    <span className="price text-sm">KRW {product.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span>
                  </figcaption>
                </figure>
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default ProductList;