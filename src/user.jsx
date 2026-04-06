function User({name, age, relation}){
    return (
    <div>
<h1>Name: {name}
</h1>
<h1>
    Age: {age}
</h1>
<h1>
    Relation: {relation}
</h1>

    </div> )
}

export default User;


export function User2({detail}){
    return (
    <div>
<h1>Name: {detail.name}
</h1>
<h1>
    Age: {detail.age}
</h1>
<h1>
    Relation: {detail.relation}
</h1>

    </div> )
}

export function Student({name}){
    return(
        <div>
            <h1>
                Student Name: {name}
            </h1>
        </div>
    )

}

