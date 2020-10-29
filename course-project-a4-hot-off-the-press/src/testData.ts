import { Album } from './app/models/album';

export const NEWRELEASES: Album[] = [
    { title: "2112", artist: "Rush", image: "", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "A Farewell to Kings", artist: "Rush", image: "/assets/testData/afarewelltokings.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Johnny Winter", artist: "Johnny Winter", image: "/assets/testData/johnnywinter.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Kind of Blue", artist: "Miles Davis", image: "", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "The Wall", artist: "Pink Floyd", image: "/assets/testData/wall.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Abbey Road", artist: "The Beatles", image: "/assets/testData/abbeyroad.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "The Optimist", artist: "Cory Wong", image: "/assets/testData/optimist.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Santana I", artist: "Carlos Santana", image: "/assets/testData/santana1.png", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Choose Your Weapon", artist: "Hiatus Kaiyote", image: "/assets/testData/cyw.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Tawk Tomahawk", artist: "Hiatus Kaiyote", image: "/assets/testData/tawktomahawk.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Hill Climber", artist: "Vulfpeck", image: "/assets/testData/hillclimber.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Songlines", artist: "Derek Trucks Band", image: "/assets/testData/songlines.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "From Here To Now To You", artist: "Jack Johnson", image: "/assets/testData/fhtnty.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "In Between Dreams", artist: "Jack Johnson", image: "/assets/testData/inbetweendreams.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "All The Light Above It Too", artist: "Jack Johnson", image: "/assets/testData/allthelightaboveittoo.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Side Pony", artist: "Lake Street Dive", image: "/assets/testData/sidepony.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Free Yourself Up", artist: "Lake Street Dive", image: "/assets/testData/freeyourselfup.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Bad Self Portraits", artist: "Lake Street Dive", image: "/assets/testData/badselfportraits.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Rest In Peace", artist: "Steppenwolf", image: "/assets/testData/rip.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Moondance", artist: "Van Morrison", image: "/assets/testData/moondance.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "His Band and the Street Choir", artist: "Van Morrison", image: "/assets/testData/hbatsc.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" }
]

export const BESTSELLERS: Album[] = NEWRELEASES.slice().reverse();