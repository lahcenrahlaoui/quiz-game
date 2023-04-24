

const Skeleton =({loop}) =>{


    const renderSkeleton = []
    for(let i = 0 ; i<loop ; i++){
        let content = <div>
            <div className="s-outer"></div>
            <div className="s-inner"></div>
        </div>
        renderSkeleton.push(content)
    }


    return (
        <div>
            lkads
        </div>
    )
}