<template>
    <div>
        <h1> {{ part.title }}</h1>
        <div>
            {{ part.description }}
        </div>
    </div>
</template>
<script>
import parts from '@/data/parts.js';

export default {
    name: "PartInfo",
    props: {
        partType: {type: String, required: false,},
        id: { 
          type: [ Number, String ], 
          required: false,
          validator(value) {
            return Number.isInteger(+value);
          }
        },
    },
    computed:{
        part(){
            const {partType, id} = this.$route.params;
            return parts[partType].find(part => part.id === +id)
        }
    },
}
</script>
<style lang="">
    
</style>