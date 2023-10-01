import { NavLink } from 'react-router-dom';

export const Header=()=>{
    return(
    <header className="z-50 
                    h-16 w-full px-5 box-border
                    flex justify-between items-center 
                    ">
    
        <nav className='flex gap-5 navBar text-blue-500  h-2/4'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Pokemon">Pokemon</NavLink>
        </nav>
    </header>
    )
}
