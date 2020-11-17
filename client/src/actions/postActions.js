import {FETCH_FITTING, FETCH_FURNITURE, FETCH_ITEMS, ADD_ITEM} from '../actions/types';

export function fetchFurnitures() {
    return function(dispatch) {
        fetch('/api/category/furniture')
        .then(res => res.json())
        .then(items =>
            dispatch({
                type: FETCH_FURNITURE,
                payload: items
            }))
    }
}

export function fetchFittings() {
    return function(dispatch) {
        fetch('/api/category/fitting')
        .then(res => res.json())
        .then(items =>
            dispatch({
                type: FETCH_FITTING,
                payload: items
            }))
    }
}


export function fetchItems(category, area) {
    if(category === "furniture") {
        return function(dispatch) {
            fetch('/api/category/furniture/items',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify({area:area})
        })
            .then(res => res.json())
            .then(items =>
                dispatch({
                    type: FETCH_ITEMS,
                    payload: items
                }))
        }
    } else if(category === "fitting") {
        return function(dispatch) {
            fetch('/api/category/fitting/items',{
            method:'POST',
            headers: {
                'Content-type':'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify({area:area})
        })
            .then(res => res.json())
            .then(items =>
                dispatch({
                    type: FETCH_ITEMS,
                    payload: items
                }))
        }

    }
    
}


export function addItems({category, area, name, img_urls, description}) {

    if(category === "furniture") {
        const item = {name,category,area,imageStrings:img_urls,description}
        return function(dispatch) {
            fetch('/api/category/furniture',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(item)
        })
            .then(res => res.json())
            .then(items => {
                dispatch({
                    type: ADD_ITEM,
                    payload: items
                })

            })
            .catch(err => console.log(err));
        }
    } else if(category === "fitting") {
        const item = {name,category,area,imageStrings:img_urls,description}
        return function(dispatch) {
            fetch('/api/category/fitting',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(item)
        })
            .then(res => res.json())
            .then(items => {
                dispatch({
                    type: ADD_ITEM,
                    payload: items
                })

            })
            .catch(err => console.log(err));
        }

    }
    
}