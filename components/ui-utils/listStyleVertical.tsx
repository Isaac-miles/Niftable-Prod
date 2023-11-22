type Props ={
  title:string,
  comingSoon:boolean
}
export default function ListStyleVertical({title,comingSoon}:Props) {

  return (
    
    <li className="headerLinkVertical">
      {title}
     {comingSoon && <span className='absolute top-1 mx-1 uppercase text-center py-0 px-2 text-[#AB23FF] text-[10px] rounded-2xl border-transparent'>soon</span>}
    </li>
  )
}