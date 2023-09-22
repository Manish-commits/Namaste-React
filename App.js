/*
    <div id="parent">
        <div id="child">
            <h1>Hey yaa.. !!</h1>
        </div>
    </div>
*/

const element  = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"}, 
        React.createElement("h1", {}, "Hey yaa..!!")
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);