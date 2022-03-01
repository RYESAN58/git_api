async function getapi(){
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/1")
    var _data = await response.json
    console.log(_data)
}
getapi()

