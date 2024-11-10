   import React from 'react';
   import ReactTooltip from 'react-tooltip';

   function App() {
     return (
       <div>
         <a data-tip="Hello World!">Hover me to see a tooltip</a>
         <ReactTooltip />
       </div>
     );
   }

   export default App;
   