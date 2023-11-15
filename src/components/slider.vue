<template>
    <div>
        <div v-if="show">
            <swiper
                :effect="'cards'"
                :grabCursor="true"
                :modules="modules"
                class="mySwiper"
            >

                <swiper-slide class="px-6 py-5" v-for="(slide, i) in dataSlide" :key="i">
                    <h2 class="text-4xl font-extrabold mb-5">{{ slide.title }}</h2>
                    <SanityBlocks :blocks="slide.description" :serializers="serializers" />
                    <img v-if="slide.image?.asset?._ref" class="w-full max-w-2xl mx-auto" :src="`https://cdn.sanity.io/images/5ogj981v/production/${buildImage(slide.image?.asset?._ref)}`" alt="">
                </swiper-slide>
                
            </swiper>
        </div>
        <div v-else>
            <p>Cargando...</p>
        </div>
    </div>
</template>
<script>
import config from '../data/config.js';
import axios from 'axios';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';
// sanityBlock
import { SanityBlocks } from 'sanity-blocks-vue-component';

export default {
    components: {
        Swiper,
        SwiperSlide,
        SanityBlocks
    },
    data() {
        return {
            config: config,
            modules: [EffectCards],
            dataSlide: [],
            show: false,
            serializers: {
                types: {
                    image: (data) => {
                        return '<p>sd</p>'
                    }
                }
            }
        };
    },
    mounted() {
        this.getData()
    },
    methods: {
        async getData() {
            let PROJECT_ID = this.config.projectId;
            let DATASET = "production";
            let QUERY = encodeURIComponent('*[_type == "home"]');

            await axios.get(`https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`)
            .then((response) => {
                this.dataSlide = response.data.result[0].sliders
                console.log(this.dataSlide);
                this.show = true
            })
            .catch((error) => {
                console.log(error);
                alert('Error al cargar los datos')
            })
        },
        buildImage(inputString) {
            // Usar una expresión regular para extraer la parte relevante del string
            let match = inputString.match(/image-(\w+)-(\d+x\d+)-(\w+)/)
            let fileName = ''
            if (match) {
                // Construir el nuevo nombre de archivo utilizando las partes capturadas
                fileName = match[1] + "-" + match[2] + "." + match[3]
            }

            return fileName;
        }
    }
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
  height: calc(100vh - 150px);
}

.swiper-slide {
    border-radius: 18px;
    color: #000;
    background-color: #f0f0f0;
    overflow: hidden !important;
    overflow-x: hidden !important;
    overflow-y: auto !important;
}

p {
    margin-bottom: 20px;
}
ul {
    list-style-type: disc;
    padding-left: 20px;
}
ul li {
    margin-bottom: 10px;
}
</style>
  