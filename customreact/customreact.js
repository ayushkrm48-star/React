function customRendor(reactElement , container){

    
    const domElement = document.createElement(reactElement.type);

    domElement.textContent = reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    // we can make this thing done by the help of loops 
    for(const prop in reactElement.props){
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    
    container.appendChild(domElement);

}

const reactElement = {
    type :'a',
    props :{
        href:"https://google.com",
        target:"_blank"
    },
    children:"click here to open google"
}

const mainElement = document.getElementById("root");

customRendor(reactElement , mainElement); // this custom rendor will take reactElement and then it will inject in into the mainElement


