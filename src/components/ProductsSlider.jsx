import React, {useEffect, useState} from "react";
import Spinner from "../Spinner";
import useFetch from "../services/useFetch";
import PageNotFound from "../PageNotFound";
import {Navigation, Pagination, Scrollbar, A11y} from "swiper";
import SwiperCore, {Autoplay, EffectFade} from "swiper";

// Import Swiper React components
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";
import "swiper/modules/pagination/pagination.min.css";

const styles = {
  cardProduct:
    "product flex flex-col justify-between items-center pt-2 rounded-xl transtion duration-200 w-80 h-full",
  containerCards: "flex justify-start gap-8 gap-x-6 my-4 flex-wrap mt-10",
  sectionFilters: "flex justify-between  p-4 bg-white font-bold",
};

function SlideProduct({p}) {
  return (
    <div key={p.id} className={styles.cardProduct} id="prodauct">
      <img
        src={`/images/${p.image}`}
        alt={p.name}
        className="imgSlide w-[300px] h-[300px]"
      />
    </div>
  );
}

export default function ProductsSlider() {
  const {
    data: products,
    loading,
    error,
  } = useFetch("products?category=allProducts");
  const [autoPlaySlider, setAutoPlaySlider] = useState(false);
  useEffect(() => {
    setAutoPlaySlider(true);

    return () => {
      setAutoPlaySlider(true);
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
        <PageNotFound />
      ) : (
        <React.Fragment>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            spaceBetween={4}
            slidesPerView={3}
            navigation
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            autoplay={
              autoPlaySlider
                ? {
                    delay: 2000,
                    disableOnInteraction: false,
                  }
                : false
            }
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
