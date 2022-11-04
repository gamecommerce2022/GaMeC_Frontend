export const getUrlMapLink : (path: string) => string[] = function (path: string) : string[] {
    let urlQuery : string[] = path.split('?');
    if(urlQuery.length > 1){
        let urlQueries = urlQuery[urlQuery.length - 1].split('&');
        return urlQueries;
    } else {
        return [];
    }    
}

export const getUrlLink : (tag: string, path: string|null) => string = function (tag: string, path: string|null) : string {
    let paths: string[] = [];
    let urlQueryPaths = getUrlMapLink(window.location.href);
    let isChecked = false;
      for(var query of urlQueryPaths){
        if(query.includes(tag)){
          if(path !== null){
            paths.push(path);
          }          
          isChecked = true;
        } else {
          paths.push(query);
        }
      }
    if(isChecked === false){
      if(path !== null){
        paths.push(path);
      }    
    }
    return paths.join('&');
}