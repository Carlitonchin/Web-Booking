import classes from '../../styles/Search/header.module.scss';
import SearchBar from './SearchBar';

export default ({h1, h5, placeholder})=>
{
    return <div className={classes.containerSearch}>
         
    <div>
    <h1>{h1}</h1>
    <h5 className={classes.textPresentation}>{h5}</h5>
    </div>
    <div className={classes.containerSearchBar}>
  <SearchBar placeholder={placeholder}/>
  </div>
  
</div>
}