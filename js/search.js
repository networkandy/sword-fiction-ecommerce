//filter btns 
(function(){
//select all buttons
const filterBtn = document.querySelectorAll('.filter-btn');
// console.log(filterBtn);

filterBtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        //prevent default action
        e.preventDefault;

        //dataset.filter is the data-filter attribute
        const value = e.target.dataset.filter;
        // console.log(value);
        const items = document.querySelectorAll('.store-item');
        // console.log(items);
        items.forEach(function(item){
            if(value === 'all'){
                item.style.display = 'block';
            } else {
                if(item.classList.contains(value)){
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    })
});

})();




//search input
(function(){
    //target seach box
    const search = document.getElementById('search-item');

    search.addEventListener('keyup', function(){
        let value = search.value.toLowerCase().trim();
        // console.log(value);

        //select all items
        const allItems = document.querySelectorAll('.store-item');
        allItems.forEach(function(item){
            let type = item.dataset.items;

            // console.log(typeof type);
            if(type.includes(value)){
                item.style.display ='block';
            } else {
                item.style.display ='none';
            }

            // let length = value.length;
            // let match = type.slice(0, length);
            // // console.log(length);
            // console.log(value);
            // console.log(match);

            // if(value === match){
            //     item.style.display ='block';
            // } else {
            //     item.style.display ='none';
            // }

        });

    });
})();