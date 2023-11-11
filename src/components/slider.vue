<template>
    <swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide class="px-6 py-5">
            <h2 class="text-4xl font-extrabold mb-5">¿Qué es SANITY?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nihil iure atque harum doloribus, porro ad autem, error numquam minima quidem qui dolor, aut adipisci explicabo! Cupiditate labore impedit vero!</p>
        </swiper-slide>

        <swiper-slide>
            dsdsd
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [EffectCards],
        };
    },
    mounted() {
        let PROJECT_ID = "5ogj981v";
        let DATASET = "production";
        let QUERY = encodeURIComponent('*[_type == "home"]');

        // Compose the URL for your project's endpoint and add the query
        let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
        // fetch the content
        fetch(URL)
        .then((res) => res.json())
        .then(({ result }) => {
            console.log(result);
            // get the list element, and the first item
            // let list = document.querySelector("ul");
            // let firstListItem = document.querySelector("ul li");

            // if (result.length > 0) {
            //     // remove the placeholder content
            //     list.removeChild(firstListItem);

            //     result.forEach((pet) => {
            //     // create a list element for each pet
            //     let listItem = document.createElement("li");

            //     // add the pet name as the text content
            //     listItem.textContent = pet?.name;

            //     // add the item to the list
            //     list.appendChild(listItem);
            //     });
            //     let pre = document.querySelector("pre");
            //     // add the raw data to the preformatted element
            //     pre.textContent = JSON.stringify(result, null, 2);
            // }
        })
        .catch((err) => console.error(err));
    },
};
</script>
<style>
#app { height: 100% }

#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper {
  width: 100%;
  height: calc(100vh - 300px);
}

.swiper-slide {
    border-radius: 18px;
    color: #000;
    background-color: #f0f0f0;
}

/* .swiper-slide:nth-child(1n) {
  background-color: #f0f0f0;
}*/
</style>
  