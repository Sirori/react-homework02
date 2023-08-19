# 2주차 과제
## - 간단한 페이지 시안을 React 컴포넌트를 조립하여 구현하기

---

#### 주제

평소 좋아하는 쇼핑몰의 데이터를 이용하여 간단한 쇼핑몰 메인페이지를 만들어보았습니다.

#### 구성

 - main < App < Home < 하위 컴포넌트(Header, MainBanner, MainProducts, ProductsList, Footer순)

#### 결과물

![image](https://github.com/Sirori/learn-react/assets/116864776/6cb28a45-0a45-4b2e-b510-7aa5fc00c0b4)


#### 설명
- 스타일링은 tailwind를 사용하였습니다.
<br>
##### header 영역

```jsx
<header className="h-20 flex flex-row justify-between w-full items-center px-5">
      <h1 className="font-medium text-2xl">
        <a href="#">TREEMING BIRD</a>
      </h1>
      <div>
        <ul className="flex flex-row text-sm gap-3">
          <li className="hover:bg-neutral-200 p-2 duration-200 rounded-md">
            <a href="#">SHOP</a>
          </li>
          <li className="hover:bg-neutral-200 p-2 duration-200 rounded-md">
            <a href="#">COLLECTION</a>
          </li>
          <li className="hover:bg-neutral-200 p-2 duration-200 rounded-md">
            <a href="#">ABOUT</a>
          </li>
          <li className="hover:bg-neutral-200 p-2 duration-200 rounded-md">
            <a href="#">COMMUNITY</a>
          </li>
          <li className="hover:bg-neutral-200 p-2 duration-200 rounded-md">
            <a href="#">SEARCH</a>
          </li>
        </ul>
      </div>
    </header>
```

![image](https://github.com/Sirori/learn-react/assets/116864776/0fd93e6d-5e28-46a5-a03d-19e8f2f740fb)
- ul태그로 카테고리 영역을 구성하였고, hover시 배경에 색상이 들어가는 효과 또한 구현하였습니다.

##### MainBanner
```jsx
<div className="w-full h-screen">
  <img src={main} alt="메인 배너" className="w-full h-full opacity-80 hover:opacity-100 transition-all duration-300"  />
</div>
```

- 메인 부분을 전체 이미지로 구현하였고, 평소에는 opacity가 80퍼센트로 되어있으며, hover시 opacity에 변화를 주었습니다.

##### MainProducts
```jsx
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
```

- 메인 상품들은 hover시 opacity가 줄어드는 효과를 넣었으며, height 값은 동일하게 설정하고, width는 각기 이미지 사이즈를 반영하였습니다.

##### ProductsList
```jsx
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
```
- 각 상품들은 ul과 li 태그로 구성하였으며, 각 데이터들은 아래와 같이 배열에 담아 map으로 각 데이터를 가져오고 화면에 랜더링 될 수 있게 하였습니다.
```jsx
{
  id: 'listItem1',
  photo: '/listItem1.png',
  title: 'tmb Over Fit Half T-shirts [ White ]',
  price: 89000
}
```

##### Footer
```jsx
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
```
- footer는 기존 트리밍버드 사이트를 참고하여 가져왔고, 레이아웃도 비슷하게 맞추었습니다.