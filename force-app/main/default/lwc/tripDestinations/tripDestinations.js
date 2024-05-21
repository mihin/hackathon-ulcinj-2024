import { LightningElement } from 'lwc';

export default class TripDestinations extends LightningElement {
    destinations = [
        {
            key: 'key-1',
            title: 'Porto Montenegro',
            numberOfBuddies: 4,
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/229083734.jpg?k=53ce72193d3d0192615c13377c475bbd8ff6bb11e489df6cf383fc620aad114f&o=&hp=1',
        },
        {
            key: 'key-2',
            title: 'Lovchen',
            numberOfBuddies: 0,
            img: 'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/18-Lovcen_National_Park-e1519005929636.jpg',
        },
        {
            key: 'key-3',
            title: 'Zabljak',
            numberOfBuddies: 0,
            img: 'https://avatars.dzeninfra.ru/get-zen_doc/3475288/pub_607defa42a579e6952783c10_607df0911f98d874453e0abf/scale_1200',
        },
        {
            key: 'key-4',
            title: 'Sveti Stefan',
            numberOfBuddies: 6,
            img: 'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/2-Sveti_Stefan-e1518769502911.jpg',
        },
        {
            key: 'key-5',
            title: 'Skadar lake',
            numberOfBuddies: 5,
            img: 'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/8-Lake_Skadar-e1519008075974.jpg',
        },
    ]
}