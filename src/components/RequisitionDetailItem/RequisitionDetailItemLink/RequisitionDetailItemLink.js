const RequisitionDetailItemLink = (props) => {
  return (
    <a style={{color: 'black', textDecoration: 'underline'}}
       href={props.link}
    >{props.text}
    </a>
  )
}

export default RequisitionDetailItemLink;
