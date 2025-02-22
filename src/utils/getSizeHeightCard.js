 


export function getSizeHeightCard(palabras){

    const dimension =  parseInt( (parseInt(palabras) / 65) * 15 );
    //console.log("dimens: "+dimension);
    return dimension;
}

export function getSizeHeightButton(palabras){

    const dimension =  parseInt( (parseInt(palabras) / 20) * 20 );
    //console.log("dimens: "+dimension);
    return dimension;
}