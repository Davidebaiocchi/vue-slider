const app = new Vue(
    {
        el: '#app',
        data: {
            counter: 0,
            photos: [
                'img/kobe.jpg',
                'img/lebron.jpg',
                'img/jj.webp',
                'img/curry.jpg',
                'img/harden.jpg',
                'img/ryan.jpg',
                'img/irving.jpg',
                'img/howard.webp',
                'img/porter.jpg',
                'img/tatum.jpg'
            ]
        },
        methods: {
            nextPhoto(){
                (this.counter == this.photos.length - 1) ? this.counter = 0 
                : this.counter++;
            },
            prevPhoto(){
                if(this.counter == 0){
                    this.counter == this.photos.length - 1 
                }else {
                    this.counter--;
                }
            }
        }
    }
);