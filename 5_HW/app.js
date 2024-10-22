const addItemBtn = document.getElementById('add-item-btn');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const filterAllBtn = document.getElementById('filter-all'); 
const filterPurchasedBtn = document.getElementById('filter-purchased'); 
const filterUnpurchasedBtn = document.getElementById('filter-unpurchased');

const items = [];

addItemBtn.addEventListener('click', function() {
    const itemName = itemInput.value.trim();

    if (itemName !== "") {
        const newItem = {
            name: itemName,
            purchased: false
        };

        items.push(newItem); 
        itemInput.value = "";
    } else {
        alert("Please enter an item name.");
    }
});

function createItem(item) {
    const li = document.createElement('li');
    li.textContent = item.name;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', function() {
        itemList.removeChild(li);
    });

    const perchaseBtn = document.createElement('button');
    if(!item.purchased) {
        perchaseBtn.textContent = 'perchase';
        perchaseBtn.addEventListener('click', function() {
            item.purchased = true;
            perchaseBtn.textContent = 'perchased';
        });
    } else
        perchaseBtn.textContent = 'perchased';

    li.appendChild(perchaseBtn);
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
};

function filterAll() {
    itemList.innerHTML = '';
    items.forEach(item => {
        createItem(item);
    });
};

function filterPurchased() {
    itemList.innerHTML = '';
    items.forEach(item => {
        if(item.purchased)
            createItem(item);
    });
};

function filterUnpurchased() {
    itemList.innerHTML = '';
    items.forEach(item => {
        if(!item.purchased)
            createItem(item);
    });
};

filterAllBtn.addEventListener('click', function() {
    filterAll();
});

filterPurchasedBtn.addEventListener('click', function() {
    filterPurchased();
});

filterUnpurchasedBtn.addEventListener('click', function() {
    filterUnpurchased();
});