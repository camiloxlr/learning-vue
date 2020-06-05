Vue.component('task', {

    template: '<li><slot></slot></li>'

});

Vue.component('task-list', {

    template: '<div><task v-for="task in tasks">{{ task.task }}</task></div>',

    data() {

        return {

            tasks: [

                { task: 'Ir à loja', completed: true },

                { task: 'Beber água', completed: false },

                { task: 'Estudar', completed: true },

                { task: 'Arrumar o quarto', completed: false },
            ]

        };

    }

});

Vue.component('car', {

    template: '<h4><slot></slot></h4>'

});

Vue.component('fruit', {

    template: '<h4>{{ fruit }}</h4>',

    data() {

        return {
            
            fruit: 'Laranja',

        };
    }

});

Vue.component('message', {

    props: ['title', 'body'],

    data() {

        return {

            isVisible: true

        };

    },

    template: `
    
        <article class="message is-info" v-show="isVisible">
            <div class="message-header">
                {{ title }}

                <button type="button" @click="isVisible = false">x</button>

            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>

    `,

    methods: {   

        hideModal() {

            this.isVisible = false;

        }

    }

});

new Vue({

    el: '#root',

});
