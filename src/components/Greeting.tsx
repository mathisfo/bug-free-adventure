const Greeting = ({name}: {name: string}) => {
    return ( 
        <div className="grid text-xl text-gray-700 rounded my-8">Hey, {name}!</div>
    )
}

export default Greeting