import { Album } from './app/models/album';

export const NEWRELEASES: Album[] = [
    { title: "2112", artist: "Rush", image: "/assets/2112.jpg" },
    { title: "A Farewell to Kings", artist: "Rush", image: "/assets/afarewelltokings.jpg" },
    { title: "Johnny Winter", artist: "Johnny Winter", image: "/assets/johnnywinter.jpg" },
    { title: "Kind of Blue", artist: "Miles Davis", image: "/assets/kindofblue.jpg" },
    { title: "The Wall", artist: "Pink Floyd", image: "/assets/wall.jpg" },
    { title: "Abbey Road", artist: "The Beatles", image: "/assets/abbeyroad.jpg" },
    { title: "The Optimist", artist: "Cory Wong", image: "/assets/optimist.jpg" },
    { title: "Santana I", artist: "Carlos Santana", image: "/assets/santana1.png" },
    { title: "Choose Your Weapon", artist: "Hiatus Kaiyote", image: "/assets/cyw.jpg" },
    { title: "Tawk Tomahawk", artist: "Hiatus Kaiyote", image: "/assets/tawktomahawk.jpg" },
    { title: "Hill Climber", artist: "Vulfpeck", image: "/assets/hillclimber.jpg" },
    { title: "Songlines", artist: "Derek Trucks Band", image: "/assets/songlines.jpg" },
    { title: "From Here To Now To You", artist: "Jack Johnson", image: "/assets/fhtnty.jpg" },
    { title: "In Between Dreams", artist: "Jack Johnson", image: "/assets/inbetweendreams.jpg" },
    { title: "All The Light Above It Too", artist: "Jack Johnson", image: "/assets/allthelightaboveittoo.jpg" },
    { title: "Side Pony", artist: "Lake Street Dive", image: "/assets/sidepony.jpg" },
    { title: "Free Yourself Up", artist: "Lake Street Dive", image: "/assets/freeyourselfup.jpg" },
    { title: "Bad Self Portraits", artist: "Lake Street Dive", image: "/assets/badselfportraits.jpg" },
    { title: "Rest In Peace", artist: "Steppenwolf", image: "/assets/rip.jpg" },
    { title: "Moondance", artist: "Van Morrison", image: "/assets/moondance.jpg" },
    { title: "His Band and the Street Choir", artist: "Van Morrison", image: "/assets/hbatsc.jpg" }
]

export const BESTSELLERS: Album[] = NEWRELEASES.slice().reverse();