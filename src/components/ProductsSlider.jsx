import React, {useEffect, useState} from "react";
import Spinner from "../Spinner";
import useFetch from "../services/useFetch";
import PageNotFound from "../PageNotFound";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";

// Import Swiper React components
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/autoplay/autoplay";

const styles = {
  cardProduct:
    "product flex flex-col justify-between items-center pt-2 rounded-xl transtion duration-200 w-[100%]  h-[100%]",
  containerCards: "flex justify-start gap-8 gap-x-6 my-4 flex-wrap mt-10",
  sectionFilters: "flex justify-between  p-4 bg-white font-bold",
};

function SlideProduct({p}) {
  return (
    <div key={p.id} className={styles.cardProduct} id="prodauct">
      <img
        src={`/images/${p.image}`}
        alt={p.name}
        className="imgSlide  sm:w-64 sm:h-64 w-[120px] h-[120px] cursor-grab"
      />
    </div>
  );
}

export default function ProductsSlider() {
  const {data: products, loading, error} = useFetch("products");
  const [autoPlaySlider, setAutoPlaySlider] = useState(false);
  useEffect(() => {
    setAutoPlaySlider(true);

    return () => {
      setAutoPlaySlider(false);
    };
  }, []);

  if (error) throw error;
  if (loading) return <Spinner />;

  const productsSort = products
    .sort((a, b) => {
      if (a.numberSell > b.numberSell) {
        return -1;
      } else if (a.numberSell < b.numberSell) {
        return 1;
      } else {
        return 0;
      }
    })
    .reverse();

  return (
    <div
      id="productsSlider-sec"
      className="flex justify-between items-center gap-x-2 mt-10 px-8"
    >
      {products.length === 0 ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              EffectFade,
              Autoplay,
            ]}
            spaceBetween={4}
            slidesPerView={3}
            navigation
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            speed={400}
            loop={true}
            onSlideChange={() => console.log("change")}
          >
            <div>
              {productsSort.map(p => {
                return (
                  <SwiperSlide
                    className="flex justify-center items-center my-20"
                    key={p.id}
                  >
                    <SlideProduct p={p} />
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </React.Fragment>
      )}
    </div>
  );
}
