var app = new Vue({
    el: '#root',
    data: {
        mail: [],
        },
    methods: {

    },

    mounted: function(){
        for (var i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function(risposta) {
                    app.mail.push(risposta.data.response);
                    console.log(app.mail);
                });
        }
    },

})
