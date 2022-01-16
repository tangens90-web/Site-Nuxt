<template>
    
<div>
    <Post></Post>
  
</div>
</template>

<script>


export default {
    data() {
        return {
            id:this.$route.params.id,
            posts:[{
                id:1,
                name:";ll"
                },
                {
                id:2,
                name:";ll"
                },
                {
                id:3,
                name:";ll"
                },
            ]
        }
    },
    
   
   
}
</script>

<style scoped>

</style>
