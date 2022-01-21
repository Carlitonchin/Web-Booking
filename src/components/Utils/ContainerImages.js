import Gallery1 from "./Gallery/Gallery1";
import Gallery2 from "./Gallery/Gallery2";
import Gallery3 from "./Gallery/Gallery3";
import Gallery4 from "./Gallery/Gallery4";
import GreatGallery from "./Gallery/GreatGallery";

export default ({pictures, handleImageExpanded})=>
{
    let Gallery = null;
    switch(pictures.length)
    {
        case 1: Gallery = Gallery1; handleImageExpanded=null; break;

        case 2: Gallery = Gallery2; handleImageExpanded=null; break;

        case 3: Gallery = Gallery3; handleImageExpanded=null; break;

        default:
             if(pictures.length < 8)
                Gallery = Gallery4;
            else
                Gallery = GreatGallery;
    }

    return  <Gallery pictures={pictures} handleImageExpanded={handleImageExpanded}/>
}