
type Props ={
  title:string,
  comingSoon:boolean
}
export default function ListStyleHorizontal({title,comingSoon}:Props) {

  return (
    
    <li className="headerLinkHorizontal">
      {title}
     {comingSoon && <span className='absolute bottom-2 mx-1 uppercase text-center py-0 px-2 bg-black text-[#AB23FF] text-[10px] rounded-2xl border-transparent'>soon</span>}
    </li>
  )
}
