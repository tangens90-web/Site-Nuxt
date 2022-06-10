<template>
<div>
    <div class="container">

        <div class="comments">
            <h3>Комментарии</h3>

            <input type="text" class="comment_input" placeholder="Оставьте комментарий" v-model="comment"> <br>

            <button class="add_comment" @click="addComment">Добавить комментарий</button>

        

        <div class="comment_container">

            <div class="comment" v-for="item in comments" :key="item.id">

                {{ item }}
            </div>

        </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            comment: '',
            comments: []
        }

    },
    methods: {
        addComment() {
            if (this.comment.length >= 5) {
                this.comments.push(this.comment)
                this.comment = ''
            }

        }
    },

}
</script>

<style scoped>
h1 {
    padding-top: 1px;
    margin-top: 1px;
}

p {
    padding-top: 1px;
}

.comments {
    padding-left: 20px;
    font-size: 25px;
}

.comment_input {
    width: 500px;
    height: 100px;
    font-size: 25px;
}

.add_comment {
    font-size: 25px;
}
</style>
