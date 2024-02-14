export const sendServerError=(res,error)=>{
    res.status(500).json({message:error.message})
}

export const sendNotFound=(res,message)=>{
    return res.status(404).json({message:message})
}

export const orderData =(data,order)=>{
    if(order==='asc'){
        return data.sort((a,b)=>a.id-b.id)
    }
    else if(order==='desc'){
        return data.sort((a,b)=>b.id-a.id)
    }
}

export const paginate =(data ,req, res)=>{
  //we need the page and the limit per page

  const page =Number(req.query.page);
  const limit = Number(req.query.limit);

  //starting index and result
  //starting index will be page one * limit
  const startIndex=(page-1)* limit; //0,10, 20, 30
  //endIndex will be the 
  const endIndex=page* limit; //10,20, 30, 40 
  //results
  const results={}

  //dont go beyond the data length

  if(endIndex<data.length){
    results.next={
        page:page+1,
        limit:limit
    }
  }

  if(startIndex>0){
    results.previous={
        page:page-1,
        limit:limit
    }
  }
  results.results=data.slice(startIndex,endIndex);
  res.status(200).json(results)


}