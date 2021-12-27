import classes from '../../styles/Search/header.module.scss';
import SearchBar from './SearchBar';

export default ({h1, h5, placeholder, value, setValue, linkTo})=>
{
 
    return <div className={classes.containerSearch}>
         
    <div>
    <h1>{h1}</h1>
    <h5 className={classes.textPresentation}>{h5}</h5>
    </div>
    <div className={classes.containerSearchBar}>
  <SearchBar 
  placeholder={placeholder}
  value={value}
  setValue={setValue}
  linkTo={linkTo}
  
  />
  </div>
  
</div>
}