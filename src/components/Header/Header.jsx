import { FirstHeader } from './FirstHeader/FirstHeader'
import { SecondHeader } from './SecondHeader/SecondHeader'
import { HamburguerMenu } from './HamburguerMenu/HamburguerMenu'
import { useMediaQuery } from '../../hooks/useMediaQueries'
import './Header.css'

export const Header = () => {
    const mobile = useMediaQuery('(min-width: 850px)');

    return (
        <header>
            {!mobile ?

                <HamburguerMenu />
                :
                <>
                    <FirstHeader />
                    <SecondHeader />
                </>
            }
        </header>
    )
}