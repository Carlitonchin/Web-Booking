import Gallery1 from "./Gallery/Gallery1";
import Gallery2 from "./Gallery/Gallery2";
import Gallery3 from "./Gallery/Gallery3";
import Gallery4 from "./Gallery/Gallery4";

export default ({pictures})=>
{
    let Gallery = null;
    switch(pictures.length)
    {
        case 1: Gallery = Gallery1; break;

        case 2: Gallery = Gallery2; break;

        case 3: Gallery = Gallery3; break;

        case 4: Gallery = Gallery4; break;
    }

    return  <Gallery pictures={pictures}/>
}