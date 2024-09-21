const carouselImages = [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIvMXSOZHqM8Z76rqt5nnIhRvQKxDKi-bDQ&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5g2AGnVxa4Kh5ONav_ycBTJg_e3ZVeqgP4Q&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLTGZmtLEbdWdDfRBzR6n84gjp6OHMkmRvw&usqp=CAU'
        ];
        let currentIndex = 0;

        document.getElementById('next').addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % carouselImages.length;
            document.getElementById('carousel-image').src = carouselImages[currentIndex];
        });

        document.getElementById('prev').addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
            document.getElementById('carousel-image').src = carouselImages[currentIndex];
        });