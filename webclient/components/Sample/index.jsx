import Child from './searchButton.jsx';
import Child1 from './displayZomato.jsx';
import Child3 from './favourite.jsx';


//Export the component, so that by including the Folder, by default the component is exported


// export default Child;



//If your functional module have multiple components and more than one of them have to be exported, follow the object notation to export them

/*module.exports =  {
    component1: component1,
    component2: component2,
    component3: component3,
    ..
    ..
    componentN: componentN,
}*/
module.exports =  {
    Child: Child,
    Child1: Child1,
    Child3: Child3,
}