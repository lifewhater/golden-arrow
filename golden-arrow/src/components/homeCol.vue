<!-- LOOK INTO MAKING A CAROUSEL INSTEAD OF SCROLLING DOWN -->
 

<template>
    <div v-for="(c, i) in tshirts" :key="i" class="layout">
        <img :src="c.shirt" alt="ERROR"/>
    </div>
</template>

<!-- MAKE IT LOOK LIKE OFLYN WEBSITE COLLECTION PAGE.
-HAVE A FLEX BOX, SHOW PRODUCT WITH MODEL. PRICE AT THE BOTTOM WITH NAME
    WITH PRICE BELOW IT, A LITTLE GRAYED OUT WITH SOME LINE SPACING. 
    SHOW THE PRODUCT WITH DIFFERENT VIEWS.
- ADD HOVER ELEMENT TO ADD TO CART AND MAKE THE CARD ITSELF CLICKABLE
- THE CARD EXPANDS INTO GALLERY VIEW TO SHOW THE PRODUCT IN DETAIL. -->

<script setup lang="ts">
import model1 from '@/assets/tshirts/model1-1.jpg'
import model2 from '@/assets/tshirts/model1-2.jpg'
import model3 from '@/assets/tshirts/model2-1.jpg'
import model4 from '@/assets/tshirts/model2-2.jpg'

const tshirts =[
    {shirt: model1},
    {shirt: model2},
    {shirt: model3},
    {shirt: model4},
]

</script>

<style scoped>
.product{
    color: var(--ga-silver);
    font-size: var(--ga-title-fontSize);
    margin-top: var(--ga-margin-top);
    /* margin-left: var(--ga-margin-leftSm); */

}



</style>