# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## The challenge

is to build out this 8-page planets fact site and get it looking as close to the design as possible.

users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### Preview

![Design preview for the Planets fact site coding challenge](src/assets/images/preview.jpg)

### Links

-  [Solution URL](https://www.frontendmentor.io/solutions/planetsfactsite-using-angular-17-gOP497seth)
-  [Live Site URL](https://planets-jet.vercel.app/earth)

## My process

### Built with

- Angular 17 
- Angular routing
- TypeScript
- Semantic HTML5 markup
- Scss
- Flexbox
- CSS Grid
- Mobile-first workflow
- Bem (I am not 100% using it, it just offers some guidelines for me to follow)
- Webstorm


### What I learned
- <h3 style="color: #d83a34; font-size: 18px; line-height: 1.5;">I really enjoyed using the binding system in angular:</h3>
```angular2html
 <button
  class="menu-btn"
  aria-controls="primary-nav"
  [attr.aria-expanded]="state"
  (click)="toggle()"
>
</button>
```

- <h3 style="color: #497EFA; font-size: 18px; line-height: 1.5;">I am new to angular and javascript frameworks in general, but I liked this 
routing system:</h3>
```typescript
export const routes: Routes = [
  { path: 'mercury', component: MercuryComponent },
  { path: 'venus', component: VenusComponent },
  { path: 'earth', component: EarthComponent },
  { path: 'mars', component: MarsComponent },
  { path: 'jupiter', component: JupiterComponent },
  { path: 'saturn', component: SaturnComponent },
  { path: 'uranus', component: UranusComponent },
  { path: 'neptune', component: NeptuneComponent },
  { path: '', redirectTo: '/earth', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
]
```

### Continued development

- In this project I could probably use grid instead of position absolute I realized that later doing the project, and 
I am not that powerful with grid  I will work more on my grid skills and come back later to refactor this project
---
### Useful resources

- [Responsive navbar tutorial](https://www.youtube.com/watch?v=HbBMp6yUXO0&t=22s) - This tutorial presented by kevin powell helped me when making an accessible and responsive navbar
- [How to Create Tabs With JavaScript](https://www.codeconcisely.com/posts/javascript-tabs/) - this was really helpful when making tabs
- [google-webfonts-helper](https://gwfh.mranftl.com/fonts) - this site made it really easy to import the fonts locally 
- [codpen 404 page](https://codepen.io/salehriaz/pen/erJrZM) - I used some of this pen on my 404 page
- [universe button](https://uiverse.io/shah1345/spicy-liger-32) - I used this button im my 404 page

## Me

- [LinkedIn](https://www.linkedin.com/in/amr-mohamed-7534a623b/)
- [Frontend Mentor](https://www.frontendmentor.io/profile/AmrAbdelgwaad)
