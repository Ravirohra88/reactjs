// function CustomRendering(reactElement , container){
//   const element = document.createElement(reactElement.type);
//   element.innerHTML  =reactElement.children;
//   element.setAttribute('href',reactElement.props.href);
//   element.setAttribute('target', reactElement.props.target);

//   container.appendChild(element);

// }

function CustomRendering(reactElement,container){
  const element =document.createElement(reactElement.type)
  element.innerHTML= reactElement.children
  for (const prop in reactElement.props) {
    if (prop === 'children') continue;  //old method used in react js to continue if there is any children in props
    element.setAttribute(prop,reactElement.props[prop])
  }
  container.appendChild (element)
}
const reactElement = {
    type: 'a',
    props : {
        href :'https://www.google.com',
        target :'_blank'
    },
    children:"click me to visit google"
}



const main_cont = document.querySelector('#root')

CustomRendering( reactElement,main_cont)