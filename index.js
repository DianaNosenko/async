const btnEl = document.getElementById('loadProducts');
const ul = document.getElementById('ul');
const store = {
    prod: null,
    isFetching: false,
    error: null,
};

btnEl.onclick = function () {
    fetch('https://fakestoreapi.com/products/category/electronics')
            .then(loadResolve)
            .then(logData)
};
function loadResolve(response){
    store.isFetching = true;
    return response.json();
}
function logData(data){
    store.isFetching = false;
    store.prod = data;
    console.log(store.prod);
    for (let i = 0; i < store.prod.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        let h3 = document.createElement('h3');
        h3.innerHTML = store.prod[i].title;
        li.appendChild(h3)
        let div = document.createElement('div');
        div.classList.add('img_container');
        let img = document.createElement('img');
        img.setAttribute('src',store.prod[i].image);
        div.appendChild(img);
        li.appendChild(div);
        let price = document.createElement('h4');
        price.innerHTML = 'Price: '+ store.prod[i].price + ' USD';
        li.appendChild(price);
        let info = document.createElement('h5');
        info.innerHTML = store.prod[i].description;
        li.appendChild(info);

    };
}

const btnAll = document.getElementById('allProducts');
btnAll.onclick = function () {
    fetch('https://fakestoreapi.com/products')
            .then(loadResolve)
            .then(logData)
};
const btnJew = document.getElementById('loadJewelery');
btnJew.onclick = function () {
    fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(loadResolve)
            .then(logData)
};

// function clear(){
//     const li = document.getElementsByTagName('li');
//     console.log()
//     // li.remove()

// }