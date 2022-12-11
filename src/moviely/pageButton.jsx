const PageButton = (props) => {
    const {num,moveToPage}=props
  

    return (<div>
        <button type="button" className="btn btn-warning m-1 " onClick={()=>moveToPage(num)}>{num}</button>
    </div>);
}

export default PageButton;
