const Greeting = ({name}: {name: string}) => {
    return ( 
        <div className="grid text-3xl text-color rounded my-8 justify-center">Hey, {name}!</div>
    )
}

export default Greeting