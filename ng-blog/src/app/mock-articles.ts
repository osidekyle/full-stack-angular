import {Article} from "./article"



export const ARTICLES:Article[] =[
    {
        id:1,
        title:"My first article",
        content:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
        description:"This is my first article",
        key:'my-first-article',
        date:new Date(),
        imageUrl:'http://angular.io/assets/images/logos/angular/angular.png'
    },
    {
        id:2,
        title:"My second article",
        content:'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
        description:"This is my second article",
        key:'my-second-article',
        date:new Date(),
        imageUrl:'http://angular.io/assets/images/logos/angular/angular_solidBlack.png'
    }
];

