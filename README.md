# grinnode-live-frontend
.
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Installation
1. Clone the project folder and open it.
2. Create a new file named: ".env" and add the following content:

````vue
SITE_SUB_FOLDER='/'
````
3. If you are running your site behind a subfolder like: http://site/subfolder
You need to set SITE_SUB_FOLDER='/subfolder/' .
4. Run "npm run build" (That will create the /dist folder).
5. Publish the /dist folder.

### Documentation
This project was built with VueJS: https://vuejs.org/

#### Edit pages
Every page is stored in the /views folder as a component. 
To update a page, you simply open the .vue file of the page 
and change text/images & other content in the Template tags. 
The logic is in the Script tags and the styling is in the SCOPED Style tags. 
**Some styling may be handled in the App.vue component. Like color themes.**

#### Add pages
To add a new page, you create a new vue file in the /views directory 
and name it according to your new page. 
Then you copy the Template contents from /views/PageTemplate to the Template of your new vue file.

To make your page accessible, you'll have to add a route in /router/index.js like:
````vue
{
    path: '/new-page',
    name: 'newpage',
    component: NewPage,
},
````
To link to your new page you can add a Router-Link:
````vue
<router-link exact to="/new-page">New Page</router-link>
````

#### Header, Navigation & Footer
Editing the Header, Navigation and Footer is the same as editing a page. 
The only difference is that these files are stored in /components instead of views 
since they are reused by multiple views..
