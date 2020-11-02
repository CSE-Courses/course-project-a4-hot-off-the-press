import { Album } from './app/models/album';

export const NEWRELEASES: Album[] = [
    { title: "2112", artist: "Rush", image: "/assets/2112.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "A Farewell to Kings", artist: "Rush", image: "/assets/afarewelltokings.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Johnny Winter", artist: "Johnny Winter", image: "/assets/johnnywinter.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Kind of Blue", artist: "Miles Davis", image: "/assets/kindofblue.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "The Wall", artist: "Pink Floyd", image: "/assets/wall.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Abbey Road", artist: "The Beatles", image: "/assets/abbeyroad.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "The Optimist", artist: "Cory Wong", image: "/assets/optimist.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Santana I", artist: "Carlos Santana", image: "/assets/santana1.png", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Choose Your Weapon", artist: "Hiatus Kaiyote", image: "/assets/cyw.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Tawk Tomahawk", artist: "Hiatus Kaiyote", image: "/assets/tawktomahawk.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Hill Climber", artist: "Vulfpeck", image: "/assets/hillclimber.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Songlines", artist: "Derek Trucks Band", image: "/assets/songlines.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "From Here To Now To You", artist: "Jack Johnson", image: "/assets/fhtnty.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "In Between Dreams", artist: "Jack Johnson", image: "/assets/inbetweendreams.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "All The Light Above It Too", artist: "Jack Johnson", image: "/assets/allthelightaboveittoo.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Side Pony", artist: "Lake Street Dive", image: "/assets/sidepony.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Free Yourself Up", artist: "Lake Street Dive", image: "/assets/freeyourselfup.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Bad Self Portraits", artist: "Lake Street Dive", image: "/assets/badselfportraits.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Rest In Peace", artist: "Steppenwolf", image: "/assets/rip.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "Moondance", artist: "Van Morrison", image: "/assets/moondance.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" },
    { title: "His Band and the Street Choir", artist: "Van Morrison", image: "/assets/hbatsc.jpg", genre:"", price:0, username:"", quality:"A", productID:"", date:"" }
]

export const BESTSELLERS: Album[] = NEWRELEASES.slice().reverse();