interface dictionaries{
    artist : string,
    title : string,
    tracks : number
}


function make_album(artist:string, title:string, tracks:number):dictionaries{
    let dictionaries :dictionaries = {
        artist: artist,
        title : title,
        tracks: tracks
    };
    return dictionaries;
};

let firstalbum = make_album("artist1","album1",1);
let secondalbum = make_album("artist2","album2",2);
let thirdalbum = make_album("artist3","album3",3);

console.log(firstalbum);
console.log(secondalbum);
console.log(thirdalbum);


