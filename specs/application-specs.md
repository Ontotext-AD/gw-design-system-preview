The gw-design-system-preview project should be an Angular based web application which has the purpose to test the styleguide https://github.com/Ontotext-AD/graphwise-styleguide that is based on PrimeNG.

The task is to be setup a new web application using the latest angular version. 
Install and confugure PrimeNG.
Install the grpahwise-styleguide. The syleguide exposes a /dist/variables-light.css and /dist/variables-dark.css stylesheets. Those should be imported and used in the application.
Setup the primeng with a prefix `--gw-` that is the prefix used in the styleguide for all tokens exposed as variables.
The application must watch for the theme change in the OS and switch to dark/light mode respectively.

Create a simple page in which you create sections with different primeng components: p-tree, p-toast, p-drawer, p-breadcrumb, p-overlaybadge, p-button, p-select, p-toggleswitch, p-tag, p-panel, p-splitbutton, p-splitter, p-selectbutton, p-accordion, p-badge, p-message, p-card, p-skeleton
Use some dummy data and behavior where needed to make the components actionable and allow testing the design system properly.