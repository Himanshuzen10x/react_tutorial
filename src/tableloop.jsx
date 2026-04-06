function TAbleloop() {

    const userDATA = [
        {
            name: "Himanshu",
            id: "1",
            college: "aktu",
            transport: "bike"

        },
        {
            name: "raju",
            id: "2",
            college: "ggbu",
            transport: "f35"

        },
        {
            name: "kamlesh",
            id: "3",
            college: "iim",
            transport: "ins vikrant"

        },
        {
            name: "pappu",
            id: "4",
            college: "iimt",
            transport: "defender"

        }
    ]
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                    <td>Name</td>
                    <td>ID</td>
                    <td>College</td>
                    <td>Transport</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        userDATA.map((user)=>(
                    <tr key={user.details}>
                        <td>{user.name}</td>
                        <td>{user.id}</td>
                        <td>{user.college}</td>
                        <td>{user.transport}</td>
                    </tr>
                    ))
                }
                </tbody>
            </table>

        </div>
    )
}

export default TAbleloop