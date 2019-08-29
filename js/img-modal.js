(function (){
    //All the images
    let imageList = [];
    let counter = 0;

    const images = document.querySelectorAll('.store-img');
    const container = document.querySelector('.lightbox-container');
    const item = document.querySelector('.lightbox-item');
    const closeIcon = document.querySelector('.lightbox-close');
    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');

    //add all images to the array
    images.forEach(function(img){
        imageList.push(img.src);
    });
    // console.log(images);

    //open modal

    images.forEach(function(img){
        img.addEventListener('click', function(e){
            //show modal 
            container.classList.add('show');

            //get image source src =""
            let src = e.target.src;
            // console.log(src);
            counter = imageList.indexOf(src);
            // console.log(counter);
            
            //show modal with the clicked image
            item.style.backgroundImage = `url(${src})`;
        });
    });

    //close modal
    closeIcon.addEventListener('click', function(){
        container.classList.remove('show');
    });

    //right and left click buttons
    btnLeft.addEventListener('click', function(){
        counter--;
        if(counter < 0){
            counter = imageList.length -1;
        }
        item.style.backgroundImage = `url(${imageList[counter]})`;
        console.log(counter);
    });


    //right button 
    btnRight.addEventListener('click', function(){
        counter++;
        if(counter > imageList.length -1){
            counter = 0;
        }
        item.style.backgroundImage = `url(${imageList[counter]})`;
        console.log(counter);
    });

})();