export default async function ({params, searchParams}) {
    console.log(await params) // log the params object to the console
    console.log(await searchParams) // log the params object to the console
    return (
        <div>
            <h1>id in id</h1>
        </div>
    )
}