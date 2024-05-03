import banner from "./../../../public/assets/images/cover.png";

export default function Hero() {
  return (
    <section className="container">
      {/* <div className="py-4 bg-[url('https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg')] rounded-lg p-4 md:p-12 min-h-[450px] bg-cover grid place-items-center grid-cols-12"> */}
      <div className="col-span-12 md:col-span-6">
        <h1 className="font-bold text-3xl md:text-5xl text-white">
          Choose from thousands of recipes
        </h1>
        <p className="text-white my-4">
          Appropriately integrate technically sound value with scalable
          infomediaries negotiate sustainable strategic theme areas
        </p>
      </div>
      {/* </div> */}
    </section>
  );
}
