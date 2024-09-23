

function App() {

    function sayHello(){
        console.log("Hello World")
    }

    function sayBye(){
        console.log("Goodbye World")
    }

    return (
        <>
            <h1>Hello</h1>
            <Person name={"Ricardo"} description={"is a diver"} age={38} isAdmin={true} living={"in a house"} myFunc={sayHello}/>
            <Person name={"Dominic"} description={"is a truck driver"} age={38} isAdmin={true} living={"in a house"} myFunc={sayBye} />
        </>
    );
}

export default App




type PersonProps = {
    name: string,
    age: number,
    description: string,
    isAdmin: boolean,
    living: string,
    myFunc: () => void
}

function Person({ name, description, age, isAdmin, living, myFunc }:PersonProps) {
    myFunc()
    return (
        <>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Age: {age}</p>
            <p>Admin: {isAdmin ? "Yes" : "No"}</p>
            <p>Living: {living}</p>
            <button onClick={myFunc}>Say Hello</button>
        </>
    );
}